import CardWidget from "./CardWidget"
import { NavLink, Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <NavLink to="/">
            <h2>Ecommerce</h2>
          </NavLink>
          <NavLink to="/categoria/zapatillas">
            Zapatillas
          </NavLink>
          <NavLink to="/categoria/zapatos">
            Zapatos
          </NavLink>
          <NavLink to="/categoria/sandalias">
            Sandalias
          </NavLink>
        </div>
        <div className="nav-right">
          <CardWidget />
        </div>
      </nav>
    </>
  )
}

export default Navbar