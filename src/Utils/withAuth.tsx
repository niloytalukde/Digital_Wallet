import { useGetMeQuery } from "@/redux/features/auth/authapi";
import type { ComponentType } from "react";
import { Navigate } from "react-router";

export const withAuth = (Component: ComponentType, role: string) => {
  return function AuthWrapper() {
    const { data, isLoading } = useGetMeQuery(undefined);
    console.log(data?.isApproved);
    if (
      !isLoading &&
      data?.role === "agent" &&
      data?.isApproved === "pending"
    ) {
      return <Navigate to="/approval"></Navigate>;
    }
    if (!isLoading && !data?.email) {
      return <Navigate to={"/login"}></Navigate>;
    }
    if (role && !isLoading && role != data?.role) {
      return <Navigate to="/unauthorize"></Navigate>;
    }

    return <Component />;
  };
};
