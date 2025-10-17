import React from 'react';

function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <h1 className="logo">SpiceHub🍴</h1>
      <nav>
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
        <a href="#menu" onClick={(e) => { e.preventDefault(); scrollToSection('menu'); }}>Menu</a>
        <a href="#chefs" onClick={(e) => { e.preventDefault(); scrollToSection('chefs'); }}>Chefs</a>
        <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>Gallery</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;