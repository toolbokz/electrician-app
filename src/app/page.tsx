import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

import electrician1 from "@/images/electrician-1.jpg";
import electrician2 from "@/images/electrician-2.jpg";
import electrician3 from "@/images/electrician-3.jpg";

const PHONE_DISPLAY = "021 770 844";
const PHONE_TEL = "+6421770844";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Just Wright Electrical",
    address: {
      "@type": "PostalAddress",
      streetAddress: "163 Mokoia Road, Birkenhead",
      addressLocality: "Auckland",
      postalCode: "0626",
      addressCountry: "NZ",
    },
    telephone: PHONE_DISPLAY,
    areaServed: "Auckland, New Zealand",
    openingHours: "Mo-Fr 08:00-17:00",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "72",
    },
  };

  return (
    <div id="top" className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
          <div className="absolute -top-24 left-1/2 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />
          <Container>
            <div className="relative py-14 sm:py-18">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div className="max-w-2xl">
                  <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                    Trusted Auckland Electricians for Residential &amp;
                    Commercial Work
                  </h1>
                  <p className="mt-4 text-pretty text-base leading-7 text-white/80 sm:text-lg">
                    Just Wright Electrical delivers safe, reliable electrical
                    services across Auckland.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <ButtonLink href="#contact" variant="primary">
                      Get a Free Quote
                    </ButtonLink>
                    <ButtonLink
                      href={`tel:${PHONE_TEL}`}
                      variant="secondary"
                      ariaLabel={`Call ${PHONE_DISPLAY}`}
                    >
                      Call {PHONE_DISPLAY}
                    </ButtonLink>
                  </div>

                  <p className="mt-6 text-sm text-white/70">
                    5.0 ⭐ (72 reviews) • Auckland, New Zealand
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -inset-6 rounded-3xl bg-amber-400/10 blur-2xl" />
                  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                    <Image
                      src={electrician1}
                      alt="Auckland electrician completing electrical work"
                      priority
                      className="h-auto w-full object-cover"
                      sizes="(min-width: 1024px) 520px, 100vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Trust Bar */}
        <section className="border-y border-white/10 bg-slate-950">
          <Container>
            <div className="flex flex-col items-start gap-2 py-4 text-sm text-white/80 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-medium text-white">
                <span className="text-amber-400" aria-hidden="true">
                  ★★★★★
                </span>{" "}
                5.0 Rating
              </p>
              <p>72 Google Reviews</p>
              <p>Auckland Electricians</p>
            </div>
          </Container>
        </section>

        {/* Services */}
        <section id="services" className="bg-slate-900">
          <Container>
            <div className="py-14">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Services
                </h2>
                <p className="mt-3 text-base leading-7 text-white/80">
                  We provide residential and commercial electrical services
                  across Auckland, including repairs, maintenance, switchboard
                  upgrades, lighting, and power.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Residential Electrical",
                  "Commercial Electrical",
                  "Repairs & Maintenance",
                  "Switchboards & Upgrades",
                  "Lighting & Power",
                ].map((service) => (
                  <div
                    key={service}
                    className="rounded-2xl border border-white/10 bg-slate-950/40 p-5"
                  >
                    <p className="font-semibold tracking-tight text-white">
                      {service}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      Auckland-wide service with quality workmanship and clear
                      communication.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* About / Value */}
        <section className="bg-slate-950">
          <Container>
            <div className="py-14">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div className="max-w-3xl">
                  <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Local, reliable, licensed
                  </h2>
                  <p className="mt-4 text-base leading-7 text-white/80">
                    Just Wright Electrical is a locally owned Auckland
                    electrical company known for quality workmanship,
                    reliability, and professional service. We’re fully licensed
                    and committed to getting every job done right.
                  </p>
                  <p className="mt-4 text-base leading-7 text-white/80">
                    Auckland-based, licensed electricians delivering safe,
                    reliable, high-quality electrical work with clear pricing.
                  </p>
                </div>

                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                  <Image
                    src={electrician2}
                    alt="Licensed electrician working safely on electrical installation"
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 1024px) 520px, 100vw"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Reviews */}
        <section className="bg-slate-900">
          <Container>
            <div className="py-14">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Reviews
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
                {[
                  "Prompt, professional, and great workmanship.",
                  "Highly recommend — reliable and easy to deal with.",
                  "Clear communication and the job was done right the first time.",
                ].map((quote) => (
                  <figure
                    key={quote}
                    className="rounded-2xl border border-white/10 bg-slate-950/40 p-6"
                  >
                    <blockquote className="text-base leading-7 text-white/85">
                      “{quote}”
                    </blockquote>
                    <figcaption className="mt-4 text-sm text-white/60">
                      5.0 ⭐ Google Review
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section id="contact" className="bg-slate-950">
          <Container>
            <div className="py-14">
              <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-slate-900/40 p-7 sm:p-10">
                <div className="relative h-[340px] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <Image
                    src={electrician3}
                    alt="Electrician inspecting lighting and power in a home"
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 800px, 100vw"
                  />
                </div>

                <div className="max-w-2xl">
                  <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    Need an electrician in Auckland?
                  </h2>
                  <p className="mt-3 text-base leading-7 text-white/80">
                    Looking for a reliable electrician in Auckland? Call Just
                    Wright Electrical today for a free quote.
                  </p>
                  <p className="mt-3 text-sm text-white/70">
                    Service area: Auckland, New Zealand • Hours: 8:00am –
                    5:00pm
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <ButtonLink
                    href={`tel:${PHONE_TEL}`}
                    variant="primary"
                    ariaLabel={`Call ${PHONE_DISPLAY} for a free quote`}
                    className="sm:w-auto"
                  >
                    Call {PHONE_DISPLAY} for a Free Quote
                  </ButtonLink>
                  <ButtonLink href="#services" variant="secondary">
                    View Services
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
