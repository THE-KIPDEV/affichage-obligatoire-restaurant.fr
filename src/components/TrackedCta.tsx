"use client";

import Link from "next/link";

interface TrackedCtaProps {
  href: string;
  cta: string;
  className?: string;
  children: React.ReactNode;
}

export function TrackedCta({ href, cta, className, children }: TrackedCtaProps) {
  function handleClick() {
    if (typeof window !== "undefined" && (window as any).kipstats?.event) {
      (window as any).kipstats.event("cta_click", { cta });
    }
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
