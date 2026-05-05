'use client';
import { useEffect } from 'react';

export default function HashScroll() {
  useEffect(() => {
    const target = sessionStorage.getItem('scrollTo');
    if (!target) return;
    sessionStorage.removeItem('scrollTo');

    // Wait for GSAP ScrollTrigger to finish its init refresh before scrolling
    const timer = setTimeout(() => {
      const el = document.querySelector(target);
      if (!el) return;
      const navH = (document.querySelector('.site-header') as HTMLElement)?.offsetHeight ?? 90;
      const top = el.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
