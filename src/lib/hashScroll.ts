const DEFAULT_OFFSET = 16;
const STICKY_OFFSET_GAP = 18;

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getScrollOffset() {
  const nav = document.querySelector<HTMLElement>('.nav');

  if (!nav) {
    return DEFAULT_OFFSET;
  }

  const navStyle = window.getComputedStyle(nav);

  if (navStyle.position === 'fixed' || navStyle.position === 'sticky') {
    return Math.ceil(nav.getBoundingClientRect().height + STICKY_OFFSET_GAP);
  }

  return DEFAULT_OFFSET;
}

function normalizeHash(hash: string) {
  if (!hash || hash === '#') {
    return '';
  }

  return hash.startsWith('#') ? hash : `#${hash}`;
}

export function scrollToHash(
  hash: string,
  options: { updateHistory?: boolean; behavior?: ScrollBehavior } = {}
) {
  const normalizedHash = normalizeHash(hash);

  if (!normalizedHash) {
    return false;
  }

  const id = decodeURIComponent(normalizedHash.slice(1));
  const target = document.getElementById(id);

  if (!target) {
    return false;
  }

  const offset = getScrollOffset();
  const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset);
  const behavior = options.behavior ?? (prefersReducedMotion() ? 'auto' : 'smooth');

  if (options.updateHistory && window.location.hash !== normalizedHash) {
    window.history.pushState(null, '', normalizedHash);
  }

  try {
    window.scrollTo({ top, behavior });
  } catch {
    window.scrollTo(0, top);
  }

  return true;
}

export function scrollToCurrentHash(behavior: ScrollBehavior = 'auto') {
  if (!window.location.hash) {
    return;
  }

  window.requestAnimationFrame(() => {
    scrollToHash(window.location.hash, { behavior });
  });
}
