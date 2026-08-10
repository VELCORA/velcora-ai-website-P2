import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

const SERVICES = [
  {
    number: '01',
    name: 'AI Sales Pipeline',
    description:
      'Your leads contacted within 60 seconds. AI qualifies them, follows up on WhatsApp and email, and books meetings automatically — so no enquiry ever goes cold.',
    tools: 'n8n · OpenAI · Gmail · WhatsApp API',
  },
  {
    number: '02',
    name: 'WhatsApp Business Bot',
    description:
      'An AI chatbot trained on your catalog, prices, and FAQs. It answers customers instantly, 24/7, takes orders, and hands off to your team when it matters.',
    tools: 'OpenAI · WhatsApp Business API · Vector Search',
  },
  {
    number: '03',
    name: 'Chat with Your Documents',
    description:
      'Contracts, invoices, reports — upload them once and ask questions like you are talking to an expert who has read everything.',
    tools: 'LangChain · Pinecone · OpenAI · RAG',
  },
  {
    number: '04',
    name: 'Lead Capture & Follow-up',
    description:
      'Forms, ads, and enquiries funnel into one system. Automatic replies, scheduled follow-ups, and a clean pipeline you can actually see.',
    tools: 'Make · Airtable · Gmail · WhatsApp',
  },
  {
    number: '05',
    name: 'Back-office Automation',
    description:
      'Invoices, reports, data entry, email sorting. Repetitive office work runs itself, and your team gets 15+ hours back every week.',
    tools: 'n8n · Google Sheets · OpenAI Vision · SMTP',
  },
  {
    number: '06',
    name: 'Custom AI Workflows',
    description:
      'Your business is unique — we design automations around your exact process, using the tools you already use with zero lock-in.',
    tools: 'n8n · Make · Python · Docker · REST APIs',
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