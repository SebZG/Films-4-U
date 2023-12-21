import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';

import Home from './pages/Home';
import SearchResults from "./pages/SearchResults"
import MovieInfo from './pages/MovieInfo';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<SearchResults />}></Route>
          <Route path="/movies/:id" element={<MovieInfo />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
