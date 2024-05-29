import axios from 'axios';

const API_URL = 'https://www.themealdb.com/api/json/v1/1';

export const getRecipes = (query) => {
  return axios.get(`${API_URL}/search.php`, {
    params: {
      s: query
    }
  });
};

export const getInitialRecipes = async () => {
  const popularBabyFoods = [
    'Mango Mint Baby Food Puree',
    'Peach Baby Puree',
    'Homemade Quinoa Baby Cereal',
    'Yellow Squash Thyme Baby Food Puree',
    'Butternut Squash Baby Food',
    'Homemade Baby Rice Cereal',
    'Pear Baby Puree',
    'Sweet Potato Baby Food Puree',
    'Carrot Baby Food Puree',
    'Green Bean Puree',
    'Apple and Prune Puree',
    'Broccoli Spinach Cauliflower Puree'
  ];

  const promises = popularBabyFoods.map(food => 
    axios.get(`${API_URL}/search.php`, {
      params: {
        s: food
      }
    })
  );

  const results = await Promise.all(promises);
  return results
    .map(result => result.data.meals)
    .filter(meals => meals && meals.length > 0)
    .map(meals => meals[0]);
};

export const getRecipeById = (id) => {
  return axios.get(`${API_URL}/lookup.php`, {
    params: {
      i: id
    }
  });
};
