import { Link } from "react-router-dom"
import SignUpLogin from "./SignUpLogin";
import { useState } from 'react';

const Header = (props) => {

  const [ open, setOpen ] = useState(false);

  // Login dropdown
  document.addEventListener('click', (e) => {
    const isDropdownbutton = e.target.matches('[data-dropdown-button]');
    if (!isDropdownbutton && e.target.closest('[data-dropdown]') != null) return;

    let currentDropdown;
    if (isDropdownbutton) {
      currentDropdown = e.target.closest('[data-dropdown]');
      currentDropdown.classList.toggle('active');
    };
    
    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
      if (dropdown === currentDropdown) return;
      dropdown.classList.remove('active');
    })
  })

  return (
    <header>
      <div className="header--logo">
        <Link to="/"><img src="https://i.imgur.com/8IxHRpV.png" alt="logo" /></Link>
      </div>
      <div className="header--cart-user">
        <Link to="#"><img src="https://i.imgur.com/TVVrCxx.png" alt="cart" /></Link>
        {/* Figure out how to add data attributes to JSX and link them to the login dropdown logic */}
        <div className="header--user-dropdown">
          <Link to="#" onClick={() => setOpen(!open)}><img src="https://i.imgur.com/IZl03Cj.png" alt="user" /></Link>
          {open && props.children}
        </div>
      </div>
      <div className="header--hr">
      </div>
    </header>
  );
};

export default Header;