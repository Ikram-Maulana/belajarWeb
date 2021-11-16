/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <h2 tabindex="0">Restoran Favoritmu</h2>
    <div class="cards"></div>
    `;
  },

  async afterRender() {
    const home = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('.cards');
    home.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
