import { Header } from "../components/shared/Header";
import { Main } from "../components/shared/Main";
import { Sidebar } from "../components/shared/Sidebar";

export const AuthLayout = () => {
  return (
    <div className="bg-woodsmoke w-full min-h-screen">
      <Header />
      <Main />
      <Sidebar />
    </div>
  );
};
