import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import LiveProjectButton from '../components/LiveProjectButton';
import { wa } from '../lib/constants';

interface Project {
  number: string;
  name: string;
  category: string;
  problem: string;
  solution: string;
  result: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
  cta: string;
  repo?: string;
  live?: string;
}

const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'Velcora Quote Generator',
    category: 'AI Productivity · Web App',
    problem: 'Freelancers and agencies rebuild quotes from scratch every time — same scope, pricing, and terms retyped daily, and slow quotes cost them deals.',
    solution: 'An AI quoting tool that turns a one-line client brief into a polished, branded, print-ready quotation — scope, deliverables, timeline, pricing, payment schedule, terms — in seconds.',
    result: 'Quotes in seconds instead of hours. Every quote on-brand and consistent; edit any figure and totals + tax recalculate automatically.',
    col1Image1: '/projects/quote-generator/col1-image1.webp',
    col1Image2: '/projects/quote-generator/col1-image2.webp',
    col2Image: '/projects/quote-generator/col2-image.webp',
    repo: 'https://github.com/VELCORA/velcora-quote-generator-P1',
    live: 'https://velcora-quote-generator-p1.vercel.app',
    cta: wa('Hi Velcora AI, I want a quote generator like this for my business.'),
  },
  {
    number: '02',
    name: 'WhatsFlow — WhatsApp Automation',
    category: 'Conversational AI',
    problem: 'Businesses drown in repetitive WhatsApp questions — orders, prices, timings, bookings — and customers wait hours for answers.',
    solution: 'An AI WhatsApp chatbot trained on your catalog, FAQs, and policies. It answers instantly, takes orders, and hands off to a human when needed.',
    result: '99% of routine questions answered instantly, 24/7. Your team only handles conversations that actually need a human.',
    col1Image1:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1280&q=80',
    col1Image2:
      'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1280',
    col2Image:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1280&q=80',
    cta: wa('Hi Velcora AI, I want a WhatsApp chatbot for my business.'),
  },
  {
    number: '03',
    name: 'DocGPT — Document Intelligence',
    category: 'AI Workflows',
    problem: 'Contracts, invoices, and reports buried in folders — finding one answer means hours of manual searching.',
    solution: 'A RAG-powered document assistant that reads your files and answers questions instantly, with citations from source documents.',
    result: 'Search time cut from hours to seconds. Every answer traceable to its source document. Your knowledge base finally works for you.',
    col1Image1:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1280&q=80',
    col1Image2:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1280&q=80',
    col2Image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1280&q=80',
    cta: wa('Hi Velcora AI, I want to chat with my documents with DocGPT.'),
  },
];

function ImageLightbox({
  images,
  index,
  onIndex,
  onClose,
}: {
  images: string[];
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
        key={images[index]}
        src={images[index]}
        alt="Project screenshot"
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.94, opacity: 0 }}
        transition={{ type: 'spring', duration: 0.45, bounce: 0.16 }}
        className="max-w-full max-h-[88vh] object-contain rounded-2xl shadow-2xl ring-1 ring-white/10 select-none"
        draggable={false}
      />
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
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
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

function ProjectCard({
  project,
  index,
  totalCards,
}: {
  project: Project;
  index: number;
  totalCards: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const screenShots = [project.col1Image1, project.col1Image2, project.col2Image];

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  const imgClass =
    'w-full h-full min-h-0 object-cover object-top rounded-[30px] sm:rounded-[36px] md:rounded-[44px] hover:brightness-110 transition-[filter] duration-200 cursor-zoom-in';

  return (
    <>
      <div
        ref={containerRef}
        className="relative h-[88vh] flex items-start justify-center sticky top-20 md:top-28"
      >
      <motion.div
        style={{ scale, top: `${index * 28}px` }}
        className="relative w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-3 sm:p-5 md:p-6 h-full flex flex-col overflow-hidden"
      >
        <div className="flex items-center justify-between gap-4 mb-2 shrink-0">
          <span className="font-black text-[#D7E2EA] text-[clamp(1.8rem,6vw,95px)] leading-none">
            {project.number}
          </span>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="text-right">
              <p className="uppercase tracking-widest text-[#D7E2EA] text-[0.65rem] sm:text-xs opacity-70">
                {project.category}
              </p>
              <h2 className="font-medium uppercase text-[#D7E2EA] text-[clamp(0.95rem,1.8vw,1.6rem)]">
                {project.name}
              </h2>
            </div>
          </div>
        </div>

        <div className="flex gap-3 items-stretch flex-1 min-h-0 mb-3">
          <div
            className="flex flex-col gap-3 min-w-0 min-h-0"
            style={{ width: '44%' }}
          >
            <img
              src={project.col1Image1}
              alt=""
              onClick={() => setLightboxIndex(0)}
              className={imgClass}
              loading="lazy"
            />
            <img
              src={project.col1Image2}
              alt=""
              onClick={() => setLightboxIndex(1)}
              className={imgClass}
              loading="lazy"
            />
          </div>
          <div
            className="min-w-0 min-h-0"
            style={{ width: '56%' }}
          >
            <img
              src={project.col2Image}
              alt={project.name}
              onClick={() => setLightboxIndex(2)}
              className={imgClass}
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-1 md:flex md:flex-row md:gap-4 text-[#D7E2EA] shrink-0">
          <div className="md:flex-1">
            <p className="text-[0.6rem] uppercase tracking-widest opacity-50 mb-0.5">Problem</p>
            <p className="text-xs sm:text-[0.75rem] font-light leading-snug line-clamp-1">{project.problem}</p>
          </div>
          <div className="md:flex-1">
            <p className="text-[0.6rem] uppercase tracking-widest opacity-50 mb-0.5">Solution</p>
            <p className="text-xs sm:text-[0.75rem] font-light leading-snug line-clamp-1">{project.solution}</p>
          </div>
          <div className="md:flex-1">
            <p className="text-[0.6rem] uppercase tracking-widest opacity-50 mb-0.5">Result</p>
            <p className="text-xs sm:text-[0.75rem] font-light leading-snug line-clamp-1">{project.result}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-2.5 mt-3 shrink-0">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/60 px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/80 transition-colors duration-200 hover:bg-[#D7E2EA]/10"
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
              className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/60 px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/80 transition-colors duration-200 hover:bg-[#D7E2EA]/10"
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
      </motion.div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <ImageLightbox
            images={screenShots}
            index={lightboxIndex}
            onIndex={setLightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#0C0C0C] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28">
      <h2 className="hero-heading text-center font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
        Projects
      </h2>
      <div className="flex flex-col gap-6">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            totalCards={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  );
}