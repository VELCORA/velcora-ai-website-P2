import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LiveProjectButton from '../components/LiveProjectButton';
import { wa } from '../lib/constants';

interface ProjectImage {
  src: string;
  caption: string;
}

interface Project {
  number: string;
  name: string;
  category: string;
  tagline: string;
  problem: string;
  solution: string;
  result: string;
  built: string[];
  stack: string[];
  images: ProjectImage[];
  cta: string;
  repo?: string;
  live?: string;
}

const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'Velcora Quote Generator',
    category: 'AI Productivity · Web App',
    tagline:
      'Turn a one-line client brief into a polished, branded, print-ready quotation in seconds — not hours.',
    problem:
      'Freelancers and agencies rebuild quotes from scratch every single time — same scope, same pricing, same terms, retyped daily. Slow quotes cost them deals, and every quote goes out slightly different.',
    solution:
      'An AI quoting tool. Drop in a one-line brief, and the system drafts the full quotation — scope, deliverables, timeline, pricing, payment schedule, terms. Every figure stays editable, and totals plus tax recalculate live as you type.',
    result:
      'Quotes in seconds instead of hours. Every quote on-brand and consistent, edit any figure and totals update instantly — no more spreadsheet arithmetic before sending.',
    built: [
      'Rebuilt a broken Lovable export into a clean Vite + React 19 + TypeScript SPA — dropped the 1,000-package Azure/Capacitor tree.',
      'Kept the 44 shadcn UI components and the QuoteSheet engine — fully typed, zero dead deps.',
      'Added a Vercel server function that drafts a complete quotation from a one-line brief using the Gemini API.',
      'Hardened it: custom Tailwind v4 theme, local-first quote store, live tax/total recalculation, vercel.json SPA rewrite.',
    ],
    stack: ['Vite', 'React 19', 'TypeScript', 'Tailwind v4', 'shadcn/ui', 'Gemini API', 'Vercel'],
    images: [
      { src: '/projects/quote-generator/col2-image.webp', caption: 'The final quote sheet — branded, print-ready, every figure editable' },
      { src: '/projects/quote-generator/col1-image1.webp', caption: 'Start from a template or a blank sheet' },
      { src: '/projects/quote-generator/col1-image2.webp', caption: 'AI drafts the full quote from a one-line brief' },
    ],
    repo: 'https://github.com/VELCORA/velcora-quote-generator-P1',
    live: 'https://velcora-quote-generator-p1.vercel.app',
    cta: wa('Hi Velcora AI, I want a quote generator like this for my business.'),
  },
  {
    number: '02',
    name: 'Velcora Lead Pipeline CRM',
    category: 'Sales Ops · Web App',
    tagline:
      'Capture every lead from one form, auto-score it, and move it through the pipeline to won — nothing slips through the cracks.',
    problem:
      'Agencies and service businesses lose track of incoming demand. Leads land in DMs and inboxes, never get a follow-up, and deals quietly die. No system, no score, no pipeline — just chaos.',
    solution:
      'A single-tenant CRM built on Supabase. One intake form captures the lead, auto-scores it 0–100 (hot / warm / cold), and drops it into a kanban pipeline: new → qualified → proposal → won or lost.',
    result:
      'Every lead captured in seconds with a score and a next action. Zero leads slip through the cracks — follow-ups happen on schedule, and the won rate goes up.',
    built: [
      'Took a Bolt-generated base and rebuilt it as our own product — de-Bolted, rebranded to Velgora, typed end to end.',
      'Supabase schema: leads, lead_activities, notifications — RLS on, anon + authenticated access for the no-login single-tenant flow.',
      'Built the intake flow with auto-scoring and hot / warm / cold priority, plus dynamic date handling and email validation.',
      'Made it Vercel-ready: vercel.json SPA rewrite, engines pinned, .env.example committed, secrets gitignored. Build + typecheck + lint all pass.',
    ],
    stack: ['Vite', 'React 18', 'TypeScript', 'Tailwind 3', 'Supabase', 'Vercel'],
    images: [
      { src: '/projects/lead-pipeline/col2-image.webp', caption: 'Intake form — auto-scored, hot / warm / cold' },
      { src: '/projects/lead-pipeline/col1-image1.webp', caption: 'Overview — every lead and stage at a glance' },
      { src: '/projects/lead-pipeline/col1-image2.webp', caption: 'Kanban pipeline — new → qualified → proposal → won' },
    ],
    repo: 'https://github.com/VELCORA/velcora-single-tenant-lead-pipeline-crm-p5',
    live: 'https://velcora-single-tenant-lead-pipeline.vercel.app',
    cta: wa('Hi Velcora AI, I want a lead pipeline CRM like this for my business.'),
  },
  {
    number: '03',
    name: 'Velcora Enterprise Doc Processing',
    category: 'Document AI · Enterprise Web App',
    tagline:
      'Extract, audit, and automate enterprise financial paperwork — invoices, purchase orders, leases — in seconds, not days.',
    problem:
      'Finance teams key invoices, POs, and leases into systems by hand. It is slow, error-prone, and no one checks whether the line items even add up — until an audit finds out.',
    solution:
      'A multimodal OCR workbench. Ingest PDFs, PNGs, JPGs, TXT, or CSV; the engine parses structured fields, validates the line-item math, flags risk anomalies, and triggers ERP webhooks — all in one pipeline.',
    result:
      'Documents processed in seconds instead of hours. Every field extracted, every total verified, every anomaly flagged before it becomes a problem — and the ERP gets the data automatically.',
    built: [
      'Built the intake workbench: upload, paste text, or generate a test invoice across six document types — invoices, POs, contracts, receipts, tax forms, financial statements.',
      'Wired the multimodal OCR pipeline that parses structured fields from the document and feeds the inspector.',
      'Built the Structured Inspector — validates line-item math and detects risk anomalies so bad data never passes silently.',
      'Added the Automation & API hub: rule-based triggers, live webhook log, and an SDK surface for integrating with enterprise apps.',
    ],
    stack: ['TypeScript', 'Vite', 'React', 'Multimodal OCR', 'Vercel'],
    images: [
      { src: '/projects/doc-pipeline/col1-image1.webp', caption: 'Document Workbench — ingest, paste, or generate a test invoice' },
      { src: '/projects/doc-pipeline/col1-image2.webp', caption: 'Structured Inspector — parsed fields with math + risk validation' },
      { src: '/projects/doc-pipeline/col2-image.webp', caption: 'Automation & API — workflow rules, webhook log, SDK' },
    ],
    repo: 'https://github.com/VELCORA/velcora-enterprise--doc---P6',
    live: 'https://velcora-enterprise-doc-p6.vercel.app',
    cta: wa('Hi Velcora AI, I want enterprise document processing like this for my business.'),
  },
  {
    number: '04',
    name: 'Velcora Salon OS',
    category: 'Vertical SaaS · Web App',
    tagline:
      'Turn salon chaos into effortless luxury — unified scheduling, real-time inventory, stylist commissions, and autonomous AI client retention.',
    problem:
      'Salons juggle chairs, bookings, color stock, stylist pay, and client reminders across notebooks and apps. Double-bookings, empty chairs, low-stock shocks, and no-shows quietly eat the margin.',
    solution:
      'A salon operating system: chair scheduling matrix, barcode color inventory with auto-deduct, stylist roster with commission splits, and AI automations that send SMS / WhatsApp reminders and reorder stock — with an AI copilot on top.',
    result:
      'Every chair filled and tracked, stock never runs dry, commissions split automatically, and AI notifications cut no-shows toward zero — while the salon runs itself.',
    built: [
      'Built the overview command center: today\'s chairs, active services, low-stock alerts, and daily gross with auto commission splits.',
      'Built the appointments workspace with a chair scheduling matrix plus a client booking demo portal.',
      'Wired the color bar: barcode inventory tracking with station-mix simulation and auto-deduct on service completion.',
      'Added AI automations — SMS / WhatsApp client retention bot, no-show alerts — and a Velcora AI Copilot layer.',
    ],
    stack: ['TypeScript', 'Vite', 'React', 'Tailwind', 'AI Automations', 'Vercel'],
    images: [
      { src: '/projects/salon-os/col1-image1.webp', caption: 'Overview — chairs booked, stock alerts, daily gross with commission splits' },
      { src: '/projects/salon-os/col1-image2.webp', caption: 'Appointments — chair scheduling matrix + client booking demo' },
      { src: '/projects/salon-os/col2-image.webp', caption: 'Inventory — color bar with barcode tracking and auto-deduct' },
    ],
    repo: 'https://github.com/VELCORA/velcora-ai-salon-os-p9',
    live: 'https://velcora-ai-salon-os-p9.vercel.app',
    cta: wa('Hi Velcora AI, I want a Salon OS like this for my salon.'),
  },
  {
    number: '05',
    name: 'Velcora AI Agent',
    category: 'AI Co-Pilot · Chat App',
    tagline:
      'A business operations co-pilot with five tuned workflow modes — qualify leads, draft emails, summarize meetings, research markets, and write proposals.',
    problem:
      'Every business task lives in a different tool in a different style. Qualifying a lead, drafting outreach, summarizing a meeting, researching a market, and packing a proposal all need different thinking — so teams wing it every time.',
    solution:
      'One co-pilot, five specialist modes. Each mode carries a tuned system prompt — Lead Qualifier, Email Drafter, Meeting Summarizer, Market Researcher, Proposal Writer — so the AI answers with the right structure, tone, and output format for the task.',
    result:
      'Anyone in the business gets specialist-grade output in seconds — scored leads, ready-to-send emails, meeting action items, competitive research, and structured proposals — without switching tools or training an AI.',
    built: [
      'Rebranded and customized the Vercel AI Chatbot template (Next.js 16 + AI SDK) into a Velcora-branded co-pilot.',
      'Defined five Velcora workflow modes in lib/ai/modes.ts — each with icon, color, badge, starter prompts, and a tuned BANT/sales/outreach system prompt.',
      'Used the Lead Qualifier\'s system prompt to output a structured Qualification Card: lead score 0–100, hot/warm/cold, red flags, next action — via the createDocument tool.',
      'Wired session auth, chat history persistence, and a multi-model switcher across leading LLMs.',
    ],
    stack: ['Next.js 16', 'AI SDK', 'TypeScript', 'Drizzle', 'Vercel'],
    images: [
      { src: '/projects/ai-agent/col1-image1.webp', caption: 'Onboarding — five workflow modes with starter prompts' },
      { src: '/projects/ai-agent/col1-image2.webp', caption: 'Chat thread — prompt runs through the co-pilot' },
      { src: '/projects/ai-agent/col2-image.webp', caption: 'Model switcher — run the agent on your choice of LLM' },
    ],
    repo: 'https://github.com/VELCORA/velcora-ai-agent-P7',
    live: 'https://velcora-ai-agent-p6.vercel.app',
    cta: wa('Hi Velcora AI, I want an AI co-pilot like this for my business.'),
  },
  {
    number: '06',
    name: 'Velcora Knowledge Chatbot Hub',
    category: 'Customer Intelligence · Platform',
    tagline:
      'Turn your documents into a live knowledge base, power an AI chatbot, and orchestrate conversations across webchat, Slack, WhatsApp, and email — from one workspace.',
    problem:
      'Support and success teams drown in tickets. Customer questions repeat across webchat, WhatsApp, Slack, and email — and every answer lives in someone\'s head or a folder nobody can search.',
    solution:
      'A customer-intelligence platform with four tiers: ingest documents into a knowledge base, embed them for retrieval, retrieve with confidence scoring, and generate sourced answers. Plus an omnichannel conversation hub that triages by sentiment, intent, and urgency.',
    result:
      'The AI answers customers 24/7 with sourced, confidence-scored answers straight from your documents. Conversations get triaged and routed automatically — tickets die down, deflection savings show up in the ROI model.',
    built: [
      'Built the AI Playground — a live chat modal with an instant welcome message, 99.8% confidence score, and source citations pulled from the knowledge base.',
      'Wired the knowledge base: ingest documents, get sourced answers with confidence scores via the Gemini-backed engine.',
      'Built the Conversation Hub — triage, sentiment, intent, and urgency tagging across channels.',
      'Added the architecture view (4-tier ingest → embed → retrieve → generate), ROI calculator, security matrix, and plan picker that opens provisioning.',
    ],
    stack: ['Vite', 'React 19', 'TypeScript', 'Tailwind v4', 'Gemini', 'Express', 'Vercel'],
    images: [
      { src: '/projects/chatbot-hub/col1-image1.webp', caption: 'Hero — autonomy platform with Live Studio, Vector Hub, ROI, Pricing' },
      { src: '/projects/chatbot-hub/col1-image2.webp', caption: 'AI Playground — sourced answers with confidence score + citations' },
      { src: '/projects/chatbot-hub/col2-image.webp', caption: 'Knowledge Base — ingest documents, get sourced answers' },
    ],
    repo: 'https://github.com/VELCORA/velcora-ai-knowledge-chatbot-hub-P10',
    live: 'https://velcora-ai-knowledge-chatbot-hub-p1.vercel.app',
    cta: wa('Hi Velcora AI, I want a knowledge chatbot hub like this for my business.'),
  },
];

