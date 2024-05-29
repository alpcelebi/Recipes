import React, { useEffect, useState } from 'react';
import { getInitialRecipes } from '../api';
import Recipe from './Recipe';
import './RecipeList.css';

const RecipeList = ({ recipes }) => {
  const [initialRecipes, setInitialRecipes] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const initialRecipes = await getInitialRecipes();
        setInitialRecipes(initialRecipes);
        setError(false);
      } catch (error) {
        console.error("Error fetching recipes: ", error);
        setError(true);
      }
    };

    fetchRecipes();
  }, []);

  const displayedRecipes = recipes.length > 0 ? recipes : initialRecipes;

  return (
    <div className="recipe-list">
      <h2>TYA Yemek Tarifleri</h2>
      {error ? (
        <p>Yemek bulunamadı</p>
      ) : (
        <div className="recipe-cards">
          {displayedRecipes.map((recipe, index) => (
            <Recipe key={index} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;
