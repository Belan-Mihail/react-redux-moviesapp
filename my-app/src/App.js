import React from "react";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import "./App.scss";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/movie/:imdbID" element={<MovieDetail />} />
          <Route exact element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;


