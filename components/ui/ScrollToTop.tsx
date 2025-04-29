'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import clsx from 'clsx';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const slowScrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(slowScrollToTop);
      window.scrollTo(0, c - c / 25);
    }
  }

  return (
    <button
      onClick={slowScrollToTop}
      className={clsx(
        "fixed bottom-6 right-6 z-50 rounded-full bg-gray-800 text-white p-3 shadow-lg hover:bg-gray-700 transition-all duration-300 ease-in-out",
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}