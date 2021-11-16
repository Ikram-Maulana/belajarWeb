/* eslint-disable no-undef */
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <h2 tabindex="0">Rekomendasi Restoran</h2>
      <div class="cards"></div>
    `;
  },

  async afterRender() {
    const home = await RestaurantSource.homeRestaurant();
    const restaurantContainer = document.querySelector('.cards');
    home.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
