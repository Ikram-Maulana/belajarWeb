import CONFIG from '../../globals/config';
import EachDetail from '../../utils/each-detail';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 tabindex="0">Detail Restoran</h2>
  <div class="detail-container">
    <div class="detail-image">
      <img src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="Gambar ${restaurant.name}" tabindex="0">
    </div>
    <div class="detail-main">
      <h3 tabindex="0">${restaurant.name}</h3>
      <div class="category">
          ${EachDetail.eachCategories(restaurant)}
      </div>
      <div class="detail-item">
        <p aria-label="rating ${restaurant.rating}" tabindex="0"><i class="fas fa-star" style="color: #c5af1b; margin-right:0.5em;"></i>${restaurant.rating}</p>
        <p aria-label="kota ${restaurant.city}" tabindex="0"><i class="fas fa-map-marker-alt" style="color: #1b86c5; margin-right:0.5em;"></i>${restaurant.city}</p>
        <p aria-label="alamat restoran di ${restaurant.address}" tabindex="0"><i class="fas fa-map" style="color: #1bc55a; margin-right:0.5em;"></i>${restaurant.address}</p>
      </div>
      <p tabindex="0">${restaurant.description}</p>
    </div>
  </div>
  <div class="detailFD">
    <div class="detailFD-makanan">
      <h4 tabindex="0">Menu Makanan</h4>
      ${EachDetail.eachFoods(restaurant.menus)}
    </div>
    <div class="detailFD-minuman">
      <h4 tabindex="0">Menu Minuman</h4>
      ${EachDetail.eachDrinks(restaurant.menus)}
    </div>
  </div>
</div>
  <h2 class="ulasan" tabindex="0" style="margin-top:1em;">Ulasan Pelanggan</h2>
  <div class="cards customer-reviews">
    ${EachDetail.eachCustomersReview(restaurant)}
  </div>
  <h2 tabindex="0" style="margin: 1em 0;">Tambah Ulasan</h2>
  <div class="card-review" id="form-container"></div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="card-item">
  <img src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="Gambar ${restaurant.name}" tabindex="0">
  <div class="section-item">
    <div class="preview-item">
      <p aria-label="rating ${restaurant.rating}" tabindex="0"><i class="fas fa-star" style="color: #c5af1b"></i>${restaurant.rating}</p>
      <p aria-label="kota ${restaurant.city}" tabindex="0"><i class="fas fa-map-marker-alt" style="color: #1b86c5;"></i>${restaurant.city}</p>
    </div>
    <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
    <p tabindex="0">${restaurant.description}</p>
  </div>
  </div>
  `;

const createCategoryItemTemplate = (category) => `
    <div class="category-item" aria-label="${category.name}." tabindex="0">${category.name}</div>
`;

const createFoodItemTemplate = (food) => `
    <span class="food" aria-label="${food.name}." tabindex="0">${food.name}</span>
`;

const createDrinkItemTemplate = (drink) => `
  <span class="drink" aria-label="${drink.name}." tabindex="0">${drink.name}</span>
`;

const createFavoriteButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="favoriteButton" class="favorite">
    <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" id="favoriteButton" class="favorite">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

const createCustomersReviewTemplate = (customerReview) => `
  <div class="card-item review-main" style="padding:2em;" tabindex="0" aria-label="${customerReview.name} memberikan review ${customerReview.review}. Pada tanggal ${customerReview.date}">
  <h3>${customerReview.name}</h3>
  <p>${customerReview.date}</p>
  <p style="overflow-wrap: break-word;margin-top: 0.5em;font-size: 0.8rem; overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;"><strong>Ulasan:</strong> ${customerReview.review}</p>
  </div>
`;

const createRestaurantFormReviewTemplate = () => `
    <form class="main-form">
        <label for="name" style="display: block;font-weight:bold;margin-bottom:0.5em;">Nama</label>
        <input type="text" id="name" name="name" placeholder="Masukkan nama anda" value="" style="display: block; width:100%;margin-bottom:1em;height: 4em;padding: 1em;">
        <label for="review" style="display: block;font-weight:bold;margin-bottom:0.5em;">Review</label>
        <textarea id="review" name="review" placeholder="Your review here..." rows="5" style="display: block;width:100%;margin-bottom:1em;padding: 1em;font-family: 'Inter', sans-serif;"></textarea>
      <button id="reviewSubmit" aria-label="submit review">Submit</button>
    </form>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createCategoryItemTemplate,
  createFoodItemTemplate,
  createDrinkItemTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
  createCustomersReviewTemplate,
  createRestaurantFormReviewTemplate,
};
