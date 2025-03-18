import React, { Suspense, lazy, useContext } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurentMenu from "./components/RestaurentMenu";
import UserContext from "./utils/UserContext";

const AppLayout = () => {
  return (
    <UserContext.Provider value={{loggedInUser: "Aditi"}}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const About = lazy(() => import("./components/About"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loadind...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurentMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
