const navEl = document.querySelector('.nav-items');
const closeEl = document.querySelector('.close-btn');
const hamburgerEl = document.querySelector('.menu-icon');
const linksEl = document.querySelectorAll('.nav-links');

const formEl = document.querySelector('.form');
const formControl = document.querySelector('.form-control');
const emailEl = document.getElementById('email');
const msgEl = document.querySelector('.msg');
const nameEl = document.getElementById('name');
const textEl = document.getElementById('textarea');

const bodyEl = document.querySelector('body');

hamburgerEl.addEventListener('click', () => {
  navEl.classList.add('active');
});
closeEl.addEventListener('click', () => {
  navEl.classList.remove('active');
});

linksEl.forEach((link) => {
  link.addEventListener('click', () => {
    navEl.classList.remove('active');
  });
});

const sectionEl = document.querySelector('.work');

const cardArray = [
  {
    title: 'Digital Master Plan',
    img: 'snapshot-portfolio/caps-1.png',
    text: 'A strategic website where users can join, buy tickets, check upcoming events and get all information of the event.',
    tech: ['html', 'css', 'javascript'],
    description: "DIGITAL MASTER PLAN 2023 is a website i have created for the purpose of marketing and knownledge sharing to our partners and clients who wish to attend Digital Master Plan 2023 summit.All the information are provided in this site.",
    demo: [
      {
        val: 'see live',
        icons: 'icons/Icon.png',
        path: 'https://zeff96.github.io/digital-master-plan.github.io/',
      }, {
        val: 'see source',
        icons: 'icons/icons8-github-48.png',
        path: 'https://github.com/zeff96/Capstone-1',
      },
    ],
  }, {
    title: 'Multi-post stories',
    img: 'snapshot-portfolio/Multi-post.png',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tech: ['html', 'css', 'javascript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    demo: [
      {
        val: 'see live',
        icons: 'icons/Icon.png',
        path: 'https://www.w3.org/Provider/Style/dummy.html',
      }, {
        val: 'see source',
        icons: 'icons/icons8-github-48.png',
        path: 'https://github.com/zeff96/Personal-Portfolio',
      },
    ],
  }, {
    title: 'tonic',
    img: 'snapshot-portfolio/Snapshoot Portfolio.png',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tech: ['html', 'css', 'javascript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    demo: [
      {
        val: 'see live',
        icons: 'icons/Icon.png',
        path: 'https://www.w3.org/Provider/Style/dummy.html',
      }, {
        val: 'see source',
        icons: 'icons/icons8-github-48.png',
        path: 'https://github.com/zeff96/Personal-Portfolio',
      },
    ],
  }, {
    title: 'Multi-post stories',
    img: 'snapshot-portfolio/Snapshoot .png',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tech: ['html', 'css', 'javascript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    demo: [
      {
        val: 'see live',
        icons: 'icons/Icon.png',
        path: 'https://www.w3.org/Provider/Style/dummy.html',
      }, {
        val: 'see source',
        icons: 'icons/icons8-github-48.png',
        path: 'https://github.com/zeff96/Personal-Portfolio',
      },
    ],
  },

];

const frameInfo = `
  <p class="client">
    capstone
  </p>
  <img src="snapshot-portfolio/Counter.png" alt="counter">
  <p class="role">
    front end dev
  </p>
  <img src="snapshot-portfolio/Counter.png" alt="counter">
  <p class="year">
    2023
  </p>
`;

const cards = Object.keys(cardArray);

