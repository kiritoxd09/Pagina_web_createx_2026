// Lightbox
function abrirLb(el) {
  const src = el.querySelector('img').src;
  document.getElementById('lb-img').src = src;
  document.getElementById('lb').classList.add('on');
}

function cerrarLb() {
  document.getElementById('lb').classList.remove('on');
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') cerrarLb();
});

// Scroll reveal
document.addEventListener('DOMContentLoaded', function () {
  const elementos = document.querySelectorAll('.bloque-foto, .bloque-txt, .hero-firma');

  elementos.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elementos.forEach(function (el) {
    observer.observe(el);
  });
});
