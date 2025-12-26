import { Role } from "@/Conastance";
import { adminSidebarItems } from "@/routes/AdminSidebarItems";
import { AgentSidebarItems } from "@/routes/AgentSidebarItems";
import { userSidebarItems } from "@/routes/UserSidebarItems";
export const getSidebar = (userRole: string) => {
  switch (userRole) {
    case Role.admin:
      return [...adminSidebarItems];
    case Role.user:
      return [...userSidebarItems];

    case Role.agent:
      return [...AgentSidebarItems];

    default:
      return [];
  }
};
