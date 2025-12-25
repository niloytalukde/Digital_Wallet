import { createBrowserRouter } from "react-router";
import App from "../App";
import About from "../pages/Public/About";
import Home from "@/pages/Public/Home";
import SignIn from "@/pages/Public/SignIn";
import Register from "@/pages/Public/Register";
import FAQ from "@/pages/Public/Faq";
import Contact from "@/pages/Public/ContactUs";
import DashboardLayout from "@/components/Layout/CommonLayout/DashboardLayout";

import Profile from "@/pages/User/Profile";
import { generateSidebarRoutes } from "@/Utils/generateSidebarRoutes";
import { adminSidebarItems } from "./AdminSidebarItems";

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
  // Admin LAyout
  {
    Component: DashboardLayout,
    path: "/admin",
    children: [...generateSidebarRoutes(adminSidebarItems)],
  },

  // User Layout
  {
    Component: DashboardLayout,
    path: "/user",
    children: [
      {
        Component: Profile,
        path: "profile",
      },
    ],
  },

  // PUblic  
  {
    Component: SignIn,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
]);
