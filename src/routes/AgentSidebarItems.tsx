
import CashIn from "@/pages/Agent/CashIn";
import CashOut from "@/pages/Agent/CashOut";
import MyTransaction from "@/pages/User/MyTransaction";
import Profile from "@/pages/User/Profile";
import type { ISidebar } from "@/types";

export const agentSidebarItems :ISidebar[] =[
    {
      title: "Dashboard",
      items: [
        {
          title: "Profile",
          url:"/agent/profile",
          component: Profile
        },
        {
          title: "Cash In",
          url:"/agent/cash-in",
          component: CashIn
        },
         {
          title:  "Cash Out",
          url:"/agent/cash-out",
          component: CashOut
        },
         {
          title:  "MyTransaction",
          url:"/agent/my-transaction",
          component: MyTransaction
        },
       
      ],
     
    },
    
  ]