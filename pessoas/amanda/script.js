/* =========================
   JavaScript responsável por:
   - Carrossel simples (prev/next)
   - Botão "Voltar ao topo" animado
   - Pequena função de submissão do formulário (simulada)
   ========================= */

/* === CARROSSEL SIMPLES === */
const slides = document.querySelectorAll('.slide');
const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('prev');
let current = 0;

// Função para mostrar slide por índice
function showSlide(index) {
  // garantir índice válido (loop)
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

// eventos dos botões
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

// init
showSlide(0);


/* === VOLTAR AO TOPO (ANIMADO) === */
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  // aparece quando rolou mais de 350px
  if (window.scrollY > 350) {
    backToTop.style.display = 'flex';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


/* === FORMULÁRIO (simples demo) === */
function handleForm(e) {
  e.preventDefault();

  // Por enquanto fazemos uma confirmação visual simples.
  alert('Mensagem enviada! (demo) — substitua handleForm para conectar um backend.');
  e.target.reset();
  return false;
}

/* === RODAPÉ ANO DINÂMICO === */
document.getElementById('year').textContent = new Date().getFullYear();
