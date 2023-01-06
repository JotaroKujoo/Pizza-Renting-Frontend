import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Header.scss';
const logged = false;


function Header() {
  if (logged) {
    return (
      <Navbar className='navbarDesign ' bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className='text-light'>Pizzer.IO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className='text-light'>Home</Nav.Link>
              <Nav.Link href="#link" className='text-light'>Link</Nav.Link>
              <NavDropdown title="" className='text-light' id="basic-nav-dropdown">
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
              
              <Button variant="outline-light">Iniciar sesión</Button>
              <Button variant="outline-light">Empezar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }else{
    return (
      <Navbar className='navbarDesign ' bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className='text-light'>Pizzer.IO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
            </Nav>
            <Form className="d-flex">
              
            <Button variant="outline-light me-2">Iniciar sesión</Button>
              <Button variant="outline-light">Empezar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;