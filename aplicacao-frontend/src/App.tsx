import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CharactersList from "./components/CharactersList";
import StarChipDetail from "./components/StarChipDetail";
import ListWeapons from "./components/ListWeapons";
import PageStars from "./components/PageStars";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageStars />} />
        <Route path="/people" element={<CharactersList />} />
        <Route path="/starchips" element={<ListWeapons />} />
        <Route path="/starships/:id" element={<StarChipDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
