// Global smooth scroll helper compatible with Lenis and standard browsers
export function scrollToSection(target, offset = -80) {
  if (typeof window === 'undefined') return;

  const element = typeof target === 'string'
    ? document.getElementById(target.replace('#', ''))
    : target;

  if (!element) return;

  if (window.__lenis) {
    window.__lenis.scrollTo(element, { offset, duration: 1.2 });
  } else {
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

export function scrollToTop() {
  if (typeof window === 'undefined') return;

  if (window.__lenis) {
    window.__lenis.scrollTo(0, { duration: 1.2 });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
