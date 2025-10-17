import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h3>Address</h3>
          <p>56, French Street<br />Chennai, Tamil Nadu<br />India - 600033</p>
          <p>Email: indhuindhu3007@gmail.com</p>
          <p>Phone No: 98765444</p>
        </div>
        
        <div className="footer-column">
          <h3>Follow Us</h3>
          <p>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a><br />
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a><br />
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </p>
        </div>
        
        <div className="footer-column">
          <h3>Legal Policy</h3>
          <p>
            <a href="#privacy">Privacy Policy</a><br />
            <a href="#terms">Terms & Conditions</a><br />
            <a href="#refund">Refund Policy</a><br />
            <a href="#cookie">Cookie Policy</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <b>© 2025 Your Restaurant. || All rights reserved.</b>
      </div>
    </footer>
  );
}

export default Footer;