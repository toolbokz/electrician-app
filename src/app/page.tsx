import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ContactForm } from "@/components/ContactForm";
import { FAQItem } from "@/components/FAQItem";
import {
  BoltIcon,
  HomeIcon,
  BuildingIcon,
  WrenchIcon,
  LightbulbIcon,
  AlertTriangleIcon,
  ShieldCheckIcon,
  ClockIcon,
  DollarSignIcon,
  PhoneIcon,
  CheckCircleIcon,
  StarIcon,
  MapPinIcon,
  MailIcon,
  HardHatIcon,
  ClipboardCheckIcon,
} from "@/components/Icons";
import {
  fetchUnsplashImages,
  fetchPexelsImages,
  fetchPixabayImages,
} from "@/lib/images";

import electrician1 from "@/images/electrician-1.jpg";
import electrician2 from "@/images/electrician-2.jpg";
import electrician3 from "@/images/electrician-3.jpg";

const PHONE_DISPLAY = "021 770 844";
const PHONE_TEL = "+6421770844";

const services = [
  {
    title: "Residential Electrical",
    description:
      "Full home electrical services including rewiring, power points, smoke alarms, and safety inspections for Auckland homes.",
    icon: HomeIcon,
  },
  {
    title: "Commercial Electrical",
    description:
      "Reliable electrical installations and maintenance for offices, retail spaces, and commercial properties across Auckland.",
    icon: BuildingIcon,
  },
  {
    title: "Switchboard Upgrades",
    description:
      "Modern switchboard installations and upgrades to improve safety, electrical capacity, and regulatory compliance.",
    icon: BoltIcon,
  },
  {
    title: "Lighting Installation",
    description:
      "Indoor and outdoor lighting design, professional installation, and energy-efficient LED upgrades for any space.",
    icon: LightbulbIcon,
  },
  {
    title: "Fault Finding & Repairs",
    description:
      "Fast, accurate electrical fault diagnosis and expert repairs to restore your power safely and efficiently.",
    icon: WrenchIcon,
  },
  {
    title: "Emergency Callouts",
    description:
      "24/7 emergency electrical response anywhere in Auckland. We\u2019re here when you need us most \u2014 day or night.",
    icon: AlertTriangleIcon,
  },
  {
    title: "Renovations & New Builds",
    description:
      "Complete electrical design and installation for home renovations, extensions, and new construction projects.",
    icon: HardHatIcon,
  },
  {
    title: "Testing & Compliance",
    description:
      "Electrical safety inspections, testing, and compliance certificates for residential and commercial properties.",
    icon: ClipboardCheckIcon,
  },
];

const reviews = [
  {
    quote:
      "Had a full switchboard upgrade done by Just Wright Electrical. Professional from start to finish \u2014 showed up on time, explained everything clearly, and left the site spotless. Couldn\u2019t recommend them more highly.",
    name: "Mark T.",
    location: "Birkenhead",
    service: "Switchboard Upgrade",
  },
  {
    quote:
      "Called for an emergency on a Saturday evening and they had someone here within the hour. Fixed the issue quickly, explained what happened, and the pricing was very fair. Will always call these guys first.",
    name: "Sarah L.",
    location: "Takapuna",
    service: "Emergency Callout",
  },
  {
    quote:
      "We\u2019ve used Just Wright for all our office electrical work over the past two years. Reliable, knowledgeable, and great communicators. They\u2019re our go-to electricians for anything electrical.",
    name: "David Chen",
    location: "North Shore",
    service: "Commercial Electrical",
  },
];

