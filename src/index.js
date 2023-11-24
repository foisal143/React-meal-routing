import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Homepage from './components/Homepage/Homepage';
import About from './components/About/About';
import Foods from './components/Foods/Foods';
import Footer from './components/Footer/Footer';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Homepage></Homepage>,
      },
      {
        path: 'about',
        element: <About></About>,
      },
      {
        path: 'foods',
        element: <Foods></Foods>,
        loader: () =>
          fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish'),
      },
      {
        path: 'cocktails',
        element: <p>this is cocktails </p>,
      },
      {
        path: 'blog',
        element: <p>this is blog </p>,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
