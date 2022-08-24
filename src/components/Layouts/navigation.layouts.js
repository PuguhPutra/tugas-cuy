import { Navbar, Container, Nav, } from "react-bootstrap"
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/">Tugas Cuy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto justify-content-end">
                        <NavLink 
                        to="/albums"
                        style={({ isActive }) => ({
                            color: isActive ? "white" : "#6c757d",
                            textDecoration: isActive ? "none" : "none",
                            padding: "3px"
                        })}
                        >
                            Album
                        </NavLink>
                        <NavLink 
                        to="/posts"
                        style={({ isActive })=> ({
                            color: isActive ? "white" : "#6c757d",
                            textDecoration: isActive ? "none" : "none",
                            padding: "3px"
                        })}
                        >
                            Posting
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navigation;