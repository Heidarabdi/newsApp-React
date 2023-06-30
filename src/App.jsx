import React from 'react';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Technology from './pages/Technology';
import Sports from './pages/Sports';
import Error404 from './pages/Error404';
import Search from './pages/Search';
import Business from './pages/Business';
import Entertainment from './pages/Entertainment';
import Science from './pages/Science';
import NewsDetail from './pages/NewsDetail';

import './index.css';
import Navbar from './components/Navbar';
function App() {
  return (
      <div className=''>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Technology" element={<Technology />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/business" element={<Business />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/science" element={<Science />} />
          <Route path="/search" element={<Search />} />
          <Route path="/news/:url" element={<NewsDetail />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
