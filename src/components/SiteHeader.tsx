import Link from "next/link";
import { Container } from "./Container";
import { MobileNav } from "./MobileNav";
import { ButtonLink } from "./ButtonLink";
import { PhoneIcon } from "./Icons";

const NAV_ITEMS = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-slate-950/80 backdrop-blur-xl">
            <Container>
                <div className="flex items-center justify-between py-3.5">
                    <Link
                        href="#top"
                        className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white"
                    >
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-400 text-sm font-black text-slate-950">
                            JW
                        </span>
                        <span className="hidden sm:inline">
                            Just Wright Electrical
                        </span>
                    </Link>

                    <nav
                        aria-label="Primary"
                        className="hidden items-center gap-1 lg:flex"
                    >
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="rounded-lg px-3 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden items-center gap-4 lg:flex">
                        <a
                            href="tel:+6421770844"
                            className="flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-amber-400"
                        >
                            <PhoneIcon size={16} />
                            021 770 844
                        </a>
                        <ButtonLink
                            href="#contact"
                            variant="primary"
                            size="sm"
                        >
                            Free Quote
                        </ButtonLink>
                    </div>

                    <MobileNav items={NAV_ITEMS} />
                </div>
            </Container>
        </header>
    );
}
