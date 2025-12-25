import type { ComponentType } from "react";

export interface ISidebar {
  title: string;
  items: {
    url: string;
    title: string;
    component: ComponentType;
  }[];
}
