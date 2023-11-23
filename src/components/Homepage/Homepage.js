import React from 'react';
import Carrosol from '../Carrosol/Carrosol';

const Homepage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-12">
        Welcome to my food shop
      </h1>
      <div className="w-3/4 mx-auto h-[70vh]">
        <Carrosol></Carrosol>
      </div>
    </div>
  );
};

export default Homepage;
