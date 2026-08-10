import FadeIn from '../components/FadeIn';

const STACK = [
  { cat: 'AI / ML', tools: ['OpenAI', 'Claude', 'LangChain', 'Pinecone'] },
  { cat: 'Backend', tools: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL'] },
  { cat: 'Integration', tools: ['n8n', 'Make', 'WhatsApp API', 'REST / GraphQL'] },
  { cat: 'Cloud', tools: ['Docker', 'AWS', 'Vercel', 'GitHub Actions'] },
];

const COLORS: Record<string, string> = {
  OpenAI: '#10a37f',
  Claude: '#d97757',
  LangChain: '#1c3c3c',
  Pinecone: '#000000',
  'Node.js': '#339933',
  Python: '#3776ab',
  FastAPI: '#009688',
  PostgreSQL: '#4169e1',
  n8n: '#ee4962',
  Make: '#6d00cc',
  'WhatsApp API': '#25d366',
  'REST / GraphQL': '#e535ab',
  Docker: '#2496ed',
  AWS: '#ff9900',
  Vercel: '#000000',
  'GitHub Actions': '#2088ff',
};

export default function TechStackSection() {
  return (
    <section className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28">
      <FadeIn delay={0} y={40}>
        <h2 className="text-center font-black uppercase text-white text-[clamp(2.5rem,10vw,120px)] leading-none tracking-tight mb-16 sm:mb-20">
          Tech Stack
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {STACK.map((group, gi) => (
          <FadeIn key={group.cat} delay={gi * 0.1} y={20}>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#888] mb-5">
                {group.cat}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.8rem] text-[#D7E2EA] transition-colors duration-200 hover:bg-white/10"
                  >
                    <span
                      className="inline-block h-2 w-2 rounded-full"
                      style={{ backgroundColor: COLORS[tool] || '#888' }}
                    />
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
