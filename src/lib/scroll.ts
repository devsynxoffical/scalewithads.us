/**
 * Lock page scroll while keeping Lenis and native scroll in sync.
 * Use instead of setting `document.body.style.overflow` directly so the
 * smooth-scroll instance stops (and later resumes) cleanly behind menus,
 * modals and lightboxes.
 */
export function lockScroll(locked: boolean) {
  const lenis = window.__lenis;
  if (locked) {
    document.body.style.overflow = "hidden";
    lenis?.stop();
  } else {
    document.body.style.overflow = "";
    lenis?.start();
  }
}
