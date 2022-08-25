import React, { useState } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLogo,
  CloseBars,
  NavMenuResp,
} from "./NavbarElements";
import Logo from "./Logo.JPG";

const Navbar = () => {
  const [toggleBars, setToggleBars] = useState(true);

  return (
    <>
      <Nav>
        <NavLink to="/">
          <NavLogo src={Logo}></NavLogo>
        </NavLink>
        {toggleBars ? (
          <Bars onClick={() => setToggleBars(!toggleBars)} />
        ) : (
          <CloseBars onClick={() => setToggleBars(!toggleBars)} />
        )}
        {toggleBars ? (
          ""
        ) : (
          <NavMenuResp>
            <NavLink to="/ingresar">Ingresar</NavLink>
            <NavLink to="/nosotros">Nosotros</NavLink>
            <NavLink to="/contacto">Contáctanos</NavLink>
            <NavLink to="/registrate">Registrate</NavLink>
          </NavMenuResp>
        )}
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
