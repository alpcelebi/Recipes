import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      navigate('/');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">TYA  Yemek Tarifleri</Link>
      </div>
      <div className="navbar-search">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tarif malzemeler ile ara"
          />
          <button type="submit">Ara</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
