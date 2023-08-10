const sectionEl = document.querySelector(".work");

const cardArray = [
  {
    title: "Digital Master Plan",
    img: "snapshot-portfolio/master-plan.jpg",
    text: "A strategic website where users can join, buy tickets, check upcoming events and get all information of the event.",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "DIGITAL MASTER PLAN 2023 is a website i have created for the purpose of marketing and knownledge sharing to our partners and clients who wish to attend Digital Master Plan 2023 summit.All the information are provided in this site.",
    demo: [
      {
        val: "see live",
        icons: "icons/Icon.svg",
        path: "https://zeff96.github.io/capstone-1/index.html",
      },
      {
        val: "see source",
        icons: "icons/icons8-github-48.png",
        path: "https://github.com/zeff96/capstone-1",
      },
    ],
  },
  {
    title: "Bookstore App",
    img: "./snapshot-portfolio/bookstore.jpg",
    text: "Application that allows users to add books,update the progess of the books and delete the books once completed",
    tech: ["React", "Redux", "Bootstrap", "JavaScript"],
    description:
      "A sophisticated software solution has been developed to empower users in seamlessly managing their personal literary journeys. This meticulously crafted application provides an avenue for users to effortlessly input, update, and efficiently curate their collection of books. With its intuitive interface and comprehensive features, it elevates the experience of book tracking to a new level of professionalism.",
    demo: [
      {
        val: "see live",
        icons: "./icons/Icon.svg",
        path: "https://books-store-d9d1.onrender.com/",
      },
      {
        val: "see source",
        icons: "./icons/icons8-github-48.png",
        path: "https://github.com/zeff96/bookstore",
      },
    ],
  },
  {
    title: "Doctor's Appointment",
    img: "snapshot-portfolio/doctor.png",
    text: "This is a rails API app that provides api endpoints for users to fetch doctors, create doctors and book appointment via secure https request",
    tech: ["React", "RoR", "PostgreSQL"],
    description:
      "This application is a Ruby on Rails API-based system that offers various API endpoints to facilitate user interactions. It allows users to retrieve information about doctors, create new doctor profiles, and book appointments. All interactions with the API are conducted securely over HTTPS, ensuring data privacy and protection. This setup provides a comprehensive solution for managing medical information and appointment scheduling through a web-based interface.",
    demo: [
      {
        val: "see live",
        icons: "icons/Icon.svg",
        path: "https://doctor-appointment-cx5g.onrender.com/",
      },
      {
        val: "see source",
        icons: "icons/icons8-github-48.png",
        path: "https://github.com/zeff96/doctor_appointment_back_end",
      },
    ],
  },
  {
    title: "Crypto Currency",
    img: "snapshot-portfolio/bitcoin-app.jpg",
    text: "This is a website that allow users to get bitcoins from the api and allows users to get details of each bitcoin from the api as well",
    tech: ["React", "Redux", "JavaScript"],
    description:
      "This application is a web-based platform that offers users the capability to interact with a Bitcoin API. It enables users to both acquire bitcoins from the API and retrieve detailed information about individual bitcoins. Through this platform, users can access real-time data related to the Bitcoin cryptocurrency, facilitating transactions and analysis of the Bitcoin market.",
    demo: [
      {
        val: "See Live",
        icons: "icons/Icon.svg",
        path: "https://bitcoins.onrender.com/",
      },
      {
        val: "See Source",
        icons: "icons/icons8-github-48.png",
        path: "https://github.com/zeff96/crypto_currency_app",
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
    const isEven = index % 2 === 0;
    const imgOrder = isEven ? 1 : 2
    const bodyOrder = isEven ? 2 : 1

    const listTech = card.tech.map(
      (item) => `<li class="bg-light rounded px-2 text-primary">${item}</li>`
    );

    const listBtn = card.demo.map(
      (item) => `<a href="${item.path}" target="_blank">
      <button class="btn btn-outline-primary">
        ${item.val}
        <img src ="${item.icons}" alt="${item.val}" style="width:1.5rem"/>
      </button> </a
    >`
    );

    const lists = `<div class="card mb-5 p-2 p-sm-4 rounded-4">
      <div class="row g-3">
        <div class="col-12 col-md-6 order-md-${imgOrder}">
          <img src="${card.img}" alt="${card.title}" class="img-fluid rounded-2" />
        </div>
        <div class="col-12 col-md-6 order-md-${bodyOrder}">
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
              <img class="img-fluid rounded-2 mb-5" src="${card.img}" alt="${card.title}" />
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
