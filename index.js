const navEl = document.querySelector('.nav-items')
const closeEl = document.querySelector('.close-btn');
const hamburgerEl = document.querySelector('.menu-icon');
const linksEl = document.querySelectorAll('.nav-links');

hamburgerEl.addEventListener('click', () => {
  navEl.classList.add('active')
})
closeEl.addEventListener('click', ()=>{
  navEl.classList.remove('active')
})

linksEl.forEach((link) => {
  link.addEventListener('click', ()=> {
    navEl.classList.remove('active');
  })
})

const sectionEl = document.querySelector('.work');

const cardArray = [
  {
    title: 'tonic',
    img: 'snapshot-portfolio/tonic.png',
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae veritatis velit adipisci numquam nulla fugit. In accusamus quis eveniet nesciunt deserunt aspernatur recusandae voluptate similique molestias sed accusantium saepe ullam excepturi aperiam tempora qui iste quisquam, incidunt vitae voluptatum praesentium explicabo quae repellendus? Quas sapiente tenetur ea! Necessitatibus minima labore dolor soluta in voluptatem aspernatur officiis culpa cupiditate quo repudiandae ducimus, aperiam facilis fugit atque quibusdam ut quaerat omnis praesentium id consectetur fugiat reprehenderit unde? Dolore expedita debitis error assumenda aliquam, enim iste eligendi, odio reiciendis eos reprehenderit ab! Enim dolor rem ducimus, libero quaerat dolorum rerum deleniti veniam consectetur!'
  },{
    title: 'Multi-post stories',
    img: 'snapshot-portfolio/Multi-post.png',
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae veritatis velit adipisci numquam nulla fugit. In accusamus quis eveniet nesciunt deserunt aspernatur recusandae voluptate similique molestias sed accusantium saepe ullam excepturi aperiam tempora qui iste quisquam, incidunt vitae voluptatum praesentium explicabo quae repellendus? Quas sapiente tenetur ea! Necessitatibus minima labore dolor soluta in voluptatem aspernatur officiis culpa cupiditate quo repudiandae ducimus, aperiam facilis fugit atque quibusdam ut quaerat omnis praesentium id consectetur fugiat reprehenderit unde? Dolore expedita debitis error assumenda aliquam, enim iste eligendi, odio reiciendis eos reprehenderit ab! Enim dolor rem ducimus, libero quaerat dolorum rerum deleniti veniam consectetur!'
  },{
    title: 'tonic',
    img: 'snapshot-portfolio/Snapshoot Portfolio.png',
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae veritatis velit adipisci numquam nulla fugit. In accusamus quis eveniet nesciunt deserunt aspernatur recusandae voluptate similique molestias sed accusantium saepe ullam excepturi aperiam tempora qui iste quisquam, incidunt vitae voluptatum praesentium explicabo quae repellendus? Quas sapiente tenetur ea! Necessitatibus minima labore dolor soluta in voluptatem aspernatur officiis culpa cupiditate quo repudiandae ducimus, aperiam facilis fugit atque quibusdam ut quaerat omnis praesentium id consectetur fugiat reprehenderit unde? Dolore expedita debitis error assumenda aliquam, enim iste eligendi, odio reiciendis eos reprehenderit ab! Enim dolor rem ducimus, libero quaerat dolorum rerum deleniti veniam consectetur!'
  },{
    title: 'Multi-post stories',
    img: 'snapshot-portfolio/Snapshoot .png',
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae veritatis velit adipisci numquam nulla fugit. In accusamus quis eveniet nesciunt deserunt aspernatur recusandae voluptate similique molestias sed accusantium saepe ullam excepturi aperiam tempora qui iste quisquam, incidunt vitae voluptatum praesentium explicabo quae repellendus? Quas sapiente tenetur ea! Necessitatibus minima labore dolor soluta in voluptatem aspernatur officiis culpa cupiditate quo repudiandae ducimus, aperiam facilis fugit atque quibusdam ut quaerat omnis praesentium id consectetur fugiat reprehenderit unde? Dolore expedita debitis error assumenda aliquam, enim iste eligendi, odio reiciendis eos reprehenderit ab! Enim dolor rem ducimus, libero quaerat dolorum rerum deleniti veniam consectetur!'
  }
]

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

const tech = `
  <ul>
    <li>html</li>
    <li>css</li>
    <li>javascript</li>
  </ul>
`;


for (const i in cardArray) {
  const card = document.createElement('div');
  card.classList.add('card-work')

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('snapshot-portfolio')
  const img = document.createElement('img');
  img.setAttribute('src', cardArray[i].img);
  imgContainer.appendChild(img);

  const leftBlock = document.createElement('div');
  leftBlock.classList.add('left-block')
  const title = document.createElement('h2');
  title.classList.add('work-title')
  title.innerHTML = cardArray[i].title;
  const frame = document.createElement('div');
  frame.classList.add('frame');
  frame.innerHTML = frameInfo;
  const para = document.createElement('p');
  para.classList.add('para');
  para.innerHTML = cardArray[i].text;
  const tags = document.createElement('div');
  tags.classList.add('tags');
  tags.innerHTML = tech;
  const buttonEl = document.createElement('button');
  buttonEl.classList.add('btn');
  buttonEl.innerHTML = 'see project'


  leftBlock.append(title, frame, para, tags, buttonEl)

  card.append(imgContainer, leftBlock)
  sectionEl.appendChild(card);

}