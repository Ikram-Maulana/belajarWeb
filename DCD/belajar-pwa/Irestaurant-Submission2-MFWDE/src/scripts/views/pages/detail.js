/* eslint-disable no-alert */
/* eslint-disable no-undef */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';
import ReviewInitiator from '../../utils/review-initiator';

const Detail = {
  async render() {
    return `
    <div id="favoriteButtonContainer"></div>
    <div class="detail"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('.detail');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant,
    });

    ReviewInitiator.init({
      customerReviewContainer: document.querySelector('.customer-reviews'),
      customerFormReviewContainer: document.querySelector('#form-container'),
    });
  },
};

export default Detail;
