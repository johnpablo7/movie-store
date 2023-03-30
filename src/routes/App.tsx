import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";
/* Store */
import { Home } from "../components/pages/store/Home";
import { Store } from "../components/pages/store/Store";
import { Library } from "../components/pages/store/Library";
import { Friends } from "../components/pages/store/Friends";
import { Live } from "../components/pages/store/Live";
import { NotFound } from "../components/pages/NotFound";
import { Downloads } from "../components/pages/store/Downloads";
import { Settings } from "../components/pages/store/Settings";
import { Perfil } from "../components/pages/store/Perfil";
/* Header */
import { Discover } from "../components/pages/header/Discover";
import { Browse } from "../components/pages/header/Browse";
import { Wishlist } from "../components/pages/header/Wishlist";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          {/* Store */}
          <Route path="" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/library" element={<Library />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/live" element={<Live />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/perfil" element={<Perfil />} />
          {/* Header */}
          <Route path="/discover" element={<Discover />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/wishlist" element={<Wishlist />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