const faqs = [
  {
    question: "What areas of Auckland do you service?",
    answer:
      "We service all of Auckland, from the North Shore to South Auckland and everywhere in between. Whether you\u2019re in Birkenhead, Takapuna, the CBD, West Auckland, or out East \u2014 we\u2019ve got you covered.",
  },
  {
    question: "Do you offer free quotes?",
    answer:
      "Yes! We provide free, no-obligation quotes for all electrical work. We\u2019ll assess the job, explain what\u2019s needed, and give you a clear, upfront price before any work begins.",
  },
  {
    question: "Are you available for emergency callouts?",
    answer:
      "Absolutely. We offer 24/7 emergency electrical services across Auckland. Whether it\u2019s a power outage, sparking outlet, or any other electrical emergency \u2014 call us anytime and we\u2019ll respond as quickly as possible.",
  },
  {
    question: "What types of electrical work do you handle?",
    answer:
      "Everything from simple repairs and light fittings to full house rewires, switchboard upgrades, commercial fit-outs, renovations, and new builds. If it\u2019s electrical, we can handle it.",
  },
  {
    question: "Are your electricians licensed and insured?",
    answer:
      "Yes. All our electricians hold current practising licences and we carry full public liability insurance. You can have complete confidence that every job meets the highest safety and quality standards.",
  },
  {
    question: "How quickly can you come out?",
    answer:
      "For standard work, we typically schedule within 1\u20133 business days depending on availability. For emergencies, we aim to respond within the hour anywhere in Auckland.",
  },
];

const pillars = [
  {
    icon: ShieldCheckIcon,
    title: "Licensed & Certified",
    description:
      "Fully registered electricians with current practising licences and comprehensive insurance coverage.",
  },
  {
    icon: DollarSignIcon,
    title: "Upfront Pricing",
    description:
      "Clear, honest quotes before work begins. No surprises, no hidden costs, no unexpected charges.",
  },
  {
    icon: ClockIcon,
    title: "Fast Response",
    description:
      "Prompt arrival times and 24/7 emergency availability. We show up when we say we will.",
  },
  {
    icon: CheckCircleIcon,
    title: "Quality Guaranteed",
    description:
      "All work backed by our workmanship guarantee. We get it done right the first time, every time.",
  },
];

const serviceAreas = [
  {
    region: "North Shore",
    suburbs: [
      "Birkenhead",
      "Takapuna",
      "Albany",
      "Devonport",
      "Glenfield",
      "Milford",
      "Browns Bay",
    ],
  },
  {
    region: "Central Auckland",
    suburbs: [
      "CBD",
      "Ponsonby",
      "Grey Lynn",
      "Mt Eden",
      "Epsom",
      "Parnell",
      "Newmarket",
    ],
  },
  {
    region: "West Auckland",
    suburbs: ["Henderson", "Te Atat\u016b", "New Lynn", "Glen Eden", "Titirangi"],
  },
  {
    region: "East Auckland",
    suburbs: [
      "Howick",
      "Pakuranga",
      "Botany",
      "East Tamaki",
      "Bucklands Beach",
    ],
  },
  {
    region: "South Auckland",
    suburbs: [
      "Manukau",
      "Papakura",
      "\u014ctahuhu",
      "Papatoetoe",
      "M\u0101ngere",
    ],
  },
];

