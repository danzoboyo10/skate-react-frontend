import { Link } from "react-router-dom"
import { useState } from 'react';
// Firebase Import
import { login, logout } from "../services/firebase";

const Header = (props) => {
  const photoStyles = {
    borderRadius: '50%',
    height: '2.5rem',
    margin: '0 1rem'
  }

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
      <ul>
        {
          props.user
          ? 
          (
            <>
            <li className="greeting-list-item">Welocme, {props.user.displayName} 
              <img src={props.user.photoURL}
              style={photoStyles}
             alt={props.user.displayName} /></li>
          <li onClick={logout}>Logout</li>
            </>
          )
          :
           <li onClick={login}>Login</li>
        }
      </ul>
      <div className="header--logo">
        <Link to="/"><img src="https://i.imgur.com/8IxHRpV.png" alt="logo" /></Link>
      </div>
      <div className="header--cart-user">
        <Link to="/cart"><img src="https://i.imgur.com/TVVrCxx.png" alt="cart" /></Link>
        <div className="header--user-dropdown" data-dropdown>
          <button className="header--dropdown-link" onClick={() => setOpen(!open)} data-dropdown-button><img src="https://i.imgur.com/IZl03Cj.png" alt="user" /></button>
          {open && props.children}
        </div>
      </div>
      <div className="header--hr">
      </div>
    </header>
  );
};

export default Header;