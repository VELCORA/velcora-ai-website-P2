import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

const SERVICES = [
  {
    number: '01',
    name: 'Custom Software',
    description:
      'Your business has unique problems. We build the software to solve them — dashboards, internal tools, portals,CRMs, ERPs — whatever you need, built around your exact workflow.',
    tools: 'Python · Node.js · React · Next.js · PostgreSQL',
  },
  {
    number: '02',
    name: 'AI Agents & Automation',
    description:
      'AI that qualifies leads, follows up on WhatsApp, answers customer queries, processes documents, and runs your back office — so your team does work that actually makes money.',
    tools: 'n8n · OpenAI · LangChain · WhatsApp API · Vector Search',
  },
  {
    number: '03',
    name: 'Web Applications',
    description:
      'Full-stack SaaS platforms, admin panels, customer portals, and dashboards. Production-grade, responsive, and built to scale from day one.',
    tools: 'React · Next.js · TypeScript · Tailwind · Vercel',
  },
  {
    number: '04',
    name: 'Mobile Apps',
    description:
      'Cross-platform mobile apps for iOS and Android. Ship once, run everywhere — with push notifications, offline support, and native performance.',
    tools: 'React Native · Expo · Swift · Kotlin · Firebase',
  },
  {
    number: '05',
    name: 'APIs & Integrations',
    description:
      'We connect the tools you already use — OAuth2, webhooks, third-party APIs, REST, GraphQL — and build the glue that holds your stack together.',
    tools: 'REST · GraphQL · gRPC · OAuth2 · Webhooks',
  },
  {
    number: '06',
    name: 'Data & Analytics',
    description:
      'Data pipelines, ETL systems, real-time dashboards, and reporting engines. Turn scattered data into decisions — no more spreadsheet chaos.',
    tools: 'Python · PostgreSQL · Redis · Kafka · Docker',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2 className="text-center font-black uppercase text-[#0C0C0C] text-[clamp(3rem,12vw,160px)] leading-none tracking-tight mb-16 sm:mb-20 md:mb-28">
          Services
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 py-8 sm:py-10 md:py-12"
              style={{ borderTop: i === 0 ? undefined : '1px solid rgba(12,12,12,0.15)' }}
            >
              <span className="font-black text-[#0C0C0C] text-[clamp(3rem,10vw,140px)] leading-none">
                {service.number}
              </span>
              <div className="flex flex-col gap-2 sm:gap-3">
                <h3 className="font-medium uppercase text-[#0C0C0C] text-[clamp(1rem,2.2vw,2.1rem)]">
                  {service.name}
                </h3>
                <p className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60 text-[clamp(0.85rem,1.6vw,1.25rem)]">
                  {service.description}
                </p>
                {service.tools && (
                  <p className="text-[0.75rem] font-medium tracking-wider text-[#0C0C0C] opacity-40 uppercase mt-1">
                    {service.tools}
                  </p>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
        <div style={{ borderTop: '1px solid rgba(12,12,12,0.15)' }} />
        <div className="mt-14 text-center">
          <FadeIn delay={0.2} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}