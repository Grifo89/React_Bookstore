import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="header">
      <h1 className="title">Bookstore CMS</h1>
      <p className="header-books">BOOKS</p>
      <p className="header-categories">CATEGORIES</p>
    </div>
    <div className="header-icon">
      <i className="fas fa-user-alt icon" />
    </div>
  </header>
);

export default Header;
