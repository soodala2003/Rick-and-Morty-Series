import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Character from "./pages/Character";
import Location from "./pages/Location";
import Episode from "./pages/Episode";
import CharacterDetail from "./pages/CharacterDetail";
import LocationDetail from "./pages/LocationDetail";
import EpisodeDetail from "./pages/EpisodeDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route exact path="/character" element={<Character />} /> 
        <Route exact path="/location" element={<Location />} /> 
        <Route exact path="/episode" element={<Episode />} /> 
        <Route exact path="/character/:id" element={<CharacterDetail />} />
        <Route exact path="/location/:id" element={<LocationDetail />} />
        <Route exact path="/episode/:id" element={<EpisodeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
