"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-[#0F2643] text-white">
      <Container>
        {/* UPDATED: Changed grid to 2 columns on mobile, adjusted gaps */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 py-8 lg:grid-cols-12 lg:gap-8 md:py-12">
          
          {/* 1. Brand & Address */}
          {/* UPDATED: Added col-span-2 so it takes full width on mobile */}
          <div className="col-span-2 lg:col-span-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logos/Logo.svg"
                alt="Whaleora"
                width={150}
                height={55}
                className="h-auto w-[140px] brightness-0 invert"
              />
            </Link>

            {/* UPDATED: Added hidden md:block to hide this long text on mobile */}
            <p className="hidden md:block mt-5 max-w-sm text-[13px] font-light leading-relaxed text-white/70">
              Thoughtfully designed safety essentials for a calmer, more
              prepared everyday life.
            </p>

            <p className="mt-4 font-heading text-lg text-[#FBECDB]">
              Your Safety. Our Priority.
            </p>

            {/* Address Block */}
            <div className="mt-6 flex flex-col gap-1 text-[11px] font-light text-white/50">
              <p>Whaleora</p>
              <p>Shambhaji Nagar, Thane</p>
              <p>Maharashtra, India</p>
            </div>
          </div>

          {/* 2. Explore Block */}
          {/* UPDATED: Added col-span-1 so it sits next to the Connect block on mobile */}
          <div className="col-span-1 lg:col-span-2 lg:justify-self-center">
            <h3 className="font-heading text-[15px] tracking-tight text-[#FBECDB]">Explore</h3>

            <div className="mt-4 flex flex-col gap-2.5 text-[11px] font-light text-white/60">
              <a href="/products" className="transition hover:text-white">
                Products
              </a>
              <a href="/about" className="transition hover:text-white">
                About Whaleora
              </a>
              <a href="/institutions" className="transition hover:text-white">
                Partnerships
              </a>
            </div>
          </div>

          {/* 3. Connect Block */}
          {/* UPDATED: Added col-span-1 so it sits next to the Explore block on mobile */}
          <div className="col-span-1 lg:col-span-2 lg:justify-self-center">
            <h3 className="font-heading text-[15px] tracking-tight text-[#FBECDB]">Connect</h3>

            <div className="mt-4 flex flex-col gap-2.5 text-[11px] font-light text-white/60">
              <a href="/contact" className="transition hover:text-white">
                Contact Us
              </a>
              <a
                href="mailto:hello@whaleora.com"
                className="transition hover:text-white"
              >
                hello@whaleora.com
              </a>
            </div>

            {/* Social Platforms Row */}
            <div className="mt-6 flex gap-4 text-white/60">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/whaleora.safety?igsh=N3M3c3BzM3JvcWdr&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#DA6D40] hover:-translate-y-0.5"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.097 3.097 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://twitter.com/YOUR_HANDLE_HERE"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#DA6D40] hover:-translate-y-0.5"
                aria-label="X (formerly Twitter)"
              >
                <svg className="mt-[1px] h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/whaleora-safety/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#DA6D40] hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* 4. Newsletter Block */}
          {/* UPDATED: Added col-span-2 so it takes full width on mobile */}
          <div className="col-span-2 lg:col-span-4 lg:justify-self-end">
            <h3 className="font-heading text-[15px] tracking-tight text-[#FBECDB]">
              Join The Whaleora Community
            </h3>
            <h2 className="mt-2 text-left font-heading text-xs leading-tight tracking-tight text-[#FBECDB] md:text-xs">
              Safer people. Stronger communities.
            </h2>
            
            {/* UPDATED: Added hidden md:block to hide this long text on mobile */}
            <p className="hidden md:block mt-3 max-w-[280px] text-[11px] font-light leading-relaxed text-white/60">
              Receive practical safety tips, downloadable resources, awareness
              updates and early access to new Whaleora initiatives. No spam—only
              content that helps you stay informed and prepared.
            </p>

            <form className="mt-5 flex w-full max-w-[280px] flex-col gap-2 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                required
                className="h-10 w-full flex-1 rounded-full border border-white/20 bg-white/5 px-4 text-[11px] text-white placeholder-white/50 outline-none transition-all focus:border-[#DDAE84] focus:bg-white/10"
              />
              <button
                type="submit"
                className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-full bg-[#DDAE84] px-6 text-[11px] font-medium text-[#0F2643] transition-all duration-300 hover:bg-white sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-3 text-[10px] font-light text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Whaleora. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}