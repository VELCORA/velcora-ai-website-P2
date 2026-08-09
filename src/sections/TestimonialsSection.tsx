import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

const TESTIMONIALS = [
  {
    quote:
      'The WhatsApp chatbot handles every order enquiry while we sleep. Morning = replies waiting, customers happy, zero missed sales.',
    name: 'Clinic Owner',
    role: 'Healthcare · New York',
  },
  {
    quote:
      'Our follow-up pipeline used to be two guys doing the same copy-paste all day. Now the AI does it in seconds and the leads actually convert.',
    name: 'Sales Lead',
    role: 'Real Estate · London',
  },
  {
    quote:
      'Asked them for a simple automation. Got a system that saves us 15+ hours a week. Paid for itself in the first month.',
    name: 'Operations Head',
    role: 'Logistics · Dubai',
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28"
    >
      <h2 className="text-center font-black uppercase text-[#0C0C0C] text-[clamp(2.5rem,10vw,140px)] leading-none tracking-tight mb-16 sm:mb-20 md:mb-24">
        What Clients Say
      </h2>

      <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <FadeIn key={i} delay={i * 0.12} y={30}>
            <div
              className="flex h-full flex-col justify-between gap-8 rounded-2xl border border-[#0C0C0C]/15 p-8"
              style={{ borderBottom: '4px solid #0C0C0C' }}
            >
              <p className="text-lg font-light leading-relaxed text-[#0C0C0C]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-[#0C0C0C]">
                  {t.name}
                </p>
                <p className="text-sm font-light opacity-60 mt-1">{t.role}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="mt-16 text-center">
        <ContactButton />
      </div>
    </section>
  );
}
