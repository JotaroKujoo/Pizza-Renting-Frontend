import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Header.scss';
import { bringPizzaById } from '../../services/apicalls';
import Shopping from '../Shopping/Shopping';
import { Card, Row, Col } from 'react-bootstrap';




function Header() {
  let userName = sessionStorage.getItem("SAVEUSERNAME")
  sessionStorage.setItem("SELECTEDPIZZA", "")
  let navigate = useNavigate()
  const [show, setShow] = useState(false);
  const [content, setContent] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let logged = sessionStorage.getItem("SAVEUSERMAIL")

  const logOut = () => {
    sessionStorage.removeItem("SAVEUSERNAME")
    sessionStorage.removeItem("SAVEJWT")
    sessionStorage.removeItem("SAVEUSERMAIL")
    sessionStorage.removeItem("SAVEUSERROL")
    sessionStorage.removeItem("SELECTEDPIZZA")
    sessionStorage.removeItem("SELECTEDPIZZERIA")
    navigate("/")
  }

  const deletePizzaInCarrito = (pizza) => {
    let shopping = JSON.parse(sessionStorage.getItem("SELECTEDPIZZA"))
    const index = shopping.indexOf(pizza)
    const shoppingRemoved = shopping.splice(index, 1)
    setContent(shopping)
    sessionStorage.setItem("SELECTEDPIZZA", JSON.stringify(shopping))
    return shoppingRemoved
  }

  if (logged) {
    let carrito = sessionStorage.getItem("SELECTEDPIZZA")
    if (carrito) {
      
      let carritoArr = JSON.parse(carrito)
      return (
        <Navbar className='navbarDesign ' bg="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/" className='text-dark'>Pizzer.IO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            

              <Form className="d-flex align-items-center">
                <div onClick={() => { navigate("/userorders") }} className="">
                  {userName}
                </div>
                <Nav className="me-auto">
                  <NavDropdown title="" className='text-dark' id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.2">
                      Pedidos
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                
                <div className="ms-2">
                  <Button variant="secondary" onClick={handleShow} className="me-2">
                    Carrito                                                                 {/* BOTÓN DEL CARRITO */}
                  </Button>
                  <Button variant='danger' onClick={() => { logOut() }}>
                    Log out
                  </Button>
                  <Offcanvas show={show} onHide={handleClose} placement={"end"} >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>Carrito</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      {
                        carritoArr.map((pizza) => {
                          return (
                            <Card className='mb-2 d-flex justify-content-center   '>
                              <Card.Header><div>{pizza.name} x{pizza.quantity}</div></Card.Header>
                              <Card.Body>

                                <div onClick={() => { deletePizzaInCarrito(pizza) }} className="btn btn-secondary justify-content-end"> Delete</div>
                              </Card.Body>
                            </Card>
                          )
                        })
                      }
                      <Button href='/order'>
                        Order
                      </Button>
                    </Offcanvas.Body>
                  </Offcanvas>
                </div>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    } else {
      return (
        <Navbar className='navbarDesign ' bg="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/" className='text-dark'>Pizzer.IO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">

              </Nav>
              <Form className="d-flex align-items-center">
                <div  className="">
                  {userName}
                </div>
                <Nav className="me-auto">
                  <NavDropdown title="" className='text-dark' id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={() => { navigate("/userorders") }}>
                      Pedidos
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <div className="ms-2">
                  <Button variant="secondary" onClick={handleShow} className="me-2">
                    Carrito                                                                 {/* BOTÓN DEL CARRITO */}
                  </Button>
                  <Button variant='danger' onClick={() => { logOut() }}>
                    Log out
                  </Button>
                  <Offcanvas show={show} onHide={handleClose} placement={"end"} >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>Carrito</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      El carrito está vacío



                    </Offcanvas.Body>



                  </Offcanvas>
                </div>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );

    }
  } else {
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