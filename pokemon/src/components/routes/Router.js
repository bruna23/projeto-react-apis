import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";

import Pokedex from "../pages/PokedexPage/PokedexPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/details/:name" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
