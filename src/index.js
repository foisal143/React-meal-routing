import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Homepage from './components/Homepage/Homepage';
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
        element: <p>this is about </p>,
      },
      {
        path: 'foods',
        element: <p>this is products </p>,
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
