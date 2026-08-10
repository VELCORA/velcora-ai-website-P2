import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import ImageRevealBackground from '../components/ImageRevealBackground';
import logoUrl from '../assets/logo.png';
import { CONTACT_URL } from '../lib/constants';

export default function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col overflow-x-clip bg-white text-black">
      <ImageRevealBackground
        baseLayerClassName="absolute inset-0 z-0 pointer-events-none"
        revealLayerClassName="absolute inset-0 z-20 pointer-events-none hidden lg:block"
      />

      <div className="relative z-30 px-6 md:px-10 pt-6 md:pt-8">
        <nav className="flex justify-between items-center">
          <FadeIn delay={0} y={-20}>
            <a
              href="#"
              className="block"
              aria-label="Velcora AI"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <img
                src={logoUrl}
                alt="Velcora AI logo"
                className="h-[82px] sm:h-[92px] md:h-[110px] w-auto object-contain"
              />
            </a>
          </FadeIn>
          <FadeIn
            delay={0}
            y={-20}
            className="max-[480px]:hidden flex gap-4 sm:gap-6 md:gap-10"
          >
            {['About', 'Services', 'Projects', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] text-black transition-opacity duration-200 hover:opacity-70 focus-visible:opacity-70"
              >
                {link}
              </a>
            ))}
          </FadeIn>
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="max-[480px]:inline-block hidden border-2 border-black rounded-full px-5 py-2 text-sm font-medium uppercase tracking-wider"
          >
            Contact
          </a>
        </nav>
      </div>

      <div className="relative flex-1">
        <h1 className="absolute left-6 md:left-10 top-[16%] lg:top-1/2 lg:-translate-y-1/2 z-10 pointer-events-none font-black uppercase tracking-tight leading-[0.95] text-black text-[clamp(3rem,12vw,7.5rem)] lg:text-[clamp(3.5rem,8vw,7.5rem)]">
          velcora
          <br />
          <span className="tracking-[0.2em]">ai</span>
        </h1>
      </div>

      <div className="relative z-30 flex items-end justify-between px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p className="text-black font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
            we build software that runs businesses — ai agents, web apps,
            mobile apps, automations, and custom systems
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}