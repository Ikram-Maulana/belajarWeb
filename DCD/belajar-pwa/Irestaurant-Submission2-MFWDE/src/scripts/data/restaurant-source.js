/* eslint-disable no-undef */
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async homeRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST_HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async reviewRestaurant(data) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: data.id,
        name: data.name,
        review: data.review,
      }),
    }, { mode: 'no-cors' });
    return response.json();
  }
}

export default RestaurantSource;
