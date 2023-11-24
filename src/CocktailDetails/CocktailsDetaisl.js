import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const CocktailsDetaisl = () => {
  const drink = useLoaderData();
  const navigate = useNavigate();
  const handlerNavigate = () => {
    navigate(-1);
  };
  const {
    strInstructions,
    strDrinkThumb,
    strDrink,
    strCategory,
    strAlcoholic,
    idDrink,
  } = drink.drinks[0];
  return (
    <>
      <button
        onClick={handlerNavigate}
        className="bg-orange-500 text-white mx-5 px-6 rounded-md py-2"
      >
        Go Back
      </button>
      <div className="w-2/3 mb-10 h-[73vh] mx-auto">
        <h5 className="text-center my-5 font-semibold">Food NO: {idDrink}</h5>
        <img className="h-1/2 mx-auto" src={strDrinkThumb} alt="" />
        <div className="my-5 px-2">
          <h1 className="font-semibold text-2xl ">{strDrink}</h1>
          <p>
            <span className="font-semibold text-xl">Catagory: </span>
            {strCategory}
          </p>
          <p>
            <span className="font-semibold text-xl">{strAlcoholic}</span>
          </p>

          <p>
            <span className="font-semibold text-xl">Instractions: </span>
            {strInstructions}
          </p>
        </div>
      </div>
    </>
  );
};

export default CocktailsDetaisl;
