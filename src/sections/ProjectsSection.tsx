import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="relative h-[85vh] flex items-start justify-center sticky top-24 md:top-32"
    >
      <motion.div
        style={{ scale, top: `${index * 28}px` }}
        className="relative w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-3 sm:p-5 md:p-6 h-full flex flex-col overflow-hidden"
      >
        <div className="flex items-center justify-between gap-4 mb-3 shrink-0">
          <span className="font-black text-[#D7E2EA] text-[clamp(2rem,7vw,110px)] leading-none">
            {project.number}
          </span>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="text-right">
              <p className="uppercase tracking-widest text-[#D7E2EA] text-xs sm:text-sm opacity-70">
                {project.category}
              </p>
              <h3 className="font-medium uppercase text-[#D7E2EA] text-[clamp(1rem,2.2vw,2.1rem)]">
                {project.name}
              </h3>
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
              className="w-full flex-1 min-h-0 object-cover object-top rounded-[30px] sm:rounded-[36px] md:rounded-[44px]"
              loading="lazy"
            />
            <img
              src={project.col1Image2}
              alt=""
              className="w-full flex-1 min-h-0 object-cover object-top rounded-[30px] sm:rounded-[36px] md:rounded-[44px]"
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
              className="w-full h-full min-h-0 object-cover object-top rounded-[30px] sm:rounded-[36px] md:rounded-[44px]"
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-2 md:flex md:flex-row md:gap-5 text-[#D7E2EA] shrink-0">
          <div className="md:flex-1">
            <p className="text-[0.65rem] uppercase tracking-widest opacity-50 mb-0.5">Problem</p>
            <p className="text-xs sm:text-[0.8rem] font-light leading-snug line-clamp-2">{project.problem}</p>
          </div>
          <div className="md:flex-1">
            <p className="text-[0.65rem] uppercase tracking-widest opacity-50 mb-0.5">Solution</p>
            <p className="text-xs sm:text-[0.8rem] font-light leading-snug line-clamp-2">{project.solution}</p>
          </div>
          <div className="md:flex-1">
            <p className="text-[0.65rem] uppercase tracking-widest opacity-50 mb-0.5">Result</p>
            <p className="text-xs sm:text-[0.8rem] font-light leading-snug line-clamp-2">{project.result}</p>
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