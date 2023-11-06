import { lazy } from "react";
import Home from "../../frontend/Home";
import Buy from "../../frontend/Buy";
import Sell from "../../frontend/Sell";
import Contact from "../../frontend/Contact";
import About from "../../frontend/About";

// const Home = lazy(() => import("../../frontend/Home"));
// const Sell = lazy(() => import("../../frontend/Sell"));
// const Buy = lazy(() => import("../../frontend/Buy"));
// const Contact = lazy(() =>
//   import("../../frontend/Contact")
// );
// const About = lazy(() => import("../../frontend/About"));

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    label: "Home",
    path: "",
    addRoute: true,
    component: <Home />,
    showInMenu: false,

  },
  {
    label: "Buy",
    path: "buy",
    addRoute: true,
    showInMenu: true,
    component: <Buy />,

  },
  {
    label: "Sell",
    path: "sell",
    addRoute: true,
    showInMenu: true,
    component: <Sell />,

  },
  {
    label: "Contact",
    path: "contact",
    addRoute: true,
    showInMenu: false,
    component: <Contact />,

  },
  {
    label: "About",
    path: "about",
    addRoute: false,
    showInMenu: false,
    component: <About />,

  },
];
