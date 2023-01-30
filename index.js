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