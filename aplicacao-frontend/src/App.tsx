import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CharactersList from "./components/CharactersList";
import StarShipDetail from "./components/StarChipDetail"; // Verifique o nome do componente StarShipDetail
import ListWeapons from "./components/ListWeapons";
import PageStars from "./components/PageStars";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageStars />} />
        <Route path="/people" element={<CharactersList />} />
        <Route path="/starchips" element={<ListWeapons />} />
        <Route path="/starships" element={<StarShipDetail />} />
        <Route path="/starships/:id" element={<StarShipDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
