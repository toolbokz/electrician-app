import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

type ButtonLinkProps = {
    href: string;
    children: ReactNode;
    variant?: Variant;
    className?: string;
    ariaLabel?: string;
};

export function ButtonLink({
    href,
    children,
    variant = "primary",
    className,
    ariaLabel,
}: ButtonLinkProps) {
    const base =
        "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

    const styles =
        variant === "primary"
            ? "bg-amber-400 text-slate-950 hover:bg-amber-300"
            : "border border-white/15 bg-white/5 text-white hover:bg-white/10";

    return (
        <Link
            href={href}
            aria-label={ariaLabel}
            className={[base, styles, className].filter(Boolean).join(" ")}
        >
            {children}
        </Link>
    );
}
