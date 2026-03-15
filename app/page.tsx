"use client";

import { useState } from "react";
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

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Nav() {
  const [open, setOpen] = useState(false);
  const links = ["How It Works", "Fleet", "Drivers", "Download"];

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
              key={l}
              href={`#${l.toLowerCase().replace(/ /g, "-")}`}
              className="text-sm font-medium transition-opacity hover:opacity-100"
              style={{ color: "#888888" }}
            >
              {l}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#waitlist"
          className="hidden rounded-full px-7 py-3 text-sm font-bold transition-opacity hover:opacity-85 md:block"
          style={{
            backgroundColor: "#ff6b35",
            color: "#ffffff",
            fontFamily: "var(--font-outfit)",
          }}
        >
          Join Waitlist
        </a>

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
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/ /g, "-")}`}
                className="rounded-lg px-3 py-3 text-sm font-medium"
                style={{ color: "#888888" }}
                onClick={() => setOpen(false)}
              >
                {l}
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
              Join Waitlist
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
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
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "#ff6b35" }}
            />
            <span
              className="text-[10px] font-bold tracking-[0.18em]"
              style={{ color: "#ff6b35" }}
            >
              CUBA&apos;S FIRST RIDE APP
            </span>
          </div>

          <h1
            className="text-[44px] font-black leading-[0.92] tracking-[-2px] md:text-[72px]"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Rides,
            <br />
            Delivery &amp;
            <br />
            More in Cuba
          </h1>

          <p className="max-w-md text-base leading-[1.65]" style={{ color: "#888888" }}>
            Gas cars, electric motors, motorcycles and food delivery. All in one
            app, designed for Cuba.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#download"
              className="flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[15px] font-bold transition-opacity hover:opacity-85"
              style={{
                backgroundColor: "#ff6b35",
                color: "#ffffff",
                fontFamily: "var(--font-outfit)",
              }}
            >
              <Smartphone size={16} />
              Download App
            </a>
            <a
              href="#waitlist"
              className="flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[15px] font-bold transition-opacity hover:opacity-85"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#ffffff",
                fontFamily: "var(--font-outfit)",
              }}
            >
              Join Waitlist
            </a>
          </div>

          <div className="flex gap-8 pt-2">
            {[
              { val: "5K+", lbl: "On Waitlist" },
              { val: "3", lbl: "Vehicle Types" },
              { val: "Soon", lbl: "Launching Cuba" },
            ].map(({ val, lbl }) => (
              <div key={lbl} className="flex flex-col gap-1">
                <span
                  className="text-2xl font-black"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {val}
                </span>
                <span className="text-xs" style={{ color: "#666666" }}>
                  {lbl}
                </span>
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
            style={{
              background:
                "linear-gradient(to right, rgba(8,8,8,0.45) 0%, transparent 60%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────

const steps = [
  {
    num: "01",
    title: "Open the App",
    desc: "Download Habana Go, create your account and set your pickup location.",
  },
  {
    num: "02",
    title: "Choose Your Ride",
    desc: "Pick a gas car, electric motor, or motorcycle. Food delivery too — all in one app.",
  },
  {
    num: "03",
    title: "Ride & Pay",
    desc: "Your driver arrives, you ride. Pay securely in-app. No cash needed.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full py-24 md:py-28"
      style={{ backgroundColor: "#0d0d0d" }}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-20">
        <div className="mb-12 flex flex-col gap-3 md:mb-16">
          <span
            className="text-xs font-bold tracking-[0.25em]"
            style={{ color: "#ff6b35" }}
          >
            HOW IT WORKS
          </span>
          <h2
            className="text-[34px] font-black leading-[0.95] tracking-[-0.5px] md:text-[52px]"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Three Easy Steps
          </h2>
          <p
            className="max-w-md text-[15px] leading-[1.65]"
            style={{ color: "#888888" }}
          >
            Request, ride and pay — all from your phone in seconds.
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
              <h3
                className="text-lg font-bold"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {title}
              </h3>
              <p className="text-sm leading-[1.6]" style={{ color: "#666666" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Fleet ────────────────────────────────────────────────────────────────────

const fleet = [
  {
    img: "/images/car.jpg",
    title: "Classic Gas Car",
    desc: "Standard & comfortable rides across Havana",
  },
  {
    img: "/images/motor.jpg",
    title: "Electric Motor",
    desc: "Eco-friendly, fast and quiet through the city",
  },
  {
    img: "/images/motorcycle.jpg",
    title: "Gas Motorcycle",
    desc: "Fast & affordable — beat Havana traffic",
  },
];

function Fleet() {
  return (
    <section
      id="fleet"
      className="w-full py-24 md:py-28"
      style={{ backgroundColor: "#080808" }}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-20">
        <div className="mb-12 flex flex-col gap-3 md:mb-16">
          <span
            className="text-xs font-bold tracking-[0.25em]"
            style={{ color: "#ff6b35" }}
          >
            OUR FLEET
          </span>
          <h2
            className="text-[34px] font-black leading-[0.95] tracking-[-0.5px] md:text-[52px]"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Your Ride,
            <br />
            Your Choice
          </h2>
          <p
            className="max-w-md text-[15px] leading-[1.65]"
            style={{ color: "#888888" }}
          >
            Three vehicle types to match every need and budget.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {fleet.map(({ img, title, desc }) => (
            <div
              key={title}
              className="overflow-hidden rounded-2xl"
              style={{ backgroundColor: "#141414", border: "1px solid #2a2a2a" }}
            >
              <div className="h-[180px] overflow-hidden md:h-[220px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 p-5">
                <div className="flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: "#b6ffce" }}
                  />
                  <span
                    className="text-xs font-semibold"
                    style={{ color: "#b6ffce" }}
                  >
                    Available
                  </span>
                </div>
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {title}
                </h3>
                <p className="text-sm" style={{ color: "#666666" }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Become a Driver ──────────────────────────────────────────────────────────

const driverBenefits = [
  {
    icon: Timer,
    title: "Flexible Hours",
    desc: "Drive on your schedule — mornings, evenings, weekends.",
  },
  {
    icon: Banknote,
    title: "Competitive Earnings",
    desc: "Keep more of every fare. Weekly payouts to your account.",
  },
  {
    icon: ShieldCheck,
    title: "Full Driver Support",
    desc: "Dedicated 24/7 support team and in-app tools.",
  },
];

function BecomeDriver() {
  return (
    <section
      id="drivers"
      className="w-full py-24 md:py-28"
      style={{ backgroundColor: "#0b0f0e" }}
    >
      <div className="mx-auto max-w-7xl px-5 md:flex md:items-center md:gap-20 md:px-20">
        {/* Text */}
        <div className="flex flex-col gap-8 md:flex-1">
          <div
            className="flex w-fit items-center gap-2 rounded-full px-4 py-1.5"
            style={{
              backgroundColor: "rgba(0,200,150,0.12)",
              border: "1px solid #00c896",
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "#00c896" }}
            />
            <span
              className="text-[10px] font-bold tracking-[0.18em]"
              style={{ color: "#00c896" }}
            >
              FOR DRIVERS
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <h2
              className="text-[38px] font-black leading-[0.92] tracking-[-1.5px] md:text-[60px]"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Turn Your
              <br />
              Wheels Into
              <br />
              Earnings
            </h2>
            <p
              className="max-w-md text-[15px] leading-[1.65]"
              style={{ color: "#888888" }}
            >
              Join the Habana Go driver network. Set your own hours, accept
              rides, and earn more than any other platform in Cuba.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {driverBenefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="mt-0.5 shrink-0">
                  <Icon size={22} style={{ color: "#00c896" }} />
                </div>
                <div className="flex flex-col gap-1">
                  <span
                    className="text-base font-bold"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {title}
                  </span>
                  <span
                    className="text-sm leading-[1.55]"
                    style={{ color: "#666666" }}
                  >
                    {desc}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[15px] font-bold transition-opacity hover:opacity-85"
              style={{
                backgroundColor: "#00c896",
                color: "#0b0f0e",
                fontFamily: "var(--font-outfit)",
              }}
            >
              <Download size={16} />
              Download Driver App
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[15px] font-bold transition-opacity hover:opacity-85"
              style={{
                border: "1px solid #00c896",
                color: "#00c896",
                fontFamily: "var(--font-outfit)",
              }}
            >
              Join Driver Waitlist
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
  return (
    <section
      id="waitlist"
      className="w-full py-24 md:py-32"
      style={{
        background:
          "radial-gradient(ellipse at center, #1f0800 0%, #0a0a0a 70%)",
      }}
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 px-5 text-center">
        <div
          className="flex w-fit items-center gap-2 rounded-full px-4 py-1.5"
          style={{
            backgroundColor: "rgba(255,107,53,0.15)",
            border: "1px solid #ff6b35",
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: "#ff6b35" }}
          />
          <span
            className="text-[10px] font-bold tracking-[0.18em]"
            style={{ color: "#ff6b35" }}
          >
            EARLY ACCESS
          </span>
        </div>

        <h2
          className="text-[40px] font-black leading-[0.92] tracking-[-2px] md:text-[72px]"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Be the First
          <br />
          to Ride Cuba
        </h2>

        <p
          className="max-w-md text-[15px] leading-[1.65]"
          style={{ color: "#888888" }}
        >
          Join the whitelist and get exclusive early access, priority
          onboarding, and a free first ride.
        </p>

        <div className="flex w-full max-w-md flex-col gap-3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full rounded-full px-6 py-4 text-sm outline-none placeholder:text-[#444444]"
            style={{
              backgroundColor: "#141414",
              border: "1px solid #2a2a2a",
              color: "#ffffff",
            }}
          />
          <button
            className="w-full rounded-full py-4 text-[15px] font-bold transition-opacity hover:opacity-85"
            style={{
              backgroundColor: "#ff6b35",
              color: "#ffffff",
              fontFamily: "var(--font-outfit)",
            }}
          >
            Join the Waitlist
          </button>
        </div>

        <p className="text-xs" style={{ color: "#444444" }}>
          No spam · Cancel anytime · 5,000+ already joined
        </p>
      </div>
    </section>
  );
}

// ─── App Download ─────────────────────────────────────────────────────────────

function AppDownload() {
  return (
    <section
      id="download"
      className="w-full py-24 md:py-28"
      style={{ backgroundColor: "#080808", borderTop: "1px solid #1a1a1a" }}
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-10 px-5 text-center">
        <div className="flex flex-col gap-4">
          <span
            className="text-xs font-bold tracking-[0.3em]"
            style={{ color: "#ff6b35" }}
          >
            GET THE APP
          </span>
          <h2
            className="text-[38px] font-black leading-[0.92] tracking-[-1px] md:text-[52px]"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Download
            <br />
            Habana Go
          </h2>
          <p className="text-[15px]" style={{ color: "#666666" }}>
            Available soon on iOS and Android.
          </p>
        </div>

        <div className="flex w-full max-w-sm flex-col gap-3">
          <button
            className="flex w-full items-center justify-center gap-3 rounded-2xl py-4 transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#ffffff" }}
          >
            <Apple size={22} color="#000000" />
            <div className="flex flex-col items-start">
              <span className="text-[10px]" style={{ color: "#333333" }}>
                Download on the
              </span>
              <span className="text-sm font-bold" style={{ color: "#000000" }}>
                App Store
              </span>
            </div>
          </button>
          <button
            className="flex w-full items-center justify-center gap-3 rounded-2xl py-4 transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#141414", border: "1px solid #2a2a2a" }}
          >
            <Play size={20} color="#ffffff" fill="#ffffff" />
            <div className="flex flex-col items-start">
              <span className="text-[10px]" style={{ color: "#888888" }}>
                Get it on
              </span>
              <span className="text-sm font-bold" style={{ color: "#ffffff" }}>
                Google Play
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

const footerCols = [
  { heading: "Product", links: ["How It Works", "Fleet", "Download", "Pricing"] },
  { heading: "Company", links: ["About Us", "Careers", "Press", "Contact"] },
  { heading: "Connect", links: ["Instagram", "Twitter / X", "Facebook", "WhatsApp"] },
];

function Footer() {
  return (
    <footer
      className="w-full"
      style={{ backgroundColor: "#050505", borderTop: "1px solid #1a1a1a" }}
    >
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-20">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          {/* Brand */}
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
              Cuba&apos;s first ride &amp; delivery platform. Designed for
              Havana, built for everyone.
            </p>
          </div>

          {/* Columns — desktop only */}
          <div className="hidden gap-16 md:flex">
            {footerCols.map(({ heading, links }) => (
              <div key={heading} className="flex flex-col gap-4">
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "#444444" }}
                >
                  {heading}
                </span>
                <ul className="flex flex-col gap-3">
                  {links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm transition-opacity hover:opacity-80"
                        style={{ color: "#555555" }}
                      >
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

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #1a1a1a" }}>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs md:flex-row md:px-20"
          style={{ color: "#333333" }}>
          <span>© 2025 Habana Go. All rights reserved.</span>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <a key={l} href="#" className="hover:opacity-70">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
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
  );
}
