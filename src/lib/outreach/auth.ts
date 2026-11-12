import "server-only";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { isValidAdminSession } from "./tokens";

export const SESSION_COOKIE = "outreach_session";

export async function isAdmin(): Promise<boolean> {
  const store = await cookies();
  return isValidAdminSession(store.get(SESSION_COOKIE)?.value);
}

/** Call at the top of every admin page and server action. */
export async function requireAdmin(): Promise<void> {
  if (!(await isAdmin())) redirect("/outreach/login");
}
