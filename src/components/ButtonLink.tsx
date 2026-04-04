import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type ButtonLinkProps = {
    href: string;
    children: ReactNode;
    variant?: Variant;
    size?: Size;
    className?: string;
    ariaLabel?: string;
};

const sizeStyles: Record<Size, string> = {
    sm: "gap-1.5 px-4 py-2 text-sm",
    md: "gap-2 px-5 py-2.5 text-sm",
    lg: "gap-2 px-6 py-3 text-base",
};

const variantStyles: Record<Variant, string> = {
    primary:
        "bg-amber-400 text-slate-950 font-semibold shadow-lg shadow-amber-400/20 hover:bg-amber-300 hover:shadow-amber-300/25 active:bg-amber-500",
    secondary:
        "border border-white/15 bg-white/5 text-white font-medium hover:bg-white/10 hover:border-white/20",
    ghost: "text-white/70 font-medium hover:text-white hover:bg-white/5",
};

export function ButtonLink({
    href,
    children,
    variant = "primary",
    size = "md",
    className,
    ariaLabel,
}: ButtonLinkProps) {
    const base =
        "inline-flex items-center justify-center rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

    return (
        <Link
            href={href}
            aria-label={ariaLabel}
            className={[base, sizeStyles[size], variantStyles[variant], className]
                .filter(Boolean)
                .join(" ")}
        >
            {children}
        </Link>
    );
}
