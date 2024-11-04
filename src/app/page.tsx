"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const pathname = usePathname();

  return (
    <main className="common-layout">
      <h1>Home page</h1>

      <Link href="/pricing">To pricing</Link>
    </main>
  );
}
