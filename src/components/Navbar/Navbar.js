import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Navbar = () => {
  return (
    <nav className="md:px-12 h-20 bg-orange-600 flex justify-between items-center text-white ">
      <div>
        <h3 className="font-semibold text-2xl">
          <Link to="/">MEAL DB</Link>
        </h3>
      </div>
      <div>
        <ActiveLink to="/">Home</ActiveLink>
        <ActiveLink to="/about">About</ActiveLink>
        <ActiveLink to="/foods">Foods</ActiveLink>
        <ActiveLink to="/cocktails">Cocktails</ActiveLink>
        <ActiveLink to="/blog">Blog</ActiveLink>
      </div>
    </nav>
  );
};

export default Navbar;
