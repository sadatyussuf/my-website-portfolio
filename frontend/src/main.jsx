import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ErrorPage from "./pages/Error"
import AboutPage from "./pages/About"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App /> ,
    errorElement: <ErrorPage /> ,
//     children: [
// {
//     path: "about/",
//     element: <AboutPage />,
//   },
//     ]
  },

  {
    path: "about/",
    element: <AboutPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>,
)
