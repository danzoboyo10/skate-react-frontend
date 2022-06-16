import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <Link to="/">Skate React</Link><br></br>
      <Link to="/skateboards">Skateboards</Link>
    </header>
  );
};

export default Header;