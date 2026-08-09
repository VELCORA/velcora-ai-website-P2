import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { wa, CTA_MESSAGES, CONTACT_EMAIL } from '../lib/constants';

const FAQS = [
  {
    q: 'How long does it take to build?',
    a: 'A simple WhatsApp chatbot goes live in days. Full automation systems usually ship in 2\u20133 weeks. You see a working prototype before we build anything else.',
  },
  {
    q: 'Do I need technical knowledge?',
    a: 'No. You tell us what eats your time, we build the system. We handle setup, training, and documentation \u2014 you just use it.',
  },
  {
    q: 'What does it cost?',
    a: 'Every project is scoped on the free audit call. Most small-business automations start under $500 and pay for themselves within months.',
  },
  {
    q: 'What tools do you use?',
    a: 'n8n, OpenAI, WhatsApp Business API, and the tools you already use \u2014 Google Workspace, Excel, CRMs. We pick what fits your budget, with zero lock-in.',
  },
  {
    q: 'What happens after launch?',
    a: 'You own the system completely. Support and small fixes are included after launch, and we stay reachable on WhatsApp.',
  },
];

function FaqItem({
  faq,
  isActive,
  onToggle,
}: {
  faq: { q: string; a: string };
  isActive: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="bg-white border rounded-[10px] py-[18px] px-5 transition-all duration-200"
      style={{
        borderColor: isActive ? '#eaeaea' : '#f0f0f0',
        boxShadow: isActive
          ? '0 4px 12px rgba(0,0,0,0.04)'
          : '0 2px 8px rgba(0,0,0,0.02)',
      }}
    >
      <button
        type="button"
        aria-expanded={isActive}
        onClick={onToggle}
        className="w-full text-left flex justify-between items-center gap-3 font-normal text-[0.9rem] text-neutral-900 bg-transparent border-none cursor-pointer p-0"
      >
        {faq.q}
        {isActive ? <ChevronUp size={20} className="shrink-0" /> : <ChevronDown size={20} className="shrink-0" />}
      </button>
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-[0.9rem] text-[#666] leading-[1.6]">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section
      id="contact"
      className="bg-white px-5 py-20 max-[900px]:py-[60px]"
    >
      <div className="mx-auto max-w-[1100px] w-full">
        <div className="grid grid-cols-[1.6fr_1fr] gap-[30px] items-stretch max-[900px]:grid-cols-1 max-[900px]:gap-[60px]">
          <FadeIn delay={0} y={40}>
            <div
              className="c5-animated-gradient rounded-[24px] py-20 px-10 text-white flex flex-col justify-center items-center text-center h-full"
              style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)' }}
            >
              <h2
                className="font-normal leading-[1.1] mb-[15px] text-center text-[clamp(2.2rem,6vw,3.5rem)]"
                style={{ letterSpacing: '-0.03em' }}
              >
                Ready to Run Your Business on Autopilot?
              </h2>
              <p className="text-[0.9rem] mb-[30px] font-normal opacity-85">
                Free audit. Clear roadmap. 15+ hours back, every single week.
              </p>
              <a
                href={wa(CTA_MESSAGES.audit)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-900 text-white font-semibold cursor-pointer border-none text-[0.95rem] transition-all duration-200 hover:-translate-y-0.5 inline-block no-underline"
                style={{
                  padding: '14px 32px',
                  borderRadius: '12px',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow = '0 14px 30px rgba(0,0,0,0.4)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)')
                }
              >
                Book Free Audit
              </a>
              <a
                href={'mailto:' + CONTACT_EMAIL}
                className="mt-4 text-[0.85rem] underline opacity-80"
              >
                or email {CONTACT_EMAIL}
              </a>
            </div>
          </FadeIn>

          <div className="flex flex-col justify-center gap-3">
            <p className="text-[0.8rem] uppercase tracking-widest text-[#666] font-medium">
              FAQ
            </p>
            {FAQS.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                isActive={activeIndex === i}
                onToggle={() => setActiveIndex(activeIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
