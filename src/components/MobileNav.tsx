"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { MenuIcon, XIcon, PhoneIcon } from "./Icons";

interface NavItem {
  label: string;
  href: string;
}

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/5 hover:text-white"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <XIcon size={22} /> : <MenuIcon size={22} />}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full z-50 border-b border-white/[0.08] bg-slate-950/98 backdrop-blur-xl">
          <Container>
            <nav
              className="flex flex-col gap-1 py-4"
              aria-label="Mobile navigation"
            >
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-3 border-t border-white/[0.08] pt-4">
                <a
                  href="tel:+6421770844"
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-base font-semibold text-amber-400"
                  onClick={close}
                >
                  <PhoneIcon size={18} />
                  Call 021 770 844
                </a>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </div>
  );
}
