import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";
/* Views */
import { Home } from "../components/pages/views/Home";
import { Search } from "../components/pages/views/Search";
import { TvShows } from "../components/pages/views/TvShows";
import { TvShowPreview } from "../components/pages/views/TvShowPreview";
import { Movies } from "../components/pages/views/Movies";
import { MoviePreview } from "../components/pages/views/MoviePreview";
import { Category } from "../components/pages/views/Category";
import { Populate } from "../components/pages/views/Populate";
import { List } from "../components/pages/views/List";
import { Explore } from "../components/pages/views/Explore";
import { Perfil } from "../components/pages/views/Perfil";
import { NotFound } from "../components/pages/NotFound";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          {/* Views */}
          <Route path="" element={<Home />} />
          <Route path="/search" element={<Search />} />

          <Route path="/series" element={<TvShows />} />
          <Route path="/series/:serieId" element={<TvShowPreview />} />

          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MoviePreview />} />

          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="/populate" element={<Populate />} />
          <Route path="/my-list" element={<List />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/perfil" element={<Perfil />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
