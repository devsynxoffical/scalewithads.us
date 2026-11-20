<?php
/**
 * Lead form endpoint for the Hostinger (static) build.
 * Same behaviour as src/app/api/lead/route.ts on Vercel.
 *
 * Settings live in api/config.php on the server (NOT in git). Copy
 * config.sample.php to config.php in Hostinger's File Manager and fill it in.
 *   RESEND_API_KEY   optional: send through Resend (https://resend.com)
 *   LEAD_EMAIL_TO    where leads are emailed (comma-separated allowed)
 *   LEAD_EMAIL_FROM  sender, e.g. "Scale With Ads <leads@scalewithads.us>"
 * Without RESEND_API_KEY, PHP mail() is used (works on Hostinger).
 * Every lead is also appended to api/leads.log (blocked from the web).
 */
header('Content-Type: application/json');
header('Cache-Control: no-store');

function out($code, $data) { http_response_code($code); echo json_encode($data); exit; }

if ($_SERVER['REQUEST_METHOD'] !== 'POST') out(405, ['ok' => false, 'error' => 'Method not allowed.']);

$body = json_decode(file_get_contents('php://input'), true);
if (!is_array($body)) out(400, ['ok' => false, 'error' => 'Invalid request.']);

$clean = function ($k, $max) use ($body) {
    return isset($body[$k]) && is_string($body[$k]) ? mb_substr(trim($body[$k]), 0, $max) : '';
};

// Honeypot: real visitors never fill the hidden "website" field.
if ($clean('website', 200) !== '') out(200, ['ok' => true]);

$lead = [
    'name' => $clean('name', 100),
    'company' => $clean('company', 150),
    'email' => $clean('email', 200),
    'phone' => $clean('phone', 40),
    'budget' => $clean('budget', 60),
    'industry' => $clean('industry', 60),
    'message' => $clean('message', 1500),
    'page' => $clean('page', 200),
];

if ($lead['name'] === '' || !filter_var($lead['email'], FILTER_VALIDATE_EMAIL) || strlen(preg_replace('/\D/', '', $lead['phone'])) < 7) {
    out(400, ['ok' => false, 'error' => 'Please enter your name, a valid email and a phone number.']);
}

// Always keep a copy.
@file_put_contents(__DIR__ . '/leads.log', json_encode($lead + ['at' => gmdate('c')]) . PHP_EOL, FILE_APPEND | LOCK_EX);

$cfg = file_exists(__DIR__ . '/config.php') ? (include __DIR__ . '/config.php') : [];
$to = array_filter(array_map('trim', explode(',', $cfg['LEAD_EMAIL_TO'] ?? '')));
if (!$to) out(200, ['ok' => true, 'emailed' => false]);

$from = $cfg['LEAD_EMAIL_FROM'] ?? 'Scale With Ads <leads@scalewithads.us>';
$labels = ['name' => 'Name', 'company' => 'Company / firm', 'email' => 'Email', 'phone' => 'Phone', 'budget' => 'Monthly ad budget', 'industry' => 'Industry', 'message' => 'Message', 'page' => 'Page'];
$rows = '';
foreach ($labels as $k => $label) {
    if ($lead[$k] !== '') $rows .= '<tr><td style="padding:6px 12px;color:#57534e"><b>' . $label . '</b></td><td style="padding:6px 12px">' . htmlspecialchars($lead[$k], ENT_QUOTES) . '</td></tr>';
}
$subject = 'New lead: ' . $lead['name'] . ($lead['company'] ? ' (' . $lead['company'] . ')' : '') . ($lead['industry'] ? ' · ' . $lead['industry'] : '');
$html = '<h2 style="font-family:sans-serif">New website lead</h2><table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">' . $rows . '</table>';

$sent = false;
if (!empty($cfg['RESEND_API_KEY']) && function_exists('curl_init')) {
    $ch = curl_init('https://api.resend.com/emails');
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 15,
        CURLOPT_HTTPHEADER => ['Authorization: Bearer ' . $cfg['RESEND_API_KEY'], 'Content-Type: application/json'],
        CURLOPT_POSTFIELDS => json_encode(['from' => $from, 'to' => array_values($to), 'reply_to' => $lead['email'], 'subject' => $subject, 'html' => $html]),
    ]);
    curl_exec($ch);
    $sent = curl_getinfo($ch, CURLINFO_HTTP_CODE) < 300;
    curl_close($ch);
}
if (!$sent) {
    $headers = "MIME-Version: 1.0\r\nContent-Type: text/html; charset=UTF-8\r\nFrom: " . $from . "\r\nReply-To: " . $lead['email'] . "\r\n";
    $sent = @mail(implode(',', $to), '=?UTF-8?B?' . base64_encode($subject) . '?=', $html, $headers);
}

out(200, ['ok' => true, 'emailed' => (bool) $sent]);
