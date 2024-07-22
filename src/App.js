//import './App.css';
// import Header from './vinculo/jsfiles/headerDesktop';

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Smallboys from './vinculo/jsfiles/Smallboys';
// import Smallgirls from './vinculo/jsfiles/Smallgirls';
import { WishlistProvider } from './vinculo/jsfiles/wishcontext';

const App = () => {
    return (
        <Router>
            <WishlistProvider>
                <Routes>
                    <Route path="/*" element={<Smallboys />} />
                    {/* <Route path="/*" element={<Smallgirls />} /> */}
                </Routes>
            </WishlistProvider>
        </Router>
    );
};

export default App;
