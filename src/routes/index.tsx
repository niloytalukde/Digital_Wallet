import { createBrowserRouter } from "react-router";
import App from "../App";
import About from "../pages/Public/About";
import Home from "@/pages/Public/Home";
import SignIn from "@/pages/Public/SignIn";
import Register from "@/pages/Public/Register";
import FAQ from "@/pages/Public/Faq";
import Contact from "@/pages/Public/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "faq",
        Component: FAQ,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },

  {
    Component: SignIn,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
]);
