import React, { useState, useEffect } from 'react';

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      image: '/img/carousel/hero-slider-1.jpg',
      title: 'Delicious Meals',
      description: 'Experience the taste of tradition'
    },
    {
      image: '/img/carousel/hero-slider-2.jpg',
      title: 'Cozy Ambience',
      description: 'Dine in Comfort and Style'
    },
    {
      image: '/img/carousel/hero-slider-3.jpg',
      title: 'Expert Chefs',
      description: 'Crafting flavor with passion'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  return (
    <section id="home">
      <div className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
              <img src={slide.image} className="d-block w-100" alt={slide.title} />
              <div className="carousel-caption d-none d-md-block">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" onClick={goToPrevious}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" onClick={goToNext}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br />
    </section>
  );
}

export default Home;