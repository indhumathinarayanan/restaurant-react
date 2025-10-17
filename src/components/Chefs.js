import React from 'react';

function Chefs() {
  const chefs = [
    {
      name: 'Jeremy White',
      specialty: 'Arabian Cuisine Expert',
      image: '/img/chefs/jeremy white.jpg'
    },
    {
      name: 'Howard Holmes',
      specialty: 'Italian Specialist',
      image: '/img/chefs/howard holmes.jpg'
    },
    {
      name: 'Richard Nauz',
      specialty: 'French Cuisine',
      image: '/img/chefs/richard nauz.jpg'
    }
  ];

  return (
    <section id="chefs">
      <div style={{ paddingTop: '50px' }}>
        <h1><b>Our Experienced Chefs 👨‍🍳</b></h1>
        <br /><br /><br />
        <div className="chefs-cards">
          {chefs.map((chef, index) => (
            <div key={index} className="card">
              <img src={chef.image} alt={chef.name} />
              <h3>{chef.name}</h3>
              <p>{chef.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Chefs;