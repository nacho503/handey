import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLogo,
} from "./NavbarElements";
import Logo from "./Logo.JPG";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <NavLogo src={Logo}></NavLogo>
          {/* <img src={Logo} alt="Logo de la app Handey"></img> */}
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/nosotros">Nosotros</NavLink>
          <NavLink to="/contacto">Contáctanos</NavLink>
          <NavLink to="/registrate">Registrate</NavLink>
          <NavBtn>
            <NavBtnLink to="/ingresar">Ingresar</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
