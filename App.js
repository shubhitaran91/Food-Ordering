import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./src/components/Error";
import AboutUs from "./src/components/AboutUs";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";
// import Grocery from "./src/components/Grocery";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart";

//Lazy loading for grocery
const Grocery = lazy(() => import("./src/components/Grocery"));

const AppLayout = () => {
  

  const [user, setUser] = React.useState()

  React.useEffect(()=>{
    const data ={
      name: "Shubhi Taran"
    }
    setUser(data.name)
  }, [])
  return (
    <Provider store={appStore}>
    <UserContext.Provider value ={{LoggedInUser: user, setUser}}>
    <div>
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/grocery",
        element: 
          <Suspense fallback={<h1>Loading......</h1>}>
            <Grocery />
          </Suspense>
        
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
