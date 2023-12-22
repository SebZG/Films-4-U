import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movies from "./pages/Movies"
import MovieInfo from './pages/MovieInfo';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:id" element={<MovieInfo />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
