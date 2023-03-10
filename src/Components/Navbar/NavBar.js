import React, { useContext } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { AuthProvider } from '../firebase/Context';



const NavBar = () => {

    const { user, logOut } = useContext(AuthProvider);
    const email = user?.email


    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    }


    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    {/* <Navbar.Brand href="/">{email}</Navbar.Brand> */}
                    <Navbar.Brand href="/">Demo-Project</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="addtask">Add Task</Nav.Link>
                            <Nav.Link href="mytask">My Task</Nav.Link>
                            <Nav.Link href="completedtask">Completed Task</Nav.Link>

                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="login">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>

                        <Nav>
                            {
                                email ?
                                    <>
                                        <Nav.Link eventKey={2} onClick={handleLogOut}>
                                            Log Out
                                        </Nav.Link>
                                    </>
                                    :
                                    <>
                                        <Nav.Link href="login">Login</Nav.Link>
                                    </>
                            }



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default NavBar;