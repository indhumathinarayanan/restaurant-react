import React from 'react';

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 style={{ fontSize: 'xx-large' }}>
              <br /><br />
              <b><center>Our Story</center></b>
            </h1>
            <br /><br />
            <p style={{ fontFamily: 'sans-serif', fontSize: 'x-large' }}>
              We've been serving delicious meals since 1995. Our mission is to
              bring authentic taste and a cozy experience to every customer.
              SpiceHub is a family-friendly restaurant serving authentic dishes since 2010.
              We bring traditional recipes with a modern touch, ensuring every bite is full of flavor.
              Always holding true to their motto "Excellent Food, Excellent Service," 
              they built a loyal clientele. So many people loved taking their friends and family
              to eat at Mi Ranchito over the next year, they quickly outgrew the original location 
              and opened up another restaurant. Treat yourself to the best Mexican food and customer service
              at any of our seven locations around the Kansas City metro and surrounding area.
            </p>
          </div>
          <div className="col-md-6" style={{ marginTop: '150px' }}>
            <img 
            
              style={{ height: '500px', width: '400px' }}
              src="/img/about/about.jpg" 
              className="img-fluid rounded" 
              alt="Restaurant" 
            />
          </div>
        </div>
      </div>
      <br />
    </section>
  );
}

export default About;