import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import { getRecipes } from './api';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await getRecipes(query);
      if (response.data.meals) {
        setRecipes(response.data.meals);
      } else {
        setRecipes([]);
        alert('Yemek bulunamadı');
      }
    } catch (error) {
      console.error("Error fetching recipes: ", error);
      alert('Yemek bulunamadı');
    }
  };

  return (
    <Router>
      <div>
        <Navbar onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<RecipeList recipes={recipes} />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
