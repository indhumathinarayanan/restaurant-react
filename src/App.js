import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Chefs from './components/Chefs';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Menu />
      <Chefs />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;