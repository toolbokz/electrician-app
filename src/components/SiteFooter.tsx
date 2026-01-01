import { Container } from "@/components/Container";

const PHONE_DISPLAY = "021 770 844";
const PHONE_TEL = "+6421770844";

export function SiteFooter() {
    return (
        <footer className="border-t border-white/10 bg-slate-950">
            <Container>
                <div className="py-10 text-sm text-white/80">
                    <p className="font-semibold text-white">Just Wright Electrical</p>
                    <address className="not-italic">
                        163 Mokoia Road, Birkenhead, Auckland 0626
                    </address>
                    <p>
                        <a
                            className="text-white hover:text-amber-300"
                            href={`tel:${PHONE_TEL}`}
                        >
                            {PHONE_DISPLAY}
                        </a>
                    </p>
                </div>
            </Container>
        </footer>
    );
}
