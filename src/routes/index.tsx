import { createBrowserRouter } from "react-router";
import App from "../App";
import About from "../pages/Public/About";
import Home from "@/pages/Public/Home";
import SignIn from "@/pages/Public/SignIn";
import Register from "@/pages/Public/Register";
import FAQ from "@/pages/Public/Faq";
import Contact from "@/pages/Public/ContactUs";
import DashboardLayout from "@/components/Layout/CommonLayout/DashboardLayout";
import { generateSidebarRoutes } from "@/Utils/generateSidebarRoutes";
import { adminSidebarItems } from "./AdminSidebarItems";
import { withAuth } from "@/Utils/withAuth";
import Unauthorize from "@/pages/Public/Unauthorize";
import { Role } from "@/Conastance";
import { userSidebarItems } from "./UserSidebarItems";
import { agentSidebarItems } from "./AgentSidebarItems";

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
        Component: FAQ
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
  // Admin LAyout
  {
    Component: withAuth(DashboardLayout,Role.admin),
    path: "/admin",
    children: [...generateSidebarRoutes(adminSidebarItems)],
  },

  // User Layout
  {
    Component: withAuth(DashboardLayout,Role.user),
    path: "/user",
    children: [...generateSidebarRoutes(userSidebarItems)],
  },
  

{
    Component: withAuth(DashboardLayout,Role.agent),
    path: "/agent",
    children: [...generateSidebarRoutes(agentSidebarItems)],
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
  {
    Component: Unauthorize,
    path: "/unauthorize",
  },
]);
