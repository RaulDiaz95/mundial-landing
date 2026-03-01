"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith("/en");

  const baseClasses =
    "text-xs font-semibold uppercase tracking-[0.2em] transition-opacity";
  const activeClasses = "text-neutral-900 opacity-90";
  const inactiveClasses = "text-neutral-500 opacity-60 hover:opacity-90";

  return (
    <div className="fixed right-6 top-4 z-40 flex items-center gap-3 rounded-full bg-white/70 px-3 py-2 text-[11px] backdrop-blur">
      <Link
        href="/"
        className={`${baseClasses} ${!isEnglish ? activeClasses : inactiveClasses}`}
        aria-current={!isEnglish ? "page" : undefined}
      >
        ESP
      </Link>
      <span className="text-neutral-400">|</span>
      <Link
        href="/en"
        className={`${baseClasses} ${isEnglish ? activeClasses : inactiveClasses}`}
        aria-current={isEnglish ? "page" : undefined}
      >
        EN
      </Link>
    </div>
  );
}
