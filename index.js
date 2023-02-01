const navEl = document.querySelector('.nav-items');
const closeEl = document.querySelector('.close-btn');
const hamburgerEl = document.querySelector('.menu-icon');
const linksEl = document.querySelectorAll('.nav-links');

const formEl = document.querySelector('.form');
const formControl = document.querySelector('.form-control');
const emailEl = document.getElementById('email');
const msgEl = document.querySelector('.msg');

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
    title: 'tonic',
    img: 'snapshot-portfolio/tonic.png',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tech: ['html', 'css', 'javascript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  }, {
    title: 'Multi-post stories',
    img: 'snapshot-portfolio/Multi-post.png',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tech: ['html', 'css', 'javascript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  }, {
    title: 'tonic',
    img: 'snapshot-portfolio/Snapshoot Portfolio.png',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tech: ['html', 'css', 'javascript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  }, {
    title: 'Multi-post stories',
    img: 'snapshot-portfolio/Snapshoot .png',
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tech: ['html', 'css', 'javascript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },

];

const frameInfo = `
  <p class="client">
    canopy
  </p>
  <img src="snapshot-portfolio/Counter.png" alt="counter">
  <p class="role">
    back end dev
  </p>
  <img src="snapshot-portfolio/Counter.png" alt="counter">
  <p class="year">
    2015
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

  const lang = document.createElement('ul');
  lang.classList.add('tags');

  cardArray[elem].tech.forEach((item) => {
    const tagChild = document.createElement('li');
    tagChild.innerHTML = item;
    lang.appendChild(tagChild);
  });

  const txt = document.createElement('p');
  txt.classList.add('pop-para');
  txt.innerHTML = cardArray[elem].description;

  const btnLive = document.createElement('button');
  btnLive.classList.add('btn');
  const icon = document.createElement('img');
  icon.classList.add('span');
  icon.setAttribute('src', 'icons/icon.png');
  btnLive.innerHTML = 'see live';
  btnLive.appendChild(icon);
  const btnSrc = document.createElement('button');
  btnSrc.classList.add('btn');
  const gitIcon = document.createElement('img');
  gitIcon.classList.add('span');
  gitIcon.setAttribute('src', 'icons/icons8-github-48.png');
  btnSrc.innerHTML = 'see source';
  btnSrc.appendChild(gitIcon);
  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');
  btnContainer.append(btnLive, btnSrc);
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
  });

  dlt.addEventListener('click', () => {
    popup.classList.toggle('show');
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
