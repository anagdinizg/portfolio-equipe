function irParaTopo() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', function () {
  const botao = document.getElementById('btnTopo');
  if (window.scrollY > 200) {
    botao.style.display = 'block';
  } else {
    botao.style.display = 'none';
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-contato");
  const mensagem = document.getElementById("mensagem-sucesso");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    mensagem.style.display = "block";

    form.reset();

    setTimeout(() => {
      mensagem.style.display = "none";
    }, 5000); 
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Modal Petshop
  const abrirPetshop = document.getElementById("abrirModalPetshop");
  const fecharPetshop = document.getElementById("fecharModalPetshop");
  const modalPetshop = document.getElementById("modal-projeto-petshop");

  abrirPetshop.addEventListener("click", () => {
    modalPetshop.style.display = "block";
  });

  fecharPetshop.addEventListener("click", () => {
    modalPetshop.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modalPetshop) {
      modalPetshop.style.display = "none";
    }
  });

  // Modal TechConnect
  const abrirTech = document.getElementById("abrirModalTech");
  const fecharTech = document.getElementById("fecharModalTech");
  const modalTech = document.getElementById("modal-projeto-tech");

  abrirTech.addEventListener("click", () => {
    modalTech.style.display = "block";
  });

  fecharTech.addEventListener("click", () => {
    modalTech.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modalTech) {
      modalTech.style.display = "none";
    }
  });
});

