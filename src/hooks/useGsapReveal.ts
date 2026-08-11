import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export function useGsapReveal() {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) {
      gsap.set('.reveal', { opacity: 1, y: 0 });
      gsap.set('.reveal-line > span', { y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
          },
        });
      });

      gsap.utils.toArray<HTMLElement>('.reveal-line > span').forEach((el) => {
        gsap.to(el, {
          y: 0,
          duration: 1.1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
          },
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-stagger]').forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>('[data-stagger-item]');
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: group,
            start: 'top 85%',
          },
        });
      });
    });

    return () => ctx.revert();
  }, [reduced]);
}
