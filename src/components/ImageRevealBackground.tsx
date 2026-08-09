import { useEffect, useRef } from 'react';

const BG_IMAGE_1 = '/hero/hero-1.webp';
const BG_IMAGE_2 = '/hero/hero-2.webp';

interface ImageRevealBackgroundProps {
  baseLayerClassName?: string;
  revealLayerClassName?: string;
}

export default function ImageRevealBackground({
  baseLayerClassName,
  revealLayerClassName,
}: ImageRevealBackgroundProps) {
  const baseRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const base = baseRef.current;
    const reveal = revealRef.current;
    if (!base || !reveal) return;

    const mouse = { x: 0, y: 0 };
    const smooth = { x: 0, y: 0 };
    const rect = { left: 0, top: 0 };

    const measureRect = () => {
      const r = base.getBoundingClientRect();
      rect.left = r.left;
      rect.top = r.top;
    };

    const measure = () => {
      measureRect();
      mouse.x = smooth.x = rect.left + base.clientWidth / 2;
      mouse.y = smooth.y = rect.top + base.clientHeight / 2;
    };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      start();
    };

    let visible = true;
    let running = false;
    let raf = 0;

    const draw = () => {
      smooth.x += (mouse.x - smooth.x) * 0.1;
      smooth.y += (mouse.y - smooth.y) * 0.1;

      if (getComputedStyle(reveal).display !== 'none') {
        const radius = Math.max(160, Math.min(420, window.innerWidth * 0.16));
        const cx = smooth.x - rect.left;
        const cy = smooth.y - rect.top;
        const mask = `radial-gradient(circle ${radius}px at ${cx}px ${cy}px, #000 0%, #000 40%, rgba(0,0,0,0.75) 60%, rgba(0,0,0,0.4) 75%, rgba(0,0,0,0.12) 88%, transparent 100%)`;
        reveal.style.maskImage = mask;
        reveal.style.webkitMaskImage = mask;
      }

      if (
        visible &&
        (Math.abs(mouse.x - smooth.x) > 0.5 || Math.abs(mouse.y - smooth.y) > 0.5)
      ) {
        raf = requestAnimationFrame(draw);
      } else {
        running = false;
      }
    };

    const start = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(draw);
      }
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    let io: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver((entries) => {
        const entry = entries[0];
        visible = entry ? entry.isIntersecting : false;
        if (visible) start();
        else stop();
      });
      io.observe(base);
    }

    measure();
    const onScroll = () => {
      measureRect();
      start();
    };
    const onResize = () => {
      measure();
      start();
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    start();

    return () => {
      stop();
      io?.disconnect();
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <>
      <div
        ref={baseRef}
        className={baseLayerClassName}
        style={{
          backgroundImage: `url(${BG_IMAGE_1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div
        ref={revealRef}
        className={revealLayerClassName}
        style={{
          backgroundImage: `url(${BG_IMAGE_2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </>
  );
}
