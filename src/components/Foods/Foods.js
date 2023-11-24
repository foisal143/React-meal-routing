import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from '../Food/Food';

const Foods = () => {
  const food = useLoaderData();
  const foods = food.meals;
  console.log(foods);
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center">My All Foods here</h2>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-5">
        {foods && foods.map(food => <Food food={food}></Food>)}
      </div>
    </div>
  );
};

export default Foods;
