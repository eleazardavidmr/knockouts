import React from "react";
import * as ReactDOM from "react-dom/client";
import {App} from "./App";
import {About } from './components/About'
import { Menu } from './components/Menu'
import { Contact } from './components/Contact'
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router= createBrowserRouter([
{
  path: "/",
  element: <App />
},
{
  path: '/about',
  element: <About />
},
{
  path: '/menu',
  element: <Menu />
},
{
  path: '/contact',
  element: <Contact />
}
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
  </>
);
