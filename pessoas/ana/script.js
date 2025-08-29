const skills = [
  "Frontend: Vue.js, React.js, Next.js, TypeScript, Tailwind CSS, Styled-components, Material UI, Ant Design",
  "Backend: Nest.js, Java, Express.js, Firebase, MongoDB",
  "Arquitetura e DevOps: Microfrontends, Microsserviços, Azure, Docker, Kubernetes, trunk-based development",
  "Versionamento e Colaboração: Git, Scrum, trabalho remoto e multicultural",
  "Testes Automatizados: Jest, Vue Test Utils, JUnit, Cypress, Cucumber, testes cross-browser",
  "Design e Documentação: Storybook, integração com Design Systems via Figma",
  "Análise e Monitoramento: Tagueamento e eventos para Google Analytics",
];

const skillsList = document.getElementById("skills-list");

skills.forEach((skill) => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});

const projects = [
  {
    title: "FastEng",
    subtitle: "Next.js | Nest.js | MongoDB",
    description:
      "Plataforma web para engenheiros civis, com registro de materiais, cálculos e geração de relatórios.",
    image: "/assets/fasteng01.jpg",
    links: [{ label: "Visitar", url: "https://fastengapp.com.br/" }],
  },
  {
    title: "Stocks View",
    subtitle: "React.js | Redux",
    description:
      "Aplicação para acompanhar ações favoritas, gráficos e tendências.",
    image: "/assets/share.jpg",
    links: [
      { label: "GitHub", url: "https://github.com/seu-repositorio-stocks" },
    ],
  },
  {
    title: "Airbnb Clone",
    subtitle: "Next.js",
    description: "Clone do Airbnb com Mapbox, calendário e reservas.",
    image: "/assets/airbnb.jpg",
    links: [{ label: "GitHub", url: "https://github.com/seu-repositorio" }],
  },
  {
    title: "Centelhas do Cristo",
    subtitle: "Vue.js | JavaScript",
    description: "Site estático responsivo para ONG local.",
    image: "/assets/cdc06.jpg",
    links: [
      { label: "GitHub", url: "https://github.com/anagdinizg/cdc-versao2" },
      { label: "Visitar", url: "https://centelhas-do-cristo.vercel.app/" },
    ],
  },
];

const projectsList = document.getElementById("projects-list");

projects.forEach((project) => {
  const card = document.createElement("div");
  card.classList.add("project-card");

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("project-image");
  const img = document.createElement("img");
  img.src = project.image;
  img.alt = project.title;
  imgDiv.appendChild(img);

  const content = document.createElement("div");
  content.classList.add("project-content");
  content.innerHTML = `
    <h3>${project.title}</h3>
    <p><em>${project.subtitle}</em></p>
    <p>${project.description}</p>
  `;

  const linksDiv = document.createElement("div");
  linksDiv.classList.add("project-links");
  project.links.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.url;
    a.target = "_blank";
    a.textContent = link.label;
    linksDiv.appendChild(a);
  });

  content.appendChild(linksDiv);

  card.appendChild(imgDiv);
  card.appendChild(content);
  projectsList.appendChild(card);
});

function sendEmail(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    showModal("Por favor, preencha todos os campos antes de enviar.");
    return;
  }

  if (!validateEmail(email)) {
    showModal("Por favor, insira um e-mail válido.");
    return;
  }

  const subject = `Portfólio - Contato de ${name}`;
  const body = `Nome: ${name}\nEmail: ${email}\nMensagem:\n${message}`;

  const mailtoLink = `mailto:anagabrieladinizgusmao@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;

  showModal(
    "Obrigado pelo contato! Um novo e-mail está sendo aberto para envio."
  );
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}

function showModal(message) {
  const modal = document.getElementById("modal");
  const modalMessage = document.getElementById("modal-message");
  modalMessage.textContent = message;
  modal.classList.remove("hidden");
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
}

const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
