import React from "react";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Country } from "./Pages/Country";
import { Contact } from "./Pages/Contact";
import { Error } from "./Pages/Error";
import { AppLayout } from "./Cmponents/Layout/AppLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement:<Error/>,
        children:[{
            path: "/",
            element: <Home />,
        }, {
            path: "about",
            element: <About />,
        }, {
            path: "Country",
            element: <Country />,
        }, {
            path: "Contact",
            element: <Contact />,
        },
        ]
    }
]);
function App2() {
  return <>
   <RouterProvider router={router}></RouterProvider>
    </>
}
export default App2;
