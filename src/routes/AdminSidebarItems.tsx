import AllAgents from "@/pages/Admin/AllAgents";
import AllTransition from "@/pages/Admin/AllTransition";
import AllUsers from "@/pages/Admin/AllUsers";
import Analytics from "@/pages/Admin/Analytics";
import Profile from "@/pages/Admin/Profile";



import type { ISidebar } from "@/types";

export const adminSidebarItems :ISidebar[] =[
    {
      title: "Dashboard",
      items: [
         {
          title: "Profile ",
          url:"/admin/profile",
          component:Profile
        },
        {
          title: "Analytics ",
          url:"/admin/analytics",
          component: Analytics  
        },
        {
          title: "All User ",
          url:"/admin/users",
          component: AllUsers  
        },
        {
          title: "All Transition ",
          url:"/admin/transition",
          component: AllTransition 
        },
        {
          title: "All Agents ",
          url:"/admin/agents",
          component: AllAgents 
        },
       
        
      ],
     
    },
    
  ]