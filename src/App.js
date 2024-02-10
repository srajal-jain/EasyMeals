import React, { useEffect, useState } from "react";
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { useContext } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {

const [userName, setUserName] = useState();

useEffect(()=>{
  const data = {
    name : "Srajal Jain"
  }
  setUserName(data.name);
}, [])

  return (
    <Provider store = {appStore}>
      <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const Grocery = lazy(()=> import ("./components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/grocery",
        element: 
        <Suspense fallback = {<h1>Loading.....</h1>}>
          <Grocery/>
        </Suspense>
      },
      {
        path: "/cart",
        element:<Cart/>
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <Error/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< RouterProvider router = {appRouter} />);
