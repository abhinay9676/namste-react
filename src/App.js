import React, { lazy ,Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
// import Grocery from "./components/Grocery";




const Grocery = lazy(()=> import("./components/Grocery"));











const AppLayout =()=>{
   return <div className="App">
      <Header/>
      <Outlet/>
    </div>
}

const appRouter = createBrowserRouter([
   {
      path:"/",
      element: <AppLayout/>,
      children:[
         {
            path: "/",
            element:<Body/>
         },
         {
            path:"/about",
            element:<About/>
         },
         {
            path:"/contact",
            element:<Contact />
         },
         {
            path:"/grocery",
            element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
         },
         {
            path: "/restaurants/:id",
            element: <RestaurantMenu />
         },
      ],
      errorElement: <Error />
   },
   
])



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);