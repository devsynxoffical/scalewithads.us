# Deploying scalewithads.us on Hostinger

This branch is the ready-to-serve website (static HTML + PHP). No build step on Hostinger.

1. hPanel → Websites → scalewithads.us → Advanced → **GIT**
   - Repository: https://github.com/devsynxoffical/scalewithads.us.git
   - Branch: **hostinger**
   - Install path: leave empty (deploys into public_html). public_html must be empty first.
   - Click Create, then **Deploy**. Optional: enable Auto Deployment with the webhook shown there.
2. Lead form email: File Manager → public_html/api → copy `config.sample.php` to `config.php` and set `LEAD_EMAIL_TO`. Leads are also kept in api/leads.log.
3. SSL: hPanel → Security → SSL → install the free certificate.
4. DNS: point scalewithads.us and www to Hostinger (A record from hPanel, or Hostinger nameservers).

Updating the site: on main run `npm run build:hostinger`, copy ./out to this branch, push, then click Deploy (or auto-deploy).
