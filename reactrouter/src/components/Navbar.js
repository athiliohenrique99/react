import "./Navbar.css";

import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Homo</Link>
        <Link to="/about">Sobre</Link>
    </nav>
  )
}

export default Navbar