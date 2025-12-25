import type { ISidebar } from "@/types";

export const generateSidebarRoutes = (sidebarItems: ISidebar[]) =>{
return sidebarItems.flatMap((section) =>
    section.items.map((item) => ({
      path: item.url,
      Component: item.component,
    }))
  );
}