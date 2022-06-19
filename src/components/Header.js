import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <div className="header--logo">
        <Link to="/"><img src="https://i.imgur.com/8IxHRpV.png" alt="logo" /></Link>
      </div>
      <div className="header--cart-user">
        <Link to="#"><img src="https://i.imgur.com/TVVrCxx.png" alt="cart" /></Link>
        <Link to="#"><img src="https://i.imgur.com/IZl03Cj.png" alt="user" /></Link>
      </div>
      <div className="header--hr">
      </div>
    </header>
  );
};

export default Header;