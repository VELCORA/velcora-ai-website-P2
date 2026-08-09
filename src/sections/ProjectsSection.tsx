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
}

const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'LeadSDR — AI Sales Pipeline',
    category: 'Lead Automation',
    problem: 'Sales teams lose hours every day following up leads manually — and most enquiries go cold before anyone replies.',
    solution: 'A multi-agent AI sales pipeline that qualifies leads, sends personalized WhatsApp + email follow-ups, and books meetings automatically.',
    result: 'Every lead contacted within 60 seconds. Repetitive follow-up fully automated. The pipeline runs 24/7 without missing a single lead.',
    col1Image1:
      'https://images.unsplash.com/photo-1749006590639-e749e6b7d84c?auto=format&fit=crop&w=1280&q=80',
    col1Image2:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1280&q=80',
    col2Image:
      'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1280&q=80',
    cta: wa('Hi Velcora AI, I want to automate my sales follow-ups with LeadSDR.'),
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
        className="relative w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 h-full flex flex-col overflow-hidden"
      >
        <div className="flex items-center justify-between gap-4 mb-4 shrink-0">
          <span className="font-black text-[#D7E2EA] text-[clamp(3rem,10vw,140px)] leading-none">
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

        <div className="flex gap-3 items-stretch flex-1 min-h-0 mb-4">
          <div
            className="flex flex-col gap-3 min-w-0 min-h-0"
            style={{ width: '40%' }}
          >
            <img
              src={project.col1Image1}
              alt=""
              className="w-full flex-1 min-h-0 object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              loading="lazy"
            />
            <img
              src={project.col1Image2}
              alt=""
              className="w-full flex-1 min-h-0 object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              loading="lazy"
            />
          </div>
          <div
            className="min-w-0 min-h-0"
            style={{ width: '60%' }}
          >
            <img
              src={project.col2Image}
              alt={project.name}
              className="w-full h-full min-h-0 object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-3 md:flex md:flex-row md:gap-4 text-[#D7E2EA] shrink-0">
          <div className="md:flex-1">
            <p className="text-xs uppercase tracking-widest opacity-50 mb-1">Problem</p>
            <p className="text-sm font-light leading-relaxed">{project.problem}</p>
          </div>
          <div className="md:flex-1">
            <p className="text-xs uppercase tracking-widest opacity-50 mb-1">Solution</p>
            <p className="text-sm font-light leading-relaxed">{project.solution}</p>
          </div>
          <div className="md:flex-1">
            <p className="text-xs uppercase tracking-widest opacity-50 mb-1">Result</p>
            <p className="text-sm font-light leading-relaxed">{project.result}</p>
          </div>
        </div>

        <div className="flex justify-end mt-4 shrink-0">
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