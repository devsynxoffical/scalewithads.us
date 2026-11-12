import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/outreach/auth";
import { login } from "../actions";
import { btn, Flash, first, input } from "../ui";

export default async function LoginPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  if (await isAdmin()) redirect("/outreach");
  const sp = await searchParams;
  return (
    <main className="grid min-h-screen place-items-center px-4">
      <form action={login} className="w-full max-w-sm rounded-xl border border-stone-200 bg-white p-6">
        <h1 className="mb-1 text-lg font-semibold">DevSynx Outreach</h1>
        <p className="mb-5 text-sm text-stone-500">Sign in to manage your cold email campaigns.</p>
        <Flash err={first(sp.err)} />
        <label className="mb-1 block text-sm font-medium" htmlFor="password">
          Password
        </label>
        <input id="password" name="password" type="password" required autoFocus className={input} />
        <button className={`${btn} mt-4 w-full`}>Sign in</button>
      </form>
    </main>
  );
}
