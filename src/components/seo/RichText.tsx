import Link from "next/link";
import React from "react";

/** Renders text with inline [label](/path) links as Next.js <Link>s. */
export function RichText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(
      <Link key={m.index} href={m[2]} className="font-bold text-purple-700 underline underline-offset-4 decoration-purple-300 hover:decoration-purple-700">
        {m[1]}
      </Link>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
