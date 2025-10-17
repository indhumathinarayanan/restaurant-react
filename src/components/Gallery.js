import React from 'react';

function Gallery() {
  const galleryImages = [
    { src: '/img/gallery/gallery-1.jpg', alt: 'Chef cooking' },
    { src: '/img/gallery/gallery-2.jpg', alt: 'Table setting' },
    { src: '/img/gallery/gallery-3.jpg', alt: 'Food serving' },
    { src: '/img/gallery/gallery-4.jpg', alt: 'Restaurant interior' },
    { src: '/img/gallery/gallery-5.jpg', alt: 'Guest enjoying food' },
    { src: '/img/gallery/gallery-6.jpg', alt: 'Guest enjoying food' },
    { src: '/img/gallery/gallery-7.jpg', alt: 'Guest enjoying food' },
    { src: '/img/gallery/gallery-8.jpg', alt: 'Guest enjoying food' },
    { src: '/img/gallery/gallery-9.jpg', alt: 'Guest enjoying food' }
  ];

 return (
  <section id="gallery">
    <div style={{ paddingTop: '60px' }}>
      <h1><b>Our Memorable Memories 📸</b></h1>
      <br /><br />
      <div className="gallery-container">
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  </section>
);
}

export default Gallery;