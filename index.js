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

const cardArray = [
  {
    title: 'post-stories',
    img: 'img/Img Placeholder.png"',
    text: "A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industry's standar dummy text eversince the 1500s, when an unknown printer took a standard dummy text",
    description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae veritatis velit adipisci numquam nulla fugit. In accusamus quis eveniet nesciunt deserunt aspernatur recusandae voluptate similique molestias sed accusantium saepe ullam excepturi aperiam tempora qui iste quisquam, incidunt vitae voluptatum praesentium explicabo quae repellendus? Quas sapiente tenetur ea! Necessitatibus minima labore dolor soluta in voluptatem aspernatur officiis culpa cupiditate quo repudiandae ducimus, aperiam facilis fugit atque quibusdam ut quaerat omnis praesentium id consectetur fugiat reprehenderit unde? Dolore expedita debitis error assumenda aliquam, enim iste eligendi, odio reiciendis eos reprehenderit ab! Enim dolor rem ducimus, libero quaerat dolorum rerum deleniti veniam consectetur!'
  },{
    title: 'post-stories',
    img: 'img/Img Placeholder.png"',
    text: "A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industry's standar dummy text eversince the 1500s, when an unknown printer took a standard dummy text",
    description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae veritatis velit adipisci numquam nulla fugit. In accusamus quis eveniet nesciunt deserunt aspernatur recusandae voluptate similique molestias sed accusantium saepe ullam excepturi aperiam tempora qui iste quisquam, incidunt vitae voluptatum praesentium explicabo quae repellendus? Quas sapiente tenetur ea! Necessitatibus minima labore dolor soluta in voluptatem aspernatur officiis culpa cupiditate quo repudiandae ducimus, aperiam facilis fugit atque quibusdam ut quaerat omnis praesentium id consectetur fugiat reprehenderit unde? Dolore expedita debitis error assumenda aliquam, enim iste eligendi, odio reiciendis eos reprehenderit ab! Enim dolor rem ducimus, libero quaerat dolorum rerum deleniti veniam consectetur!'
  },{
    title: 'post-stories',
    img: 'img/Img Placeholder.png"',
    text: "A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industry's standar dummy text eversince the 1500s, when an unknown printer took a standard dummy text",
    description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae veritatis velit adipisci numquam nulla fugit. In accusamus quis eveniet nesciunt deserunt aspernatur recusandae voluptate similique molestias sed accusantium saepe ullam excepturi aperiam tempora qui iste quisquam, incidunt vitae voluptatum praesentium explicabo quae repellendus? Quas sapiente tenetur ea! Necessitatibus minima labore dolor soluta in voluptatem aspernatur officiis culpa cupiditate quo repudiandae ducimus, aperiam facilis fugit atque quibusdam ut quaerat omnis praesentium id consectetur fugiat reprehenderit unde? Dolore expedita debitis error assumenda aliquam, enim iste eligendi, odio reiciendis eos reprehenderit ab! Enim dolor rem ducimus, libero quaerat dolorum rerum deleniti veniam consectetur!'
  },{
    title: 'post-stories',
    img: 'img/Img Placeholder.png"',
    text: "A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industry's standar dummy text eversince the 1500s, when an unknown printer took a standard dummy text",
    description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae veritatis velit adipisci numquam nulla fugit. In accusamus quis eveniet nesciunt deserunt aspernatur recusandae voluptate similique molestias sed accusantium saepe ullam excepturi aperiam tempora qui iste quisquam, incidunt vitae voluptatum praesentium explicabo quae repellendus? Quas sapiente tenetur ea! Necessitatibus minima labore dolor soluta in voluptatem aspernatur officiis culpa cupiditate quo repudiandae ducimus, aperiam facilis fugit atque quibusdam ut quaerat omnis praesentium id consectetur fugiat reprehenderit unde? Dolore expedita debitis error assumenda aliquam, enim iste eligendi, odio reiciendis eos reprehenderit ab! Enim dolor rem ducimus, libero quaerat dolorum rerum deleniti veniam consectetur!'
  }
]


for (const i in cardArray) {
  const card = document.createElement('div');
  card.classList.add('card-container')
  const article = document.createElement('article');
  article.classList.add('card')
  const cardBlock = document.createElement('div');
  cardBlock.classList.add('card-2')
  const cardImage = document.createElement('div');
  const h3 = document.createElement('h3');
  h3.innerHTML = 'Profesional Art Printing Data';

  cardBlock.append(h3);
  article.appendChild(cardBlock);
  card.append(article);

  sectionEl.appendChild(card);

}