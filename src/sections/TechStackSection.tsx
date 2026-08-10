import FadeIn from '../components/FadeIn';

const STACK = [
  {
    cat: 'AI / ML',
    desc: 'RAG pipelines, multi-agent systems, fine-tuning',
    tools: [
      'OpenAI', 'Claude', 'LangChain', 'Pinecone',
      'ChromaDB', 'FAISS', 'Hugging Face', 'Whisper',
    ],
  },
  {
    cat: 'Frontend',
    desc: 'Responsive UIs, dashboards, landing pages',
    tools: [
      'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
      'Framer Motion', 'Three.js', 'Vite',
    ],
  },
  {
    cat: 'Backend',
    desc: 'APIs, microservices, real-time systems',
    tools: [
      'Node.js', 'Python', 'FastAPI', 'Express',
      'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL',
    ],
  },
  {
    cat: 'Mobile',
    desc: 'Cross-platform, native performance',
    tools: [
      'React Native', 'Expo', 'Swift', 'Kotlin',
      'Firebase', 'Push Notifications',
    ],
  },
  {
    cat: 'Automation',
    desc: 'Workflows, chatbots, integrations',
    tools: [
      'n8n', 'Make', 'WhatsApp API', 'Gmail API',
      'Slack', 'Airtable', 'Google Sheets',
    ],
  },
  {
    cat: 'DevOps',
    desc: 'Deploy, scale, monitor',
    tools: [
      'Docker', 'AWS', 'Vercel', 'GitHub Actions',
      'Kubernetes', 'Terraform', 'Cloudflare',
    ],
  },
];

export default function TechStackSection() {
  return (
    <section className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28">
      <FadeIn delay={0} y={40}>
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-black uppercase text-white text-[clamp(2.5rem,10vw,120px)] leading-none tracking-tight">
            Tech Stack
          </h2>
          <p className="text-[#888] text-[clamp(0.85rem,1.5vw,1.1rem)] mt-4 max-w-lg mx-auto">
            We pick the right tools for the job — no vendor lock-in, no unnecessary complexity.
          </p>
        </div>
      </FadeIn>

      <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {STACK.map((group, gi) => (
          <FadeIn key={group.cat} delay={gi * 0.08} y={20}>
            <div className="rounded-xl border border-white/10 p-6 h-full hover:border-white/20 transition-colors duration-300">
              <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white mb-1">
                {group.cat}
              </h3>
              <p className="text-[0.75rem] text-[#666] mb-4">{group.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md bg-white/[0.06] px-2.5 py-1 text-[0.75rem] text-[#bbb]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
