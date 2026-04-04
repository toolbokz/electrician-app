"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSubmitted(true);
    }

    if (submitted) {
        return (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-12 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-400">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                    Message Sent!
                </h3>
                <p className="mt-2 text-sm text-white/60">
                    Thank you for getting in touch. We&apos;ll get back to you within 24
                    hours.
                </p>
            </div>
        );
    }

    const inputStyles =
        "w-full rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/40 transition-colors focus:border-amber-400/50 focus:bg-white/[0.06] focus:outline-none focus:ring-1 focus:ring-amber-400/30";

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-medium text-white/70"
                    >
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="John Smith"
                        className={inputStyles}
                    />
                </div>
                <div>
                    <label
                        htmlFor="phone"
                        className="mb-1.5 block text-sm font-medium text-white/70"
                    >
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="021 000 0000"
                        className={inputStyles}
                    />
                </div>
            </div>

            <div>
                <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-white/70"
                >
                    Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.co.nz"
                    className={inputStyles}
                />
            </div>

            <div>
                <label
                    htmlFor="service"
                    className="mb-1.5 block text-sm font-medium text-white/70"
                >
                    Service Required
                </label>
                <select
                    id="service"
                    name="service"
                    className={inputStyles + " appearance-none"}
                    defaultValue=""
                >
                    <option value="" disabled>
                        Select a service...
                    </option>
                    <option value="residential">Residential Electrical</option>
                    <option value="commercial">Commercial Electrical</option>
                    <option value="switchboard">Switchboard Upgrade</option>
                    <option value="lighting">Lighting Installation</option>
                    <option value="fault-finding">Fault Finding &amp; Repairs</option>
                    <option value="emergency">Emergency Callout</option>
                    <option value="renovation">Renovation / New Build</option>
                    <option value="testing">Testing &amp; Compliance</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div>
                <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-white/70"
                >
                    Job Details
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your electrical needs..."
                    className={inputStyles + " resize-none"}
                />
            </div>

            <button
                type="submit"
                className="w-full rounded-xl bg-amber-400 px-6 py-3.5 text-base font-semibold text-slate-950 shadow-lg shadow-amber-400/20 transition-all duration-200 hover:bg-amber-300 hover:shadow-amber-300/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:bg-amber-500"
            >
                Send Message
            </button>
            <p className="text-center text-xs text-white/40">
                We typically respond within 24 hours. For emergencies, please call
                directly.
            </p>
        </form>
    );
}
