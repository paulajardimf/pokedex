import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import PokedexPage from "../pages/PokedexPage/PokedexPage"
import DetailPage from "../pages/DetailPage/DetailPage"


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/detalhes/:name" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
