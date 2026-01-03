// Replace any on-page labels with the canonical site title
(function setSiteTitle(){
  const canonical = 'the sound department';
  // elements that commonly carry labels / titles on simple sites
  const selectors = [
    '.site-title', 'header h1', '.label', '.brand', '.logo', '#title', '.hero-title'
  ];
  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') return;
      el.textContent = canonical;
    });
  });
})();

// subtle parallax on mouse move for layers
(function parallax(){
  const back = document.querySelector('.layer-back');
  const mid = document.querySelector('.layer-mid');
  const front = document.querySelector('.layer-front');
  if(!back || !mid || !front) return;

  document.addEventListener('mousemove', e => {
    const cx = window.innerWidth/2;
    const cy = window.innerHeight/2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;
    back.style.transform = `translate(${dx*6}px, ${dy*6}px) scale(1.05)`;
    mid.style.transform  = `translate(${dx*14}px, ${dy*12}px) scale(1.02)`;
    front.style.transform= `translate(${dx*28}px, ${dy*22}px) scale(1)`;
  });
})();