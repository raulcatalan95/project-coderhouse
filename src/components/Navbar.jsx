import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

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
          <CartWidget />
        </div>
      </nav>
    </>
  )
}

export default Navbar