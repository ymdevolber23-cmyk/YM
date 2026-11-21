/* Design reminder: Keep the interface direct, accessible and understated; no non-functional UI. */
document.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('a[href^="http"]').forEach(a=>{if(a.hostname!==location.hostname){a.setAttribute('rel','noopener');}});});
