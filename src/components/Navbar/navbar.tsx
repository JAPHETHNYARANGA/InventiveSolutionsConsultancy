import { useState } from 'react';
import './navbar.scss';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`container-fluid ${isOpen ? 'open' : ''}`}>
        <i className="fa fa-bars fa-2x" aria-hidden="true" onClick={handleToggleNavbar}></i>
        <div className={`navbar-top ${isOpen ? 'open' : ''}`}>
          <div className="left">
            <p>Inventive Solutions Consultancy</p>
          </div>
          <div className="right">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
