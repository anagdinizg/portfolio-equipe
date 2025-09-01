const slides = document.querySelectorAll('.slide');
const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('prev');
let current = 0;

function showSlide(index) {
  current = (index + slides.length) % slides.length;
  slides.forEach((s, i) => {
    if (i === current) {
      s.classList.add('active');
      s.setAttribute('aria-hidden', 'false');
    } else {
      s.classList.remove('active');
      s.setAttribute('aria-hidden', 'true');
    }
  });
}

btnNext && btnNext.addEventListener('click', () => showSlide(current + 1));
btnPrev && btnPrev.addEventListener('click', () => showSlide(current - 1));


let autoplay = true;
let autoplayInterval = 6000;
let autoplayId = null;

if (autoplay) {
  autoplayId = setInterval(() => showSlide(current + 1), autoplayInterval);

  const carousel = document.querySelector('.carousel');
  carousel && carousel.addEventListener('mouseenter', () => clearInterval(autoplayId));
  carousel && carousel.addEventListener('mouseleave', () => {
    autoplayId = setInterval(() => showSlide(current + 1), autoplayInterval);
  });
}

showSlide(0);


const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 350) {
    backToTop.style.display = 'flex';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


function handleForm(e) {
  e.preventDefault();

  alert('Mensagem enviada! (demo) — substitua handleForm para conectar um backend.');
  e.target.reset();
  return false;
}

document.getElementById('year').textContent = new Date().getFullYear();
