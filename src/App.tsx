import React from 'react';
import {Routes, Route} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {FavoritesPage} from "./pages/FavoritesPage";
import {Navigation} from "./components/Navigation";
import './index.css';

function App() {
  return (
      <>
          <Navigation></Navigation>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/favorites" element={<FavoritesPage/>}/>
          </Routes>
      </>
  );
}

export default App;
