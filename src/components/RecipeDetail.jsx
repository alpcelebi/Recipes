import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeById } from '../api';
import './RecipeDetail.css';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await getRecipeById(id);
        setRecipe(response.data.meals[0]);
      } catch (error) {
        console.error("Error fetching recipe details: ", error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="recipe-detail">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h2>{recipe.strMeal}</h2>
      <p>{recipe.strInstructions}</p>
      <ul>
        {Object.keys(recipe)
          .filter(key => key.startsWith('strIngredient') && recipe[key])
          .map(key => (
            <li key={key}>{recipe[key]}</li>
          ))}
      </ul>
    </div>
  );
};

export default RecipeDetail;
