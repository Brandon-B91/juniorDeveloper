
import PropTypes from "prop-types"
import React from "react"
// import React, { useEffect, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar fixed="top" light expand="sm">
        <div className="container">
        <NavbarBrand href="/">{siteTitle}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/team">Team</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/tags">Tags</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
          </Nav> 
        </Collapse>
        </div>
      </Navbar>
    </div>
  );
  }


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
