import 'regenerator-runtime'; /* for async await transpile */
import restaurants from '../DATA.json';
import '../styles/main.css';
import '../styles/responsive.css';

// eslint-disable-next-line no-undef
const menu = document.querySelector('#menu');
// eslint-disable-next-line no-undef
const jumbotron = document.querySelector('.jumbotron');
// eslint-disable-next-line no-undef
const main = document.querySelector('main');
// eslint-disable-next-line no-undef
const list = document.querySelector('ul');
const restaurant = JSON.parse(JSON.stringify(restaurants)).restaurants;
// eslint-disable-next-line no-undef
const itemList = document.querySelector('.cards');

// eslint-disable-next-line no-undef
document.addEventListener('DOMContentLoaded', () => {
  menu.addEventListener('click', (event) => {
    list.classList.toggle('open');
    event.stopPropagation();
  });

  jumbotron.addEventListener('click', () => {
    list.classList.remove('open');
  });

  main.addEventListener('click', () => {
    list.classList.remove('open');
  });

  // eslint-disable-next-line no-shadow
  restaurant.forEach((restaurant) => {
    itemList.innerHTML += `
    <div class="card-item">
    <img src="${restaurant.pictureId}" alt="Gambar ${restaurant.name}" tabindex="0">
    <div class="section-item">
      <div class="preview-item">
        <p aria-label="rating ${restaurant.rating}" tabindex="0"><i class="fas fa-star" style="color: gold"></i>${restaurant.rating}</p>
        <p aria-label="kota ${restaurant.city}" tabindex="0"><i class="fas fa-location" style="color: darkblue;"></i>${restaurant.city}</p>
      </div>
      <h3 tabindex="0">${restaurant.name}</h3>
      <p tabindex="0">${restaurant.description}</p>
    </div>
    </div>
    `;
  });
});
