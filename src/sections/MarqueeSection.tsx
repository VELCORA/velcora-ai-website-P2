import { useEffect, useRef } from 'react';

const IMAGES = [
  '/marquee/m01.png',
  '/marquee/m02.png',
  '/marquee/m03.png',
  '/marquee/m04.png',
  '/marquee/m05.png',
  '/marquee/m06.png',
  '/marquee/m07.png',
  '/marquee/m08.png',
  '/marquee/m09.png',
  '/marquee/m10.png',
  '/marquee/m11.png',
  '/marquee/m12.png',
  '/marquee/m13.png',
  '/marquee/m14.png',
  '/marquee/m15.png',
  '/marquee/m16.png',
  '/marquee/m17.png',
  '/marquee/m18.png',
  '/marquee/m19.png',
  '/marquee/m20.png',
  '/marquee/m21.png',
];

const ROW_1 = IMAGES.slice(0, 11);
const ROW_2 = IMAGES.slice(11);

function triple<T>(arr: T[]): T[] {
  return [...arr, ...arr, ...arr];
}

function ScrollRow({
  images,
  direction,
}: {
  images: string[];
  direction: 1 | -1;
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = rowRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      el.style.transform = `translateX(${direction === 1 ? offset - 200 : -(offset - 200)}px)`;
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [direction]);

  return (
    <div
      ref={rowRef}
      className="flex gap-3"
      style={{ willChange: 'transform', width: 'max-content' }}
    >
      {triple(images).map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          loading="lazy"
          decoding="async"
          className="rounded-2xl object-cover"
          style={{ width: 420, height: 270 }}
        />
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <section
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 flex flex-col gap-3 overflow-x-clip"
      style={{ overflowX: 'clip' }}
    >
      <ScrollRow images={ROW_1} direction={1} />
      <ScrollRow images={ROW_2} direction={-1} />
    </section>
  );
}
