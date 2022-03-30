import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Header from './components/Header';
import PageNotFound from './components/PageNotFound';
import MovieDetail from './components/MovieDetail';
import Footer from './components/Footer';

import './components/app.css';
function App() {
    return( 
      <>
      <div className="app">
          <Router>
             <Header></Header>
             <div className="container">
              <Routes>
              <Route  path="/" element ={<Home /> } />
              <Route   path="/movie/:imdbID" element ={<MovieDetail />} />
              <Route  element = {<PageNotFound />} />
              </Routes>
              </div>
            <Footer />

          </Router>
          </div>
          </>
    )
}

export default App;