import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="bg-woodsmoke w-full min-h-screen">
      <Outlet />
    </div>
  );
};