export default async function Home() {
  const [pexelsImages, unsplashImages, pixabayImages] = await Promise.all([
    fetchPexelsImages("electrician working residential", 2),
    fetchUnsplashImages("modern home lighting interior", 2),
    fetchPixabayImages("electrical panel switchboard", 2),
  ]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Just Wright Electrical",
    description:
      "Licensed Auckland electricians providing residential and commercial electrical services.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "163 Mokoia Road, Birkenhead",
      addressLocality: "Auckland",
      postalCode: "0626",
      addressCountry: "NZ",
    },
    telephone: PHONE_DISPLAY,
    email: "info@justwrightelectrical.co.nz",
    url: "https://justwrightelectrical.co.nz",
    areaServed: {
      "@type": "City",
      name: "Auckland",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "72",
      bestRating: "5",
    },
    priceRange: "$$",
  };

  return (
    <div id="top" className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── EMERGENCY BANNER ─── */}
      <div className="bg-amber-400">
        <Container>
          <div className="flex flex-col items-center justify-between gap-1 py-2.5 text-center text-sm font-semibold text-slate-950 sm:flex-row sm:text-left">
            <p className="flex items-center gap-2">
              <BoltIcon
                size={16}
                className="fill-slate-950 stroke-slate-950"
              />
              <span>24/7 Emergency Electrical Service Available</span>
            </p>
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-1.5 font-bold underline decoration-slate-950/30 underline-offset-2 transition-colors hover:decoration-slate-950"
            >
              <PhoneIcon size={14} />
              Call Now: {PHONE_DISPLAY}
            </a>
          </div>
        </Container>
      </div>

      <SiteHeader />

      <main>
        {/* ─── HERO ─── */}
        <section className="relative overflow-hidden bg-slate-950">
          <div className="absolute inset-0">
            <div className="absolute -top-32 left-1/2 h-96 w-[56rem] -translate-x-1/2 rounded-full bg-amber-400/8 blur-3xl" />
            <div className="absolute -bottom-24 right-0 h-72 w-96 rounded-full bg-amber-400/5 blur-3xl" />
          </div>
          <Container>
            <div className="relative py-20 sm:py-28 lg:py-32">
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-sm font-medium text-amber-300">
                    <BoltIcon
                      size={14}
                      className="fill-amber-300 stroke-amber-300"
                    />
                    Licensed &amp; Insured Auckland Electricians
                  </div>

                  <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Auckland Electricians
                    <span className="text-amber-400"> You Can Trust</span>
                  </h1>

                  <p className="mt-6 text-pretty text-lg leading-relaxed text-white/75 sm:text-xl">
                    Professional, reliable electrical services for homes and
                    businesses across Auckland. Quality workmanship guaranteed
                    on every job.
                  </p>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <ButtonLink href="#contact" variant="primary" size="lg">
                      Get a Free Quote
                    </ButtonLink>
                    <ButtonLink
                      href={`tel:${PHONE_TEL}`}
                      variant="secondary"
                      size="lg"
                      ariaLabel={`Call ${PHONE_DISPLAY}`}
                    >
                      <PhoneIcon size={18} />
                      {PHONE_DISPLAY}
                    </ButtonLink>
                  </div>

                  <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/60">
                    <span className="flex items-center gap-2">
                      <CheckCircleIcon
                        size={16}
                        className="text-emerald-400"
                      />
                      Licensed &amp; Insured
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircleIcon
                        size={16}
                        className="text-emerald-400"
                      />
                      5.0 Google Rating
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircleIcon
                        size={16}
                        className="text-emerald-400"
                      />
                      Free Quotes
                    </span>
                  </div>
                </div>

                <div className="relative hidden lg:block">
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-amber-400/15 to-amber-400/5 blur-2xl" />
                  <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-amber-400/10">
                    <Image
                      src={electrician1}
                      alt="Auckland electrician completing professional electrical work"
                      priority
                      className="h-auto w-full object-cover"
                      sizes="(min-width: 1024px) 560px, 100vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ─── TRUST STATS ─── */}
        <section className="border-y border-white/[0.08] bg-slate-900/60">
          <Container>
            <div className="grid grid-cols-2 gap-6 py-10 sm:py-12 lg:grid-cols-4">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "2,500+", label: "Jobs Completed" },
                { value: "72", label: "5-Star Reviews" },
                { value: "All", label: "Auckland Areas" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold tracking-tight text-amber-400 sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-white/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ─── SERVICES ─── */}
        <section id="services" className="bg-slate-950">
          <Container>
            <div className="py-20 sm:py-28">
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
                  What We Do
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Our Electrical Services
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-white/70">
                  Professional electrical solutions for residential and
                  commercial properties across Auckland.
                </p>
              </div>

              <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {services.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <div
                      key={service.title}
                      className="group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all duration-300 hover:border-amber-400/30 hover:bg-amber-400/[0.04] hover:shadow-lg hover:shadow-amber-400/5"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400 transition-colors group-hover:bg-amber-400/20">
                        <IconComponent size={22} />
                      </div>
                      <h3 className="mt-4 text-base font-semibold tracking-tight text-white">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/60">
                        {service.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* ─── PEXELS IMAGE BAND ─── */}
        {pexelsImages.length > 0 && (
          <section className="bg-slate-900/50">
            <div className="relative h-64 w-full overflow-hidden sm:h-80">
              <Image
                src={pexelsImages[0].url}
                alt={pexelsImages[0].alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0">
                <Container>
                  <p className="pb-6 text-xs text-white/30">
                    Photo by {pexelsImages[0].photographer} via Pexels
                  </p>
                </Container>
              </div>
            </div>
          </section>
        )}

        {/* ─── WHY CHOOSE US ─── */}
        <section id="about" className="bg-slate-900">
          <Container>
            <div className="py-20 sm:py-28">
              <div className="grid items-center gap-16 lg:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
                    Why Choose Us
                  </p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Why Auckland Trusts
                    <br />
                    Just Wright Electrical
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-white/70">
                    We combine expert knowledge with genuine care for every
                    customer. Every job gets our full attention, from the first
                    call to final sign-off.
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {pillars.map((pillar) => {
                      const PillarIcon = pillar.icon;
                      return (
                        <div key={pillar.title} className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-400/10 text-amber-400">
                            <PillarIcon size={20} />
                          </div>
                          <div>
                            <h3 className="text-sm font-semibold text-white">
                              {pillar.title}
                            </h3>
                            <p className="mt-1 text-sm leading-relaxed text-white/60">
                              {pillar.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-4 rounded-3xl bg-amber-400/5 blur-2xl" />
                  <div className="relative overflow-hidden rounded-3xl border border-white/10">
                    <Image
                      src={electrician2}
                      alt="Licensed electrician working safely on an electrical installation"
                      className="h-auto w-full object-cover"
                      sizes="(min-width: 1024px) 520px, 100vw"
                    />
                  </div>
                  {unsplashImages.length > 0 && (
                    <div className="absolute -bottom-6 -left-6 hidden h-40 w-56 overflow-hidden rounded-2xl border border-white/10 shadow-xl lg:block">
                      <Image
                        src={unsplashImages[0].url}
                        alt={unsplashImages[0].alt}
                        fill
                        className="object-cover"
                        sizes="224px"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section className="bg-slate-950">
          <Container>
            <div className="py-20 sm:py-28">
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
                  How It Works
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Getting Started Is Easy
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-white/70">
                  Quality electrical work shouldn&apos;t be complicated.
                  Here&apos;s how we keep it simple.
                </p>
              </div>

              <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
                {[
                  {
                    step: "01",
                    title: "Get in Touch",
                    description:
                      "Call us or submit our quote form. Tell us what you need and we\u2019ll take it from there.",
                    icon: PhoneIcon,
                  },
                  {
                    step: "02",
                    title: "We Quote & Plan",
                    description:
                      "We assess the job and provide a clear, upfront quote. No obligation, no pressure.",
                    icon: ClipboardCheckIcon,
                  },
                  {
                    step: "03",
                    title: "Expert Execution",
                    description:
                      "Our licensed electricians complete the work to the highest standard, on time and on budget.",
                    icon: CheckCircleIcon,
                  },
                ].map((step) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={step.step} className="relative text-center">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-400">
                        <StepIcon size={24} />
                      </div>
                      <p className="mt-4 text-xs font-bold uppercase tracking-widest text-amber-400/60">
                        Step {step.step}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/60">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* ─── REVIEWS ─── */}
        <section id="reviews" className="bg-slate-900">
          <Container>
            <div className="py-20 sm:py-28">
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
                  Testimonials
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  What Our Customers Say
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-white/70">
                  Don&apos;t just take our word for it &mdash; here&apos;s what
                  Auckland homeowners and businesses say about working with
                  us.
                </p>
              </div>

              <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
                {reviews.map((review) => (
                  <figure
                    key={review.name}
                    className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8"
                  >
                    <div className="flex gap-1 text-amber-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon
                          key={i}
                          size={18}
                          className="fill-amber-400 stroke-amber-400"
                        />
                      ))}
                    </div>
                    <blockquote className="mt-4 text-base leading-relaxed text-white/80">
                      &ldquo;{review.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3 border-t border-white/[0.08] pt-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/10 text-sm font-bold text-amber-400">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {review.name}
                        </p>
                        <p className="text-xs text-white/50">
                          {review.location} &middot; {review.service}
                        </p>
                      </div>
                    </figcaption>
                  </figure>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-sm text-white/50">
                  5.0 average from 72 Google Reviews
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* ─── SERVICE AREAS ─── */}
        <section className="bg-slate-950">
          <Container>
            <div className="py-20 sm:py-28">
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
                  Service Areas
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Proudly Serving All of Auckland
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-white/70">
                  From the North Shore to South Auckland, we&apos;re just a
                  call away.
                </p>
              </div>

              <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
                {serviceAreas.map((area) => (
                  <div key={area.region}>
                    <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
                      <MapPinIcon size={14} className="text-amber-400" />
                      {area.region}
                    </h3>
                    <ul className="mt-3 space-y-1.5">
                      {area.suburbs.map((suburb) => (
                        <li key={suburb} className="text-sm text-white/50">
                          {suburb}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="bg-slate-900">
          <Container>
            <div className="py-20 sm:py-28">
              <div className="mx-auto max-w-3xl">
                <div className="text-center">
                  <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
                    FAQ
                  </p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="mt-12 divide-y divide-white/[0.08] rounded-2xl border border-white/[0.08] bg-white/[0.02] px-6 sm:px-8">
                  {faqs.map((faq) => (
                    <FAQItem
                      key={faq.question}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ─── PIXABAY CTA BAND ─── */}
        {pixabayImages.length > 0 && (
          <section className="relative">
            <div className="relative h-48 w-full overflow-hidden sm:h-64">
              <Image
                src={pixabayImages[0].url}
                alt={pixabayImages[0].alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-slate-950/70" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Container>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white sm:text-3xl">
                      Need an Electrician? We&apos;re Ready to Help.
                    </p>
                    <div className="mt-4">
                      <ButtonLink
                        href={`tel:${PHONE_TEL}`}
                        variant="primary"
                        size="lg"
                      >
                        <PhoneIcon size={18} />
                        Call {PHONE_DISPLAY}
                      </ButtonLink>
                    </div>
                  </div>
                </Container>
              </div>
              <p className="absolute bottom-2 right-4 text-xs text-white/30">
                Photo via Pixabay
              </p>
            </div>
          </section>
        )}

        {/* ─── CONTACT ─── */}
        <section id="contact" className="bg-slate-950">
          <Container>
            <div className="py-20 sm:py-28">
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
                  Contact Us
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to Get Started?
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-white/70">
                  Whether it&apos;s a simple repair or a major installation,
                  we&apos;re here to help. Get in touch for a free,
                  no-obligation quote.
                </p>
              </div>

              <div className="mt-16 grid gap-12 lg:grid-cols-5">
                <div className="lg:col-span-3">
                  <ContactForm />
                </div>

                <div className="lg:col-span-2">
                  <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8">
                    <h3 className="text-lg font-semibold text-white">
                      Contact Details
                    </h3>

                    <div className="mt-6 space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-400/10 text-amber-400">
                          <PhoneIcon size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white/50">
                            Phone
                          </p>
                          <a
                            href={`tel:${PHONE_TEL}`}
                            className="text-base font-semibold text-white transition-colors hover:text-amber-400"
                          >
                            {PHONE_DISPLAY}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-400/10 text-amber-400">
                          <MailIcon size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white/50">
                            Email
                          </p>
                          <a
                            href="mailto:info@justwrightelectrical.co.nz"
                            className="text-base font-semibold text-white transition-colors hover:text-amber-400"
                          >
                            info@justwrightelectrical.co.nz
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-400/10 text-amber-400">
                          <MapPinIcon size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white/50">
                            Address
                          </p>
                          <p className="text-base font-semibold text-white">
                            163 Mokoia Road
                            <br />
                            Birkenhead, Auckland 0626
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-400/10 text-amber-400">
                          <ClockIcon size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white/50">
                            Hours
                          </p>
                          <p className="text-base font-semibold text-white">
                            Mon &ndash; Fri: 8am &ndash; 5pm
                          </p>
                          <p className="text-sm font-medium text-amber-400">
                            Emergency: 24/7
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 overflow-hidden rounded-xl border border-white/[0.08]">
                      <Image
                        src={electrician3}
                        alt="Electrician inspecting electrical work in a home"
                        className="h-auto w-full object-cover"
                        sizes="(min-width: 1024px) 400px, 100vw"
                      />
                    </div>
                  </div>
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
