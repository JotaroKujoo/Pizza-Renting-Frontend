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
import { Card } from 'react-bootstrap';




function Header() {
  let userName = sessionStorage.getItem("SAVEUSERNAME")
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
    navigate("/")
  }

  
    // useEffect(()=> {
    //   if (logged){
    //     let carrito = sessionStorage.getItem("SELECTEDPIZZA")
    //     if (carrito){
    //       let carritoObj = carrito.split(",")
    //       let carritoArr = Object.values(carritoObj)
    //       carritoArr.map((pizza) => {
    //         bringPizzaById(pizza)
    //           .then((res)=>{
    //             if (content.length === 0){
    //               let pizzaName = res.data.name
    //               console.log(content.length)
    //               setContent((prevState)=>[...prevState, pizzaName])
    //             }
    //           })
            
              
            
    //       })
    //     }
        
    //   }
    // },[content])
  
  console.log(content)

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
              <Nav className="me-auto">
                <Nav.Link href="/" className='text-dark'>Home</Nav.Link>
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
                <div className="ms-2">
                  <Button variant="secondary" onClick={handleShow} className="me-2">
                    Carrito                                                                 {/* BOTÓN DEL CARRITO */}
                  </Button>
                  <Offcanvas show={show} onHide={handleClose} placement={"end"} >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>Carrito</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      {
                        carritoArr.map((pizza) => {
                          
                          
                            return (
                              <Card  className='mb-2'>
                                <div>{pizza.name}</div>
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
                <div className="ms-2">
                  <Button variant="secondary" onClick={handleShow} className="me-2">
                    Carrito                                                                 {/* BOTÓN DEL CARRITO */}
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