import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FoodDetails = () => {
  const food = useLoaderData();
  console.log(food.meals[0]);
  const { strMeal, strMealThumb, idMeal, strInstructions, strYoutube } =
    food.meals[0];
  const navigate = useNavigate();
  const handlerNavigate = () => {
    navigate(-1);
  };
  return (
    <>
      <button
        onClick={handlerNavigate}
        className="bg-orange-500 text-white mx-5 px-6 rounded-md py-2"
      >
        Go Back
      </button>
      <div className="w-2/3 mb-10 h-[73vh] mx-auto">
        <h5 className="text-center my-5 font-semibold">Food NO: {idMeal}</h5>
        <img className="h-1/2 mx-auto" src={strMealThumb} alt="" />
        <h1 className="font-semibold text-2xl ">{strMeal}</h1>
        <p>
          <span className="font-semibold text-xl">Instractions: </span>
          {strInstructions}
        </p>
        <p>
          <span className="font-semibold text-xl">Tutorial: </span>
          <a className="text-blue-500" href={strYoutube} target="_blank">
            {strYoutube}
          </a>
        </p>
      </div>
    </>
  );
};

export default FoodDetails;
