"use client";

import { createContext, useContext, useState } from "react";
import {
  Navigation,
  Menu,
  X,
  Smartphone,
  Timer,
  Banknote,
  ShieldCheck,
  Download,
  Play,
  Apple,
} from "lucide-react";
import t, { Lang, Translations } from "./i18n";

// ─── Lang context ─────────────────────────────────────────────────────────────

const LangContext = createContext<{ tr: Translations; lang: Lang; setLang: (l: Lang) => void }>({
  tr: t.es,
  lang: "es",
  setLang: () => {},
});

function useTr() {
  return useContext(LangContext);
}

// ─── Lang switcher ────────────────────────────────────────────────────────────

function LangSwitcher() {
  const { lang, setLang } = useTr();
  return (
    <div
      className="flex items-center rounded-full p-0.5 text-xs font-bold"
      style={{ backgroundColor: "#1a1a1a", border: "1px solid #2a2a2a" }}
    >
      {(["es", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className="rounded-full px-3 py-1.5 uppercase tracking-wider transition-all"
          style={
            lang === l
              ? { backgroundColor: "#ff6b35", color: "#ffffff" }
              : { color: "#666666" }
          }
        >
          {l}
        </button>
      ))}
    </div>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Nav() {
  const { tr } = useTr();
  const [open, setOpen] = useState(false);

  const links = [
    { label: tr.navHowItWorks, href: "#how-it-works" },
    { label: tr.navFleet, href: "#fleet" },
    { label: tr.navDrivers, href: "#drivers" },
    { label: tr.navDownload, href: "#download" },
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: "#080808", borderBottom: "1px solid #1e1e1e" }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Navigation size={20} style={{ color: "#ff6b35" }} />
          <span
            className="text-[15px] font-bold tracking-[0.15em]"
            style={{ color: "#ff6b35", fontFamily: "var(--font-outfit)" }}
          >
            HABANA GO
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-opacity hover:opacity-100"
              style={{ color: "#888888" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop right: switcher + CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <LangSwitcher />
          <a
            href="#waitlist"
            className="rounded-full px-7 py-3 text-sm font-bold transition-opacity hover:opacity-85"
            style={{
              backgroundColor: "#ff6b35",
              color: "#ffffff",
              fontFamily: "var(--font-outfit)",
            }}
          >
            {tr.navCta}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} color="#fff" /> : <Menu size={24} color="#fff" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="border-t md:hidden"
          style={{ backgroundColor: "#0d0d0d", borderColor: "#1e1e1e" }}
        >
          <nav className="flex flex-col gap-1 px-5 py-4">
            {/* Language switcher at top of mobile menu */}
            <div className="mb-3 flex justify-center py-1">
              <LangSwitcher />
            </div>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-3 text-sm font-medium"
                style={{ color: "#888888" }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#waitlist"
              className="mt-2 rounded-full py-3 text-center text-sm font-bold"
              style={{
                backgroundColor: "#ff6b35",
                color: "#ffffff",
                fontFamily: "var(--font-outfit)",
              }}
              onClick={() => setOpen(false)}
            >
              {tr.navCta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const { tr } = useTr();

  return (
    <section style={{ backgroundColor: "#080808" }}>
      <div className="mx-auto max-w-7xl px-5 pb-0 pt-16 md:flex md:items-center md:gap-16 md:px-20 md:py-24">
        {/* Text */}
        <div className="flex flex-col gap-6 md:flex-1">
          <div
            className="flex w-fit items-center gap-2 rounded-full px-4 py-1.5"
            style={{
              backgroundColor: "rgba(255,107,53,0.12)",
              border: "1px solid #ff6b35",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#ff6b35" }} />
            <span className="text-[10px] font-bold tracking-[0.18em]" style={{ color: "#ff6b35" }}>
              {tr.heroBadge}
            </span>
          </div>

          <h1
            className="text-[44px] font-black leading-[0.92] tracking-[-2px] md:text-[72px]"
            style={{ fontFamily: "var(--font-outfit)", whiteSpace: "pre-line" }}
          >
            {tr.heroHeadline}
          </h1>

          <p className="max-w-md text-base leading-[1.65]" style={{ color: "#888888" }}>
            {tr.heroSub}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#download"
              className="flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[15px] font-bold transition-opacity hover:opacity-85"
              style={{ backgroundColor: "#ff6b35", color: "#ffffff", fontFamily: "var(--font-outfit)" }}
            >
              <Smartphone size={16} />
              {tr.heroCta1}
            </a>
            <a
              href="#waitlist"
              className="flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[15px] font-bold transition-opacity hover:opacity-85"
              style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#ffffff", fontFamily: "var(--font-outfit)" }}
            >
              {tr.heroCta2}
            </a>
          </div>

          <div className="flex gap-8 pt-2">
            {[
              { val: tr.heroStat1Val, lbl: tr.heroStat1Lbl },
              { val: tr.heroStat2Val, lbl: tr.heroStat2Lbl },
              { val: tr.heroStat3Val, lbl: tr.heroStat3Lbl },
            ].map(({ val, lbl }) => (
              <div key={lbl} className="flex flex-col gap-1">
                <span className="text-2xl font-black" style={{ fontFamily: "var(--font-outfit)" }}>
                  {val}
                </span>
                <span className="text-xs" style={{ color: "#666666" }}>{lbl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div
          className="relative mt-12 overflow-hidden rounded-3xl md:mt-0 md:h-[580px] md:flex-1"
          style={{ height: "280px" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero.jpg"
            alt="Havana streets with classic cars"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(8,8,8,0.45) 0%, transparent 60%)" }}
          />
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────

function HowItWorks() {
  const { tr } = useTr();

  const steps = [
    { num: "01", title: tr.hiwStep1Title, desc: tr.hiwStep1Desc },
    { num: "02", title: tr.hiwStep2Title, desc: tr.hiwStep2Desc },
    { num: "03", title: tr.hiwStep3Title, desc: tr.hiwStep3Desc },
  ];

  return (
    <section id="how-it-works" className="w-full py-24 md:py-28" style={{ backgroundColor: "#0d0d0d" }}>
      <div className="mx-auto max-w-7xl px-5 md:px-20">
        <div className="mb-12 flex flex-col gap-3 md:mb-16">
          <span className="text-xs font-bold tracking-[0.25em]" style={{ color: "#ff6b35" }}>
            {tr.hiwBadge}
          </span>
          <h2
            className="text-[34px] font-black leading-[0.95] tracking-[-0.5px] md:text-[52px]"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            {tr.hiwHeadline}
          </h2>
          <p className="max-w-md text-[15px] leading-[1.65]" style={{ color: "#888888" }}>
            {tr.hiwSub}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {steps.map(({ num, title, desc }) => (
            <div
              key={num}
              className="flex flex-col gap-3 rounded-2xl p-6"
              style={{ backgroundColor: "#141414", border: "1px solid #2a2a2a" }}
            >
              <span
                className="text-4xl font-black leading-none tracking-[-2px] opacity-40"
                style={{ color: "#ff6b35", fontFamily: "var(--font-outfit)" }}
              >
                {num}
              </span>
              <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-outfit)" }}>
                {title}
              </h3>
              <p className="text-sm leading-[1.6]" style={{ color: "#666666" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Fleet ────────────────────────────────────────────────────────────────────

function Fleet() {
  const { tr } = useTr();

  const cards = [
    { img: "/images/car.jpg", title: tr.fleet1Title, desc: tr.fleet1Desc },
    { img: "/images/motor.jpg", title: tr.fleet2Title, desc: tr.fleet2Desc },
    { img: "/images/motorcycle.jpg", title: tr.fleet3Title, desc: tr.fleet3Desc },
  ];

  return (
    <section id="fleet" className="w-full py-24 md:py-28" style={{ backgroundColor: "#080808" }}>
      <div className="mx-auto max-w-7xl px-5 md:px-20">
        <div className="mb-12 flex flex-col gap-3 md:mb-16">
          <span className="text-xs font-bold tracking-[0.25em]" style={{ color: "#ff6b35" }}>
            {tr.fleetBadge}
          </span>
          <h2
            className="text-[34px] font-black leading-[0.95] tracking-[-0.5px] md:text-[52px]"
            style={{ fontFamily: "var(--font-outfit)", whiteSpace: "pre-line" }}
          >
            {tr.fleetHeadline}
          </h2>
          <p className="max-w-md text-[15px] leading-[1.65]" style={{ color: "#888888" }}>
            {tr.fleetSub}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {cards.map(({ img, title, desc }) => (
            <div
              key={title}
              className="overflow-hidden rounded-2xl"
              style={{ backgroundColor: "#141414", border: "1px solid #2a2a2a" }}
            >
              <div className="h-[180px] overflow-hidden md:h-[220px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt={title} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col gap-2 p-5">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#b6ffce" }} />
                  <span className="text-xs font-semibold" style={{ color: "#b6ffce" }}>
                    {tr.fleetAvail}
                  </span>
                </div>
                <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-outfit)" }}>
                  {title}
                </h3>
                <p className="text-sm" style={{ color: "#666666" }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Become a Driver ──────────────────────────────────────────────────────────

function BecomeDriver() {
  const { tr } = useTr();

  const benefits = [
    { icon: Timer, title: tr.driverBen1Title, desc: tr.driverBen1Desc },
    { icon: Banknote, title: tr.driverBen2Title, desc: tr.driverBen2Desc },
    { icon: ShieldCheck, title: tr.driverBen3Title, desc: tr.driverBen3Desc },
  ];

  return (
    <section id="drivers" className="w-full py-24 md:py-28" style={{ backgroundColor: "#0b0f0e" }}>
      <div className="mx-auto max-w-7xl px-5 md:flex md:items-center md:gap-20 md:px-20">
        {/* Text */}
        <div className="flex flex-col gap-8 md:flex-1">
          <div
            className="flex w-fit items-center gap-2 rounded-full px-4 py-1.5"
            style={{ backgroundColor: "rgba(0,200,150,0.12)", border: "1px solid #00c896" }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#00c896" }} />
            <span className="text-[10px] font-bold tracking-[0.18em]" style={{ color: "#00c896" }}>
              {tr.driverBadge}
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <h2
              className="text-[38px] font-black leading-[0.92] tracking-[-1.5px] md:text-[60px]"
              style={{ fontFamily: "var(--font-outfit)", whiteSpace: "pre-line" }}
            >
              {tr.driverHeadline}
            </h2>
            <p className="max-w-md text-[15px] leading-[1.65]" style={{ color: "#888888" }}>
              {tr.driverSub}
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="mt-0.5 shrink-0">
                  <Icon size={22} style={{ color: "#00c896" }} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-base font-bold" style={{ fontFamily: "var(--font-outfit)" }}>
                    {title}
                  </span>
                  <span className="text-sm leading-[1.55]" style={{ color: "#666666" }}>{desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[15px] font-bold transition-opacity hover:opacity-85"
              style={{ backgroundColor: "#00c896", color: "#0b0f0e", fontFamily: "var(--font-outfit)" }}
            >
              <Download size={16} />
              {tr.driverBtn1}
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[15px] font-bold transition-opacity hover:opacity-85"
              style={{ border: "1px solid #00c896", color: "#00c896", fontFamily: "var(--font-outfit)" }}
            >
              {tr.driverBtn2}
            </a>
          </div>
        </div>

        {/* Image */}
        <div
          className="mt-12 overflow-hidden rounded-3xl md:mt-0 md:h-[560px] md:w-[520px] md:shrink-0"
          style={{ height: "240px" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/driver.jpg"
            alt="Driver in a classic Cuban car"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

// ─── Waitlist ─────────────────────────────────────────────────────────────────

function Waitlist() {
  const { tr } = useTr();

  return (
    <section
      id="waitlist"
      className="w-full py-24 md:py-32"
      style={{ background: "radial-gradient(ellipse at center, #1f0800 0%, #0a0a0a 70%)" }}
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 px-5 text-center">
        <div
          className="flex w-fit items-center gap-2 rounded-full px-4 py-1.5"
          style={{ backgroundColor: "rgba(255,107,53,0.15)", border: "1px solid #ff6b35" }}
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#ff6b35" }} />
          <span className="text-[10px] font-bold tracking-[0.18em]" style={{ color: "#ff6b35" }}>
            {tr.wlBadge}
          </span>
        </div>

        <h2
          className="text-[40px] font-black leading-[0.92] tracking-[-2px] md:text-[72px]"
          style={{ fontFamily: "var(--font-outfit)", whiteSpace: "pre-line" }}
        >
          {tr.wlHeadline}
        </h2>

        <p className="max-w-md text-[15px] leading-[1.65]" style={{ color: "#888888" }}>
          {tr.wlSub}
        </p>

        <div className="flex w-full max-w-md flex-col gap-3">
          <input
            type="email"
            placeholder={tr.wlPlaceholder}
            className="w-full rounded-full px-6 py-4 text-sm outline-none placeholder:text-[#444444]"
            style={{ backgroundColor: "#141414", border: "1px solid #2a2a2a", color: "#ffffff" }}
          />
          <button
            className="w-full rounded-full py-4 text-[15px] font-bold transition-opacity hover:opacity-85"
            style={{ backgroundColor: "#ff6b35", color: "#ffffff", fontFamily: "var(--font-outfit)" }}
          >
            {tr.wlBtn}
          </button>
        </div>

        <p className="text-xs" style={{ color: "#444444" }}>{tr.wlTrust}</p>
      </div>
    </section>
  );
}

// ─── App Download ─────────────────────────────────────────────────────────────

function AppDownload() {
  const { tr } = useTr();

  return (
    <section
      id="download"
      className="w-full py-24 md:py-28"
      style={{ backgroundColor: "#080808", borderTop: "1px solid #1a1a1a" }}
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-10 px-5 text-center">
        <div className="flex flex-col gap-4">
          <span className="text-xs font-bold tracking-[0.3em]" style={{ color: "#ff6b35" }}>
            {tr.dlBadge}
          </span>
          <h2
            className="text-[38px] font-black leading-[0.92] tracking-[-1px] md:text-[52px]"
            style={{ fontFamily: "var(--font-outfit)", whiteSpace: "pre-line" }}
          >
            {tr.dlHeadline}
          </h2>
          <p className="text-[15px]" style={{ color: "#666666" }}>{tr.dlSub}</p>
        </div>

        <div className="flex w-full max-w-sm flex-col gap-3">
          <button
            className="flex w-full items-center justify-center gap-3 rounded-2xl py-4 transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#ffffff" }}
          >
            <Apple size={22} color="#000000" />
            <div className="flex flex-col items-start">
              <span className="text-[10px]" style={{ color: "#333333" }}>{tr.dlIos1}</span>
              <span className="text-sm font-bold" style={{ color: "#000000" }}>{tr.dlIos2}</span>
            </div>
          </button>
          <button
            className="flex w-full items-center justify-center gap-3 rounded-2xl py-4 transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#141414", border: "1px solid #2a2a2a" }}
          >
            <Play size={20} color="#ffffff" fill="#ffffff" />
            <div className="flex flex-col items-start">
              <span className="text-[10px]" style={{ color: "#888888" }}>{tr.dlAndroid1}</span>
              <span className="text-sm font-bold" style={{ color: "#ffffff" }}>{tr.dlAndroid2}</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const { tr } = useTr();

  const cols = [
    { heading: tr.footerCol1, links: tr.footerCol1Links },
    { heading: tr.footerCol2, links: tr.footerCol2Links },
    { heading: tr.footerCol3, links: tr.footerCol3Links },
  ];

  return (
    <footer className="w-full" style={{ backgroundColor: "#050505", borderTop: "1px solid #1a1a1a" }}>
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-20">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="flex flex-col gap-4 md:max-w-xs">
            <a href="#" className="flex items-center gap-2">
              <Navigation size={18} style={{ color: "#ff6b35" }} />
              <span
                className="text-sm font-bold tracking-[0.15em]"
                style={{ color: "#ff6b35", fontFamily: "var(--font-outfit)" }}
              >
                HABANA GO
              </span>
            </a>
            <p className="text-sm leading-[1.65]" style={{ color: "#555555" }}>
              {tr.footerDesc}
            </p>
          </div>

          <div className="hidden gap-16 md:flex">
            {cols.map(({ heading, links }) => (
              <div key={heading} className="flex flex-col gap-4">
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#444444" }}>
                  {heading}
                </span>
                <ul className="flex flex-col gap-3">
                  {links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm transition-opacity hover:opacity-80" style={{ color: "#555555" }}>
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid #1a1a1a" }}>
        <div
          className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs md:flex-row md:px-20"
          style={{ color: "#333333" }}
        >
          <span>{tr.footerCopy}</span>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-70">{tr.footerPrivacy}</a>
            <a href="#" className="hover:opacity-70">{tr.footerTerms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("es");

  return (
    <LangContext.Provider value={{ tr: t[lang], lang, setLang }}>
      <div style={{ backgroundColor: "#080808" }}>
        <Nav />
        <Hero />
        <HowItWorks />
        <Fleet />
        <BecomeDriver />
        <Waitlist />
        <AppDownload />
        <Footer />
      </div>
    </LangContext.Provider>
  );
}
