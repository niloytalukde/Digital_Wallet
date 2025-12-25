
import MyTransaction from "@/pages/User/MyTransaction";
import Profile from "@/pages/User/Profile";
import SendMoney from "@/pages/User/SendMoney";
import WithdrawMoney from "@/pages/User/WithdrawMoney";

import type { ISidebar } from "@/types";

export const userSidebarItems :ISidebar[] =[
    {
      title: "Dashboard",
      items: [
        {
          title: "Profile",
          url:"/user/profile",
          component: Profile
        },
        {
          title: "Send Money",
          url:"/user/send-money",
          component: SendMoney
        },
         {
          title:  " Withdraw Money",
          url:"/user/withdraw-money",
          component: WithdrawMoney 
        },
         {
          title:  "MyTransaction",
          url:"/user/my-transaction",
          component: MyTransaction
        },
       
      ],
     
    },
    
  ]