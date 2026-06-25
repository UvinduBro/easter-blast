"use client";

import { signOut } from "firebase/auth";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { auth } from "@/lib/firebase-client";
import { useAuth } from "@/lib/hooks/useAuth";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (loading) return;
    if (!user && !isLoginPage) router.replace("/admin/login");
    if (user && isLoginPage) router.replace("/admin");
  }, [loading, user, isLoginPage, router]);

  if (isLoginPage) return <>{children}</>;

  if (loading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-zinc-500">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950 px-4 py-3">
        <div className="flex items-center gap-4">
          <Link href="/admin" className="text-sm font-semibold text-zinc-50">
            Admin Panel
          </Link>
          <Link href="/admin/nodes" className="text-xs text-zinc-400 hover:text-zinc-200">
            Nodes
          </Link>
          <Link href="/admin/edges" className="text-xs text-zinc-400 hover:text-zinc-200">
            Connections
          </Link>
          <Link
            href="/"
            className="text-xs text-zinc-500 hover:text-zinc-300"
          >
            ← Back to map
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-zinc-500">{user.email}</span>
          <button
            type="button"
            onClick={() => signOut(auth)}
            className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-200 hover:border-zinc-500 hover:bg-zinc-800"
          >
            Sign out
          </button>
        </div>
      </header>
      <main className="flex-1 bg-zinc-950 p-4">{children}</main>
    </div>
  );
}
