import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Policies from './pages/Policies';
import SearchResults from './pages/SearchResults';
import Login from './pages/Login';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/politicas" element={<Policies />} />
          <Route path="/busca" element={<SearchResults />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;