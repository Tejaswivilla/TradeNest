import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF" }}>
      <div className="container py-1 d-flex align-items-center">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img 
            src="images/newlogo.png" 
            alt="TradeNest Logo" 
            style={{ height: "30px", width: "auto" }} 
          />
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
            <li className="nav-item">
              <Link className="nav-link" to="/signup" style={{ fontSize: "15px", fontWeight: "500", color: "#333" }}>Signup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ fontSize: "15px", fontWeight: "500", color: "#333" }}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product" style={{ fontSize: "15px", fontWeight: "500", color: "#333" }}>Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to="/pricing" style={{ fontSize: "15px", fontWeight: "500", color: "#333" }}>Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support" style={{ fontSize: "15px", fontWeight: "500", color: "#333" }}>Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
