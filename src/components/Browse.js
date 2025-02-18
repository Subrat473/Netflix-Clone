import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import login from './login'
import Body from "./Body"; 




const Browse = () => {


    const appRouter = createBrowserRouter ([
        {
            path: "/",
            element: <login />
        },
        {
            path: "/browse",
            element: <Browse />,

        },
    ]);



  return (
    <div>
    <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;