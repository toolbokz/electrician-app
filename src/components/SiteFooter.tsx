import Link from "next/link";
import { Container } from "./Container";
import { PhoneIcon, MailIcon, MapPinIcon } from "./Icons";

const PHONE_DISPLAY = "021 770 844";
const PHONE_TEL = "+6421770844";

const footerServices = [
    "Residential Electrical",
    "Commercial Electrical",
    "Switchboard Upgrades",
    "Lighting Installation",
    "Emergency Callouts",
    "Testing & Compliance",
];

const footerLinks = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
];

export function SiteFooter() {
    return (
        <footer className="border-t border-white/[0.08] bg-slate-950">
            <Container>
                <div className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2.5 text-lg font-bold text-white">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-400 text-sm font-black text-slate-950">
                                JW
                            </span>
                            Just Wright Electrical
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-white/50">
                            Auckland&apos;s trusted electricians. Licensed,
                            insured, and committed to quality workmanship on
                            every job.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
                            Services
                        </h3>
                        <ul className="mt-4 space-y-2.5">
                            {footerServices.map((service) => (
                                <li key={service}>
                                    <Link
                                        href="#services"
                                        className="text-sm text-white/50 transition-colors hover:text-amber-400"
                                    >
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
                            Company
                        </h3>
                        <ul className="mt-4 space-y-2.5">
                            {footerLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/50 transition-colors hover:text-amber-400"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
                            Get in Touch
                        </h3>
                        <div className="mt-4 space-y-3">
                            <a
                                href={`tel:${PHONE_TEL}`}
                                className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-amber-400"
                            >
                                <PhoneIcon size={14} />
                                {PHONE_DISPLAY}
                            </a>
                            <a
                                href="mailto:info@justwrightelectrical.co.nz"
                                className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-amber-400"
                            >
                                <MailIcon size={14} />
                                info@justwrightelectrical.co.nz
                            </a>
                            <address className="flex items-start gap-2 text-sm not-italic text-white/50">
                                <MapPinIcon
                                    size={14}
                                    className="mt-0.5 shrink-0"
                                />
                                <span>
                                    163 Mokoia Road, Birkenhead
                                    <br />
                                    Auckland 0626
                                </span>
                            </address>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/[0.06] py-6">
                    <div className="flex flex-col items-center justify-between gap-3 text-xs text-white/40 sm:flex-row">
                        <p>
                            &copy; {new Date().getFullYear()} Just Wright
                            Electrical. All rights reserved.
                        </p>
                        <p>
                            Built by{" "}
                            <a
                                href="https://fullstackforge.co.nz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-white/60 transition-colors hover:text-amber-400"
                            >
                                Fullstack Forge
                            </a>
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
