import React from 'react';
import { NavLink } from 'react-router-dom';
import './ActiveLink.css';
const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={`mx-5 ${({ isActive }) => (isActive ? 'active' : '')}`}
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
