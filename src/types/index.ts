import type { ComponentType } from "react";

export interface ISidebar {
  title: string;
  items: {
    url: string;
    title: string;
    component: ComponentType;
  }[];
}

export type  TRole= "admin"|"user" |"agent"


export interface IUser {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: "user" | "admin" | "agent";
  isApproved: "pending" | "approved" | "rejected";
  password: string;
  status:"active" | "blocked" | "unblocked";
  createdAt: string;
  updatedAt: string;
  __v: number;
}
