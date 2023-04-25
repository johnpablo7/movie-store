import { Outlet } from "react-router-dom";
import { Footer } from "../components/shared/Footer";

export const AuthLayout = () => {
  return (
    <div className="w-full min-h-screen">
      <Outlet />
      <Footer />
    </div>
  );
};
