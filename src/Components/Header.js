import { Link } from "react-router-dom"
import { useState } from 'react';
// Firebase Import

const Header = (props) => {

  const [ open, setOpen ] = useState(false);

  // // Login dropdown
  // document.addEventListener('click', (e) => {
  //   const isDropdownbutton = e.target.matches('[data-dropdown-button]');
  //   if (!isDropdownbutton && e.target.closest('[data-dropdown]') != null) return;

  //   let currentDropdown;
  //   if (isDropdownbutton) {
  //     currentDropdown = e.target.closest('[data-dropdown]');
  //     currentDropdown.classList.toggle('active');
  //   };
    
  //   document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
  //     if (dropdown === currentDropdown) return;
  //     dropdown.classList.remove('active');
  //   })
  // })

  return (
    <header>
      <div className="header--logo">
        <Link to="/"><img src="https://i.imgur.com/wfQyPeZ.png" alt="logo" /></Link>
      </div>
      <div className="header--cart-user">
        <Link to="/cart"><img src="https://i.imgur.com/cxLq5Z8.png" alt="cart" /></Link>
        <div className="header--user-dropdown" data-dropdown>
          <button className="header--dropdown-link" onClick={() => setOpen(!open)} data-dropdown-button><img src="https://i.imgur.com/0gSbNQ7.png" alt="user" /></button>
          {open && props.children}
        </div>
      </div>
      <div className="header--hr">
      </div>
    </header>
  );
};

export default Header;