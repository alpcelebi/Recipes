import React from 'react';
import { Link } from 'react-router-dom';
import './Recipe.css';

const Recipe = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h2>{recipe.strMeal}</h2>
      <Link to={`/recipe/${recipe.idMeal}`}>Detaylar</Link>
    </div>
  );
};

export default Recipe;
