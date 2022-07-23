import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
    /*{/*<NavLink to='/about' activeStyle>
    About
    <NavBtnLink /*to='/signin'>Sign In</NavBtnLink>
  </NavLink>
  <NavLink /*to='/services' activeStyle*/
    /*Services
  </NavLink>
  <NavLink /*to='/contact-us' activeStyle*/
   /* Contact Us
  </NavLink>
  <NavLink /* to='/sign-up' activeStyle*/
   /* Sign Up
  </NavLink>
  {/* Second Nav *//*}
  {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> *//*}*/
  return (
    <>
      <Nav>
        <NavLink to='/'>
          
        </NavLink>
        <Bars />
        <NavMenu>          
        </NavMenu>
        <NavBtn>
          
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;