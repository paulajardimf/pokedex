import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import PokedexPage from "../pages/PokedexPage.jsx/PokedexPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/pokedex/:name" element={<PokemonPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
