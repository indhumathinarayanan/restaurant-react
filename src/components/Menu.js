import React from 'react';

function Menu() {
  const menuItems = [
    { name: 'Pizza', price: '₹350', image: '/img/menu/pizza.jpg' },
    { name: 'Chicken Biryani', price: '₹500', image: '/img/menu/biriyani.jpg' },
    { name: 'Spaghetti', price: '₹220', image: '/img/menu/spaghetti.jpg' },
    { name: 'Chocolate Cake', price: '₹150', image: '/img/menu/cake.jpg' },
    { name: 'Fish', price: '₹180', image: '/img/menu/fish.jpg' },
    { name: 'Fried Chicken', price: '₹300', image: '/img/menu/fried chicken.jpg' },
    { name: 'Ice Cream', price: '₹120', image: '/img/menu/ice cream.jpg' },
    { name: 'Grilled Chicken', price: '₹150', image: '/img/menu/grilled chicken.jpg' },
    { name: 'Salad', price: '₹220', image: '/img/menu/salad.jpg' },
    { name: 'Potato Wedges', price: '₹150', image: '/img/menu/sweet potato wedges.jpg' },
    { name: 'Burger', price: '₹140', image: '/img/menu/burger.jpg' },
    { name: 'Pancake', price: '₹240', image: '/img/menu/pancake.jpg' }
  ];

  return (
    <section id="menu">
      <h1><b>Our Special Menu 🍽</b></h1>
      <br />
      <div className="menu-cards">
        {menuItems.map((item, index) => (
          <div key={index} className="card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
      <br /><br /><br />
    </section>
  );
}

export default Menu;