import React from 'react';

const Navbar = () => {
  return (
    <header>
      <a href="#" className="logo">
        Gary Simon
      </a>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
