import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <section className="emptyCol_1">&nbsp;</section>
      <section className="emptyCol_2">&nbsp;</section>
      <div className="header_icons">
        <Link to="/"><img src="https://i.imgur.com/8IxHRpV.png" alt="logo" /></Link>
      </div>
      <div className="header_user">
        <Link to="#"><img src="https://i.imgur.com/TVVrCxx.png" alt="cart" /></Link>
        <Link to="#"><img src="https://i.imgur.com/IZl03Cj.png" alt="user" /></Link>
      </div>
      <div className="header_hr">
      </div>
    </header>
  );
};

export default Header;