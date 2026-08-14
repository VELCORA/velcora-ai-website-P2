import { useState } from 'react';
import type { FormEvent } from 'react';
import footerLogo from '../assets/footer-logo.png';
import { wa, CTA_MESSAGES, WHATSAPP_DISPLAY, CONTACT_EMAIL, GITHUB_URL } from '../lib/constants';

const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'How We Work', href: '#process' },
  { label: 'Products', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const PRODUCTS = [
  { label: 'Quote Generator', href: '#projects' },
  { label: 'Lead Pipeline CRM', href: '#projects' },
  { label: 'AI Agent', href: '#projects' },
  { label: 'Free Audit', href: '#contact' },
];

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    window.open(
      wa(
        CTA_MESSAGES.newsletter +
          (email.trim() ? ` My email is ${email.trim()}.` : '')
      ),
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <footer className="bg-[#fafafa] pt-20 pb-5 max-[900px]:pt-[60px] border-t border-[#f0f0f0]">
      <div className="mx-auto max-w-[1100px] w-full px-5">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr_2fr] gap-10 mb-[50px] max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
          <div className="relative">
            <img
              src={footerLogo}
              alt="Velcora AI 3D mascot"
              loading="lazy"
              className="w-[170px] sm:w-[190px] mx-auto md:mx-0 -translate-y-[20%] drop-shadow-[0_14px_28px_rgba(12,12,12,0.22)]"
            />
            <p className="relative -mt-9 text-[0.85rem] text-[#888] leading-[1.6] max-w-[220px] text-center md:text-left">
              Full-spectrum software engineering — AI agents, web apps, mobile apps, automations, and custom systems.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-5 text-[0.95rem] text-neutral-900">
              Navigation
            </h3>
            <ul>
              {NAV.map((item) => (
                <li className="mb-3" key={item.label}>
                  <a
                    href={item.href}
                    className="text-[#888] no-underline text-[0.85rem] transition-colors duration-200 hover:text-neutral-900"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-5 text-[0.95rem] text-neutral-900">
              Products
            </h3>
            <ul>
              {PRODUCTS.map((item) => (
                <li className="mb-3" key={item.label}>
                  <a
                    href={item.href}
                    className="text-[#888] no-underline text-[0.85rem] transition-colors duration-200 hover:text-neutral-900"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-5 text-[0.95rem] text-neutral-900">
              Direct Contact
            </h3>
            <ul>
              <li className="mb-3">
                <a
                  href={wa('Hi Velcora AI!')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#888] no-underline text-[0.85rem] transition-colors duration-200 hover:text-neutral-900"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={'mailto:' + CONTACT_EMAIL}
                  className="text-[#888] no-underline text-[0.85rem] break-words transition-colors duration-200 hover:text-neutral-900"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="mt-3">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#888] no-underline text-[0.85rem] transition-colors duration-200 hover:text-neutral-900"
                >
                  github.com/VELCORA
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-5 text-[0.95rem] text-neutral-900">
              Newsletter
            </h3>
            <p className="text-[0.85rem] text-[#888] mb-[15px]">
              Get notified when we drop new automation ideas for small
              businesses.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-[10px]">
              <input
                type="email"
                required
                aria-label="Email address"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow border border-[#f0f0f0] bg-white outline-none transition-colors duration-200 focus:border-[#ccc] text-[0.9rem] min-w-0"
                style={{
                  padding: '12px 16px',
                  borderRadius: '10px',
                  boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.02)',
                }}
              />
              <button
                type="submit"
                className="bg-neutral-900 text-white border-none font-semibold cursor-pointer transition-all duration-200 hover:-translate-y-0.5 text-[0.9rem]"
                style={{
                  padding: '12px 28px',
                  borderRadius: '10px',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.4)',
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-[#f0f0f0] pt-[25px] pb-[10px] flex justify-between text-[0.85rem] text-[#888] max-[480px]:flex-col max-[480px]:gap-[15px] max-[480px]:items-center">
          <p>All rights reserved. &copy; {new Date().getFullYear()} Velcora AI</p>
          <div className="flex gap-5 max-[480px]:flex-col max-[480px]:items-center">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888] no-underline hover:text-neutral-900 transition-colors duration-200"
            >
              GitHub
            </a>
            <span className="max-[480px]:hidden">·</span>
            <a
              href={wa('Hi Velcora AI!')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888] no-underline hover:text-neutral-900 transition-colors duration-200"
            >
              WhatsApp: {WHATSAPP_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
