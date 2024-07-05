// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Smallboys from './vinculo/jsfiles/Smallboys';
import ViewDetails from './vinculo/jsfiles/viewdetails';
import Header from './vinculo/jsfiles/headerDesktop';
import Home from './vinculo/jsfiles/homepageDesktop';
import Footer from './vinculo/jsfiles/footerDesktop';
import Smallgirls from './vinculo/jsfiles/Smallgirls';
import WishlistPage from './vinculo/jsfiles/wishlist';
import Boys from './vinculo/jsfiles/boys';

function App() {
  return (
    <>
      <Header />
      <Home />



      <Router>
        <Routes>
          {/* <Route path="/" element={<Smallboys />} /> */}
          <Route path="/" element={<Boys />} />
          <Route path="/viewdetails" element={<ViewDetails />} />
          <Route path="/wishlist" element={<WishlistPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;