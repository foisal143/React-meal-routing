import React from 'react';
import { Link } from 'react-router-dom';

const Food = ({ food }) => {
  console.log(food);
  const { strMeal, strMealThumb, idMeal } = food;
  return (
    <div className="w-full p-5">
      <img className="w-full ]" src={strMealThumb} alt="" />
      <h3 className="font-semibold text-xl my-2">{strMeal}</h3>
      <Link to={`/food/${idMeal}`}>
        <button className="btn btn-warning">Details</button>
      </Link>
    </div>
  );
};

export default Food;
