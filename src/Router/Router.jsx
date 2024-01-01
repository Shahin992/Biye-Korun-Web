import React from 'react';
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Home from '../Component/Home/Home';
import Blogs from '../Component/Blogs/Blogs';
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>
    },
    {
      path: "/Blogs",
      element: <Blogs></Blogs>
    }
  ]);



export default router;