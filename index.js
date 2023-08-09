const sectionEl = document.querySelector(".work");

const cardArray = [
  {
    title: "Digital Master Plan",
    img: "snapshot-portfolio/caps-1.png",
    text: "A strategic website where users can join, buy tickets, check upcoming events and get all information of the event.",
    tech: ["html", "css", "javascript"],
    description:
      "DIGITAL MASTER PLAN 2023 is a website i have created for the purpose of marketing and knownledge sharing to our partners and clients who wish to attend Digital Master Plan 2023 summit.All the information are provided in this site.",
    demo: [
      {
        val: "see live",
        icons: "icons/Icon.svg",
        path: "https://zeff96.github.io/digital-master-plan.github.io/",
      },
      {
        val: "see source",
        icons: "icons/icons8-github-48.png",
        path: "https://github.com/zeff96/Capstone-1",
      },
    ],
  },
  {
    title: "Multi-Post Stories",
    img: "snapshot-portfolio/Multi-post.png",
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    tech: ["html", "css", "javascript"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    demo: [
      {
        val: "see live",
        icons: "./icons/Icon.svg",
        path: "https://www.w3.org/Provider/Style/dummy.html",
      },
      {
        val: "see source",
        icons: "./icons/icons8-github-48.png",
        path: "https://github.com/zeff96/Personal-Portfolio",
      },
    ],
  },
  {
    title: "Tonic",
    img: "snapshot-portfolio/Snapshoot Portfolio.png",
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    tech: ["html", "css", "javascript"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    demo: [
      {
        val: "see live",
        icons: "icons/Icon.svg",
        path: "https://www.w3.org/Provider/Style/dummy.html",
      },
      {
        val: "see source",
        icons: "icons/icons8-github-48.png",
        path: "https://github.com/zeff96/Personal-Portfolio",
      },
    ],
  },
  {
    title: "Multi-Post Stories",
    img: "snapshot-portfolio/Snapshoot .png",
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    tech: ["html", "css", "javascript"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    demo: [
      {
        val: "See Live",
        icons: "icons/Icon.svg",
        path: "https://www.w3.org/Provider/Style/dummy.html",
      },
      {
        val: "See Source",
        icons: "icons/icons8-github-48.png",
        path: "https://github.com/zeff96/Personal-Portfolio",
      },
    ],
  },
];

const frameInfo = `
  <span class="text-dark">
    CANOPY
  </span>
  <img src="snapshot-portfolio/Counter.png" alt="counter">
  <span class="text-body-tertiary">
    Back End Dev
  </span>
  <img src="snapshot-portfolio/Counter.png" alt="counter">
  <span class="text-body-tertiary">
    2023
  </span>
`;

const render = () => {
  cardArray.forEach((card, index) => {
    const listTech = card.tech.map(
      (item) => `<li class="bg-light rounded px-2 text-primary">${item}</li>`
    );

    const listBtn = card.demo.map(
      (item) => `<a href="${item.path}">
      <button class="btn btn-outline-primary">
        ${item.val}
        <img src ="${item.icons}" alt="${item.val}" style="width:1.5rem"/>
      </button> </a
    >`
    );

    const lists = `<div class="card mb-5 p-2 p-sm-4 rounded-4">
      <div class="row g-3">
        <div class="col-sm-6">
          <img src="${card.img}" alt="${card.title}" class="card-img-top" />
        </div>
        <div class="col-sm-6">
          <div class="card-body">
            <h5 class="card-title h1 fw-bold mb-4">${card.title}</h5>
            <div class="d-flex align-items-center gap-3 mb-4">${frameInfo}</div>
            <p class="card-text mb-sm-4">${card.text}</p>
            <ul class="list-unstyled d-flex gap-2 mb-4">
              ${listTech.join("")}
            </ul>
            <button 
            type="button" 
            class="btn btn-outline-primary btn-lg" 
            data-bs-toggle="modal" 
            data-bs-target="#${index}">
              See Project
            </button>
          </div>
        </div>
      </div>
    </div>
    `;
    const modal = `<div
      class="modal fade"
      id="${index}"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content rounded-4">
          <div class="modal-header">
            <h2>${card.title}</h2>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="d-flex align-items-center gap-3 mb-3">${frameInfo}</div>
            <div style="width:100%">
              <img class="img mb-5" src="${card.img}" alt="${card.title}" />
            </div>
            <div class="row g-2">
              <div class="col-sm-6 col-lg-7">
                <p>${card.description}</p>
              </div>
              <div class="col-sm-6 col-lg-5">
                <ul class="list-unstyled d-flex gap-2 mb-3">
                  ${listTech.join("")}
                </ul>
                <div class="d-flex align-items-center gap-3">
                  ${listBtn.join("")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;

    sectionEl.insertAdjacentHTML("beforeend", lists);
    sectionEl.insertAdjacentHTML("beforeend", modal);
  });
};

window.onload = render();
