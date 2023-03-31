import { Header } from "../components/shared/Header";
import { Main } from "../components/shared/Main";

export const AuthLayout = () => {
  return (
    <div className="bg-woodsmoke w-full min-h-screen">
      <Header />
      <Main />
    </div>
  );
};
