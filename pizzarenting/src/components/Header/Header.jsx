import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Header.scss';




function Header() {
  let userName = sessionStorage.getItem("SAVEUSERNAME")
  let navigate = useNavigate()
  let logged = sessionStorage.getItem("SAVEUSERMAIL")
  if (logged) {
    return (
      <Navbar className='navbarDesign ' bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className='text-dark'>Pizzer.IO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className='text-dark'>Home</Nav.Link>
              <Nav.Link href="#link" className='text-dark'>Link</Nav.Link>
              <NavDropdown title="" className='text-dark' id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <div className="card">
                {userName}
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }else{
    return (
      <Navbar className='navbarDesign ' bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/" className='text-dark'>Pizzer.IO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
            </Nav>
            <Form className="d-flex">
              
            <Button href="/login" variant="outline-dark me-2">Iniciar sesión</Button>
              <Button href="/register" variant="outline-dark">Empezar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;