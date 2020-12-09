import React from 'react';
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from "reactstrap";

function NavigationBar({count}) {
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Shopping Spree</NavbarBrand>
            <Nav>
            <NavItem>
                <NavLink href="/">Items {count}</NavLink>
            </NavItem>
            </Nav>
        </Navbar>
    );
}

export default NavigationBar;