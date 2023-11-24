import React from 'react';

const Food = ({ food }) => {
  console.log(food);
  const { strMeal, strMealThumb, idMeal } = food;
  return (
    <div className="w-full p-5">
      <img className="w-full ]" src={strMealThumb} alt="" />
      <h3 className="font-semibold text-xl my-2">{strMeal}</h3>
      <button className="btn btn-warning">Details</button>
    </div>
  );
};

export default Food;
