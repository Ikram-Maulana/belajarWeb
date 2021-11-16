import {
  createCategoryItemTemplate,
  createFoodItemTemplate,
  createDrinkItemTemplate,
  createCustomersReviewTemplate,
} from '../views/templates/template-creator';

const EachDetail = {
  eachCategories({ categories }) {
    let categoryList = '';
    categories.forEach((category) => {
      categoryList += createCategoryItemTemplate(category);
    });
    return categoryList;
  },

  eachFoods({ foods }) {
    let foodsList = '';
    foods.forEach((food) => {
      foodsList += createFoodItemTemplate(food);
    });
    return foodsList;
  },

  eachDrinks({ drinks }) {
    let drinksList = '';
    drinks.forEach((drink) => {
      drinksList += createDrinkItemTemplate(drink);
    });
    return drinksList;
  },

  eachCustomersReview({ customerReviews }) {
    let reviewList = '';
    customerReviews.forEach((customerReview) => {
      reviewList += createCustomersReviewTemplate(customerReview);
    });
    return reviewList;
  },
};

export default EachDetail;
