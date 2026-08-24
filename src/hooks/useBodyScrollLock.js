import { useEffect } from 'react';

export function useBodyScrollLock(isLocked) {
  useEffect(() => {
    if (!isLocked) return;

    if (window.__lenis) {
      window.__lenis.stop();
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
      if (window.__lenis) {
        window.__lenis.start();
      }
    };
  }, [isLocked]);
}
