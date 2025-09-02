const skills = [
  {
    text: "Frontend: Vue.js, React.js, Next.js, TypeScript, Tailwind CSS, Styled-components, Material UI, Ant Design",
    icon: "fa-solid fa-code",
  },
  {
    text: "Backend: Nest.js, Java, Express.js, Firebase, MongoDB",
    icon: "fa-solid fa-server",
  },
  {
    text: "Arquitetura e DevOps: Microfrontends, Microsserviços, Azure, Docker, Kubernetes, trunk-based development",
    icon: "fa-solid fa-diagram-project",
  },
  {
    text: "Versionamento e Colaboração: Git, Scrum, trabalho remoto e multicultural",
    icon: "fa-solid fa-people-group",
  },
  {
    text: "Testes Automatizados: Jest, Vue Test Utils, JUnit, Cypress, Cucumber, testes cross-browser",
    icon: "fa-solid fa-vial",
  },
  {
    text: "Design e Documentação: Storybook, integração com Design Systems via Figma",
    icon: "fa-solid fa-pencil-ruler",
  },
  {
    text: "Análise e Monitoramento: Tagueamento e eventos para Google Analytics",
    icon: "fa-solid fa-chart-line",
  },
];

const skillsList = document.getElementById("skills-list");

skills.forEach((skill) => {
  const li = document.createElement("li");
  li.innerHTML = `<i class="${skill.icon}"></i> ${skill.text}`;
  skillsList.appendChild(li);
});

const projects = [
  {
    title: "FastEng",
    subtitle: "Next.js | Nest.js | MongoDB",
    description:
      "Plataforma web para engenheiros civis, com registro de materiais, cálculos e geração de relatórios.",
    image: "../../public/assets/fasteng01.jpg",
    links: [{ label: "Visitar", url: "https://fastengapp.com.br/" }],
  },
  {
    title: "Stocks View",
    subtitle: "React.js | Redux",
    description:
      "Aplicação para acompanhar ações favoritas, gráficos e tendências.",
    image: "../../public/assets/share.jpg",
    links: [
      { label: "GitHub", url: "https://github.com/seu-repositorio-stocks" },
    ],
  },
  {
    title: "Airbnb Clone",
    subtitle: "Next.js",
    description: "Clone do Airbnb com Mapbox, calendário e reservas.",
    image: "../../public/assets/airbnb.jpg",
    links: [{ label: "GitHub", url: "https://github.com/seu-repositorio" }],
  },
  {
    title: "Centelhas do Cristo",
    subtitle: "Vue.js | JavaScript",
    description: "Site estático responsivo para ONG local.",
    image: "../../public/assets/cdc06.jpg",
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
    a.rel = "noopener noreferrer";

    if (link.label.toLowerCase().includes("github")) {
      a.innerHTML = `<i class="fab fa-github"></i> ${link.label}`;
    } else {
      a.textContent = link.label;
    }

    linksDiv.appendChild(a);
  });

  content.appendChild(linksDiv);

  card.appendChild(imgDiv);
  card.appendChild(content);
  projectsList.appendChild(card);
});

const experiences = [
  {
    role: "Desenvolvedora Full Stack Web Junior — Mutant",
    period:
      "ago de 2024 – o momento · 1 ano 1 mês · São Paulo, Brasil · Remota",
    context: "Projeto desenvolvido para a Vivo via consultoria.",
    tasks: [
      "Desenvolvimento de aplicações com Vue.js, em arquitetura de microfrontends",
      "Desenvolvimento de aplicações Flutter Web, com Dart",
      "Desenvolvimento de aplicações em Java, com Quarkus, em arquitetura de microsserviços",
      "Deploy de módulos e gerenciamento em nuvem utilizando Azure",
      "Adoção da estratégia de trunk-based development para entregas contínuas",
      "Gerenciamento de estado com Vuex e consumo de APIs via Axios",
      "Integração com banco de dados MongoDB",
      "Testes automatizados: testes unitários com Jest e Vue Test Utils, JUnit, testes de integração com Cypress, testes de aceitação com Cucumber e testes entre navegadores",
      "Documentação e desenvolvimento de componentes com Storybook",
      "Containerização com Docker e orquestração de serviços utilizando Kubernetes para gerenciamento de pods",
      "Envio de eventos para o Google Analytics por meio de tagueamento",
      "Atuação em times ágeis seguindo a metodologia Scrum, com versionamento de código via Git",
    ],
  },
  {
    role: "Desenvolvedora Web Frontend Junior — Ingate",
    period: "fev de 2024 – ago de 2024 · 7 meses · Japão · Remota",
    tasks: [
      "Desenvolvimento de interfaces com React.js, Next.js, Vue.js e TypeScript",
      "Utilização de bibliotecas de UI como Material-UI, Tailwind CSS e Ant Design",
      "Integração com backend via Firebase",
      "Integração com Design System via Figma e versionamento de código com Git",
      "Colaboração em ambiente ágil (Scrum) e equipe multicultural, com comunicação em inglês",
    ],
  },
  {
    role: "Desenvolvedora Web Frontend Estagiária — Locale Imóveis",
    period:
      "dez de 2022 – fev de 2024 · 1 ano 3 meses · Rio Grande/RS · Remota",
    tasks: [
      "Desenvolvimento de aplicações com Next.js, TypeScript e Tailwind CSS",
      "Integração com backend em Nest.js e banco de dados MongoDB",
      "Otimização de performance e SEO técnico",
      "Integração com Design System via Figma e versionamento de código com Git",
      "Atuação em times ágeis seguindo a metodologia Scrum",
    ],
  },
  {
    role: "Desenvolvedora Web Full Stack Estagiária — JBR ENGENHARIA LTDA",
    period:
      "ago de 2022 – fev de 2024 · 1 ano 7 meses · Campina Grande/PB · Remota",
    tasks: [
      "Desenvolvimento de interfaces com React.js, Next.js e Styled-components",
      "Desenvolvimento de APIs backend com Nest.js e Express.js, com persistência em MongoDB",
      "Migração progressiva de código JavaScript para TypeScript",
      "Integração com Design System via Figma e versionamento de código com Git",
      "Atuação em times ágeis seguindo a metodologia Scrum",
    ],
  },
];

const experienceSection = document.querySelector(".experience");

experiences.forEach((job) => {
  const jobDiv = document.createElement("div");
  jobDiv.classList.add("job");

  let html = `<h3>${job.role}</h3>`;
  html += `<p class="time">${job.period}</p>`;

  if (job.context) {
    html += `<p><em>${job.context}</em></p>`;
  }

  html += `<ul>`;
  job.tasks.forEach((task) => {
    html += `<li>• ${task}</li>`;
  });
  html += `</ul>`;

  jobDiv.innerHTML = html;
  experienceSection.appendChild(jobDiv);
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
  const body = `${message}`;

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

  setTimeout(() => {
    modal.classList.add("hidden");
  }, 4000);
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