cards.forEach((elem) => {
  const card = document.createElement('div');
  card.classList.add('card-work');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('snapshot-portfolio');
  const img = document.createElement('img');
  img.setAttribute('src', cardArray[elem].img);
  imgContainer.appendChild(img);

  const leftBlock = document.createElement('div');
  leftBlock.classList.add('left-block');
  const title = document.createElement('h2');
  title.classList.add('work-title');
  title.innerHTML = cardArray[elem].title;
  const frame = document.createElement('div');
  frame.classList.add('frame');
  frame.innerHTML = frameInfo;
  const para = document.createElement('p');
  para.classList.add('para');
  para.innerHTML = cardArray[elem].text;
  const tags = document.createElement('ul');
  tags.classList.add('tags');

  cardArray[elem].tech.forEach((item) => {
    const tagChild = document.createElement('li');
    tagChild.innerHTML = item;
    tags.appendChild(tagChild);
  });
  const buttonEl = document.createElement('button');
  buttonEl.classList.add('btn');
  buttonEl.innerHTML = 'see project';

  const popup = document.createElement('div');
  popup.classList.add('popup');

  const header = document.createElement('h2');
  header.classList.add('work-title');
  header.innerHTML = cardArray[elem].title;

  const popFrame = document.createElement('div');
  popFrame.classList.add('frame');
  popFrame.innerHTML = frameInfo;

  const popContainer = document.createElement('div');
  popContainer.classList.add('pop-container');
  const popimg = document.createElement('img');
  popimg.setAttribute('src', cardArray[elem].img);
  popContainer.appendChild(popimg);

  const txt = document.createElement('p');
  txt.classList.add('pop-para');
  txt.innerHTML = cardArray[elem].description;

  const lang = document.createElement('ul');
  lang.classList.add('tags');

  cardArray[elem].tech.forEach((item) => {
    const tagChild = document.createElement('li');
    tagChild.innerHTML = item;
    lang.appendChild(tagChild);
  });

  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');

  const btnEl = Object.keys(cardArray[elem].demo);

  btnEl.forEach((btn) => {
    const anchor = document.createElement('a');
    anchor.setAttribute('href', cardArray[elem].demo[btn].path);
    const btns = document.createElement('button');
    btns.classList.add('btn');
    btns.innerHTML = cardArray[elem].demo[btn].val;
    const icon = document.createElement('img');
    icon.classList.add('span');
    icon.setAttribute('src', cardArray[elem].demo[btn].icons);

    btns.appendChild(icon);
    anchor.appendChild(btns);
    btnContainer.appendChild(anchor);
  });

  const rightBlock = document.createElement('div');
  rightBlock.classList.add('right-block');
  rightBlock.append(lang, btnContainer);

  const popLeftBlock = document.createElement('div');
  const closeMark = document.createElement('div');
  const dlt = document.createElement('img');
  dlt.classList.add('xmark');
  dlt.setAttribute('src', 'icons/dlt-96.png');
  closeMark.appendChild(dlt);
  popLeftBlock.classList.add('left-blockpop');
  popLeftBlock.append(txt, rightBlock);
  popup.append(closeMark, header, popFrame, popContainer, popLeftBlock);

  leftBlock.append(title, frame, para, tags, buttonEl);

  card.append(popup, imgContainer, leftBlock);
  sectionEl.appendChild(card);

  buttonEl.addEventListener('click', () => {
    popup.classList.toggle('show');
    bodyEl.classList.add('overlap');
  });

  dlt.addEventListener('click', () => {
    popup.classList.toggle('show');
    bodyEl.classList.remove('overlap');
  });
});

function showError(input, message) {
  msgEl.innerHTML = message;
}

function showSuccess() {
  formControl.classList.add('valid');
}

function checkInput() {
  const emailValue = emailEl.value;

  if (emailValue !== emailValue.toLowerCase()) {
    showError(emailEl, 'The content has to be in lower case!');
  } else {
    showSuccess(emailEl);
    formEl.submit();
  }
}

formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInput();
});

const userData = JSON.parse(localStorage.getItem('userInfo'));

if (userData) {
  nameEl.value = userData.name;
  emailEl.value = userData.email;
  textEl.value = userData.text;
}

function getData() {
  const nameData = nameEl.value;
  const emailData = emailEl.value;
  const textData = textEl.value;

  const userInfo = {
    name: nameData,
    email: emailData,
    text: textData,
  };

  localStorage.setItem('userInfo', JSON.stringify(userInfo));
}
formEl.addEventListener('input', getData);
formEl.addEventListener('submit', getData);