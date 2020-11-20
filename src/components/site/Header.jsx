import React from "react"
import{Navbar, NavbarBrand, Nav, NavItem, NavLink} from "reactstrap";

const Header =()=>{
    return(
        <header>
            <Navbar className="header">
                <NavbarBrand href="/">Jacob, January, and Laura's TwentyFour Hour Project</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="https://github.com/JacobMaz/twentyfour" target={"blank"}>Github</NavLink>
                        </NavItem>
                    </Nav>
            </Navbar>
        </header>
    );
};
export default Header;