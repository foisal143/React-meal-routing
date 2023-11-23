import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Home = () => {
  const navigation = useNavigation();
  return (
    <>
      <Navbar></Navbar>
      <div className="my-12">
        {navigation.state === 'loading' ? (
          <span className="loading loading-infinity loading-lg"></span>
        ) : (
          ''
        )}
      </div>
      <Footer></Footer>
      <Outlet></Outlet>
    </>
  );
};

export default Home;
