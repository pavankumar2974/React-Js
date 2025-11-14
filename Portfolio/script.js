// ===== Scroll Animation =====
const fadeElements = document.querySelectorAll('.fade-in');

function fadeInOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  fadeElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll();
