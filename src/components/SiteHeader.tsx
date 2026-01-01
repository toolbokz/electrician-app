import Link from "next/link";
import { Container } from "@/components/Container";

export function SiteHeader() {
    return (
        <header className="border-b border-white/10 bg-slate-950/70 backdrop-blur">
            <Container>
                <div className="flex items-center justify-between py-4">
                    <Link
                        href="#top"
                        className="text-base font-semibold tracking-tight text-white"
                    >
                        Just Wright Electrical
                    </Link>

                    <nav aria-label="Primary" className="flex items-center gap-5">
                        <Link
                            href="#services"
                            className="text-sm font-medium text-white/80 hover:text-white"
                        >
                            Services
                        </Link>
                        <Link
                            href="#contact"
                            className="text-sm font-medium text-white/80 hover:text-white"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            </Container>
        </header>
    );
}
