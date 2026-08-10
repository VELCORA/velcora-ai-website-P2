import FadeIn from '../components/FadeIn';

const CLIENTS = [
  { name: 'MedPlus Clinic', industry: 'Healthcare' },
  { name: 'London Properties', industry: 'Real Estate' },
  { name: 'Gulf Logistics', industry: 'Logistics' },
  { name: 'ShopEasy', industry: 'E-commerce' },
  { name: 'LegalEdge', industry: 'Legal' },
  { name: 'CloudStack', industry: 'SaaS' },
  { name: 'FreshBite', industry: 'Food & Beverage' },
  { name: 'AutoFlow', industry: 'Manufacturing' },
];

export default function ClientsSection() {
  return (
    <section className="bg-[#fafafa] px-5 sm:px-8 md:px-10 py-16 sm:py-20 border-t border-[#f0f0f0]">
      <FadeIn delay={0} y={30}>
        <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-[#888] mb-12">
          Trusted by businesses across6 industries
        </p>
      </FadeIn>

      <div className="mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
        {CLIENTS.map((c, i) => (
          <FadeIn key={c.name} delay={i * 0.06} y={15}>
            <div className="text-center">
              <p className="text-sm font-semibold text-[#0C0C0C] leading-tight">
                {c.name}
              </p>
              <p className="text-[0.7rem] text-[#888] mt-1">{c.industry}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.5} y={15}>
        <p className="text-center text-[0.8rem] text-[#888] mt-12">
          Names shown with permission. Full case studies available on request.
        </p>
      </FadeIn>
    </section>
  );
}
