import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact">
      <h1><b>Contact Us</b></h1>
      <br /><br />
      <div className="contact-box">
        <div className="contact-form">
          <h1><b>Get in touch with us 24/7</b></h1>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name"
              placeholder="Name*" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
            <input 
              type="email" 
              name="email"
              placeholder="Email*" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
            <textarea 
              name="message"
              rows="4" 
              placeholder="Write Your Message*" 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;