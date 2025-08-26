import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import PokemonLogo from "../assets/img/pokemon-logo.png";
import BulbaRunner from "./BulbaRunner";

const Header = () => {
  return (
    <header>
      <Navbar className="custom-navbar">
        <NavbarBrand>
          <NavLink
            to="/"
            className="d-flex align-items-center text-decoration-none"
          >
            <img src={PokemonLogo} alt="Pokemon Logo" className="navbar-logo" />
          </NavLink>
        </NavbarBrand>
        <div>
          <BulbaRunner />

          <Nav className="header-content" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/">
              <i className='fa fa-house fa-lg' />
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/deck-building">
              <i className='fa fa-clipboard-check fa-lg' />
                Deck Building
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/wishlist">
              <i className='fa fa-heart fa-lg' />
                Wishlist
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/about">
              <i className='fa fa-circle-info fa-lg' />
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contact">
                <i className='fa fa-address-card fa-lg' />
                Contact Us
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
