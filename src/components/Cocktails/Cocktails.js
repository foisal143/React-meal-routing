import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cocktal from '../../Cocktail/Cocktal';

const Cocktails = () => {
  const cocktails = useLoaderData();
  console.log(cocktails.drinks);
  const allCocktails = cocktails.drinks;
  return (
    <div>
      <h2 className="font-bold text-2xl my-12 text-center">
        Our best drinks here
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {allCocktails.map(drink => (
          <Cocktal drink={drink} key={drink.idDrink}></Cocktal>
        ))}
      </div>
    </div>
  );
};

export default Cocktails;
