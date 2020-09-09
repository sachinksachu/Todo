import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

  import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">TODO</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>

          <Nav className="mr-auto" navbar>

            <NavItem className="m-1">
              <NavLink to="/login">Login</NavLink>
              
            </NavItem>

            <NavItem className="m-1">
              <NavLink to="/todo">Todo</NavLink>
            </NavItem>
            
            <NavItem className="m-1">
              <NavLink to="/cake">Cake</NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
    )
}
