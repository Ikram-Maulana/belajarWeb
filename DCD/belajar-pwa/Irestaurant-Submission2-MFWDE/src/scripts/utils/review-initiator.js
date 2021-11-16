/* eslint-disable no-alert */
/* eslint-disable no-undef */
import RestaurantSource from '../data/restaurant-source';
import UrlParser from '../routes/url-parser';
import MonthHelper from './month-helper';
import {
  createCustomersReviewTemplate,
  createRestaurantFormReviewTemplate,
} from '../views/templates/template-creator';

const ReviewInitiator = {
  init({
    customerReviewContainer,
    customerFormReviewContainer,
  }) {
    this._customerReviewContainer = customerReviewContainer;
    this._customerFormReviewContainer = customerFormReviewContainer;
    this._renderForm();
  },

  _renderForm() {
    this._customerFormReviewContainer.innerHTML = createRestaurantFormReviewTemplate();
    this._isSubmittedForm();
  },

  _isSubmittedForm() {
    const reviewFormElement = document.querySelector('.main-form');

    reviewFormElement.addEventListener('submit', (e) => {
      e.preventDefault();

      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const inputName = document.querySelector('#name');
      const inputReview = document.querySelector('#review');

      this._makeRequest({
        id: url.id,
        name: inputName.value,
        review: inputReview.value,
      });
    });
  },

  async _makeRequest({
    id,
    name,
    review,
  }) {
    const inputName = document.querySelector('#name');
    const inputReview = document.querySelector('#review');
    const responseJSON = await RestaurantSource.reviewRestaurant({
      id,
      name,
      review,
    });
    const date = new Date();

    if (await responseJSON.error === false) {
      this._customerReviewContainer.innerHTML += createCustomersReviewTemplate({
        id,
        name,
        review,
        date: `
        ${date.getDay()} ${MonthHelper.monthNameChecker(date.getMonth())} ${date.getFullYear()}
        `,
      });

      inputName.value = '';
      inputReview.value = '';

      alert('Review has been successfuly added!');
    } else {
      alert(await responseJSON.message);
    }
  },
};

export default ReviewInitiator;
