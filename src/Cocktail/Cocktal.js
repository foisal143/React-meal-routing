import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Cocktal = ({ drink }) => {
  console.log(drink);
  const { idDrink, strDrink, strDrinkThumb } = drink;

  return (
    <div className="w-full p-5 h-full">
      <img src={strDrinkThumb} alt="" />
      <div className="px-2">
        <h2 className="text-2xl font-bold my-2">{strDrink}</h2>
        <Link to={`/cocktails/${idDrink}`}>
          <button className="btn btn-warning">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Cocktal;
