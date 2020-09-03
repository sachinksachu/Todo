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
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>

          <Nav className="mr-auto" navbar>

            <NavItem>
              <NavLink to="/login">Login</NavLink>
              
            </NavItem>

            <NavItem>
              <NavLink to="/todo">Todo</NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink to="/cake">Cake</NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
    )
}