function ImageLightbox({
  images,
  index,
  onIndex,
  onClose,
}: {
  images: ProjectImage[];
  index: number;
  onIndex: (i: number) => void;
  onClose: () => void;
}) {
  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onIndex((index + 1) % images.length);
      if (e.key === 'ArrowLeft') onIndex((index - 1 + images.length) % images.length);
    },
    [index, images.length, onClose, onIndex]
  );

  useEffect(() => {
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onKey]);

  if (index < 0 || index >= images.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 sm:p-8"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <motion.img
        key={images[index]!.src}
        src={images[index]!.src}
        alt={images[index]!.caption}
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.94, opacity: 0 }}
        transition={{ type: 'spring', duration: 0.45, bounce: 0.16 }}
        className="max-w-full max-h-[82vh] object-contain rounded-2xl shadow-2xl ring-1 ring-white/10 select-none"
        draggable={false}
      />
      <p className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 text-center text-white/70 text-sm max-w-md px-4">
        {images[index]!.caption}
      </p>
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full border border-white/20 text-white/80 hover:text-white hover:bg-white/10 transition-colors text-xl leading-none"
      >
        ✕
      </button>
      {images.length > 1 && (
        <>
          <button
            onClick={() => onIndex((index - 1 + images.length) % images.length)}
            aria-label="Previous"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/20 text-white/80 hover:text-white hover:bg-white/10 transition-colors text-2xl leading-none"
          >
            ‹
          </button>
          <button
            onClick={() => onIndex((index + 1) % images.length)}
            aria-label="Next"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/20 text-white/80 hover:text-white hover:bg-white/10 transition-colors text-2xl leading-none"
          >
            ›
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => onIndex(i)}
                aria-label={`Screenshot ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-6 bg-white' : 'w-2 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
}

function ProjectDetail({ project, index }: { project: Project; index: number }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const flipped = index % 2 === 1;

  const Btn =
    'inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/60 px-6 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA] hover:text-[#0C0C0C]';

  return (
    <div className="relative py-20 sm:py-28 md:py-36 border-b border-[#D7E2EA]/10">
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-6 sm:-top-10 right-0 font-black text-[#D7E2EA]/[0.06] leading-none text-[clamp(8rem,24vw,320px)]"
      >
        {project.number}
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="mb-10 sm:mb-14">
          <p className="uppercase tracking-[0.3em] text-[#D7E2EA]/60 text-xs sm:text-sm mb-3">
            Project {project.number}
          </p>
          <h3 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(2.2rem,6vw,5rem)] mb-4">
            {project.name}
          </h3>
          <p className="text-[#D7E2EA]/70 text-base sm:text-lg max-w-3xl">{project.tagline}</p>
        </div>

        <div
          className={`grid lg:grid-cols-2 gap-10 lg:gap-14 items-start ${
            flipped ? 'lg:[&>*:first-child]:order-2' : ''
          }`}
        >
          <div className="min-w-0">
            <div className="grid gap-6">
              <div>
                <p className="uppercase tracking-widest text-[#D7E2EA]/50 text-xs mb-2">
                  The Problem
                </p>
                <p className="text-[#D7E2EA]/85 leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <p className="uppercase tracking-widest text-[#D7E2EA]/50 text-xs mb-2">
                  What It Does
                </p>
                <p className="text-[#D7E2EA]/85 leading-relaxed">{project.solution}</p>
              </div>
              <div>
                <p className="uppercase tracking-widest text-[#D7E2EA]/50 text-xs mb-2">
                  How We Built It
                </p>
                <ol className="grid gap-2.5">
                  {project.built.map((step, i) => (
                    <li key={i} className="flex gap-3 text-[#D7E2EA]/85 leading-relaxed">
                      <span className="font-medium text-[#D7E2EA]/40 shrink-0 w-5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <p className="uppercase tracking-widest text-[#D7E2EA]/50 text-xs mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#D7E2EA]/30 px-4 py-1.5 text-sm text-[#D7E2EA]/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="uppercase tracking-widest text-[#D7E2EA]/50 text-xs mb-2">
                  The Result
                </p>
                <p className="text-[#D7E2EA]/85 leading-relaxed">{project.result}</p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={Btn}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  Source Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={Btn}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Live Demo
                </a>
              )}
              <LiveProjectButton href={project.cta} />
            </div>
          </div>

          <div className="min-w-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <button
                  onClick={() => setLightboxIndex(0)}
                  className="group w-full block cursor-zoom-in"
                >
                  <img
                    src={project.images[0]!.src}
                    alt={project.images[0]!.caption}
                    className="w-full aspect-[4/3] object-cover object-top rounded-3xl border border-[#D7E2EA]/15 transition-[filter] duration-200 group-hover:brightness-110"
                    loading="lazy"
                  />
                </button>
                <p className="text-xs text-[#D7E2EA]/50 mt-2 text-right">
                  {project.images[0]!.caption}
                </p>
              </div>
              <div>
                <button onClick={() => setLightboxIndex(1)} className="group w-full block cursor-zoom-in">
                  <img
                    src={project.images[1]!.src}
                    alt={project.images[1]!.caption}
                    className="w-full aspect-[16/10] object-cover object-top rounded-3xl border border-[#D7E2EA]/15 transition-[filter] duration-200 group-hover:brightness-110"
                    loading="lazy"
                  />
                </button>
                <p className="text-xs text-[#D7E2EA]/50 mt-2">{project.images[1]!.caption}</p>
              </div>
              <div>
                <button onClick={() => setLightboxIndex(2)} className="group w-full block cursor-zoom-in">
                  <img
                    src={project.images[2]!.src}
                    alt={project.images[2]!.caption}
                    className="w-full aspect-[16/10] object-cover object-top rounded-3xl border border-[#D7E2EA]/15 transition-[filter] duration-200 group-hover:brightness-110"
                    loading="lazy"
                  />
                </button>
                <p className="text-xs text-[#D7E2EA]/50 mt-2">{project.images[2]!.caption}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <ImageLightbox
            images={project.images}
            index={lightboxIndex}
            onIndex={setLightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-28"
    >
      <h2 className="hero-heading text-center font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)] mb-10 sm:mb-14">
        Projects
      </h2>
      <div>
        {PROJECTS.map((project, i) => (
          <ProjectDetail key={project.number} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
