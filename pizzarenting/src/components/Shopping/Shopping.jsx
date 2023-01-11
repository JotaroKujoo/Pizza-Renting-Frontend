import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let carrito = sessionStorage.getItem("SELECTEDPIZZAS")

  if (carrito){

    return (
        <>
          <Button variant="primary" onClick={handleShow} className="me-2">
            {name}
          </Button>
          <Offcanvas show={show} onHide={handleClose} {...props}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {carrito}
            </Offcanvas.Body>
          </Offcanvas>
        </>
      );

  }else{
    return (
        <>
          <Button variant="primary" onClick={handleShow} className="me-2">
            {name}
          </Button>
          <Offcanvas show={show} onHide={handleClose} {...props}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              El carrito está vacío
            </Offcanvas.Body>
          </Offcanvas>
        </>
      );
  }

  
}

function Shopping() {
  return (
    <>
      
        <OffCanvasExample  placement={"end"} name={"Carrito"} />
      
    </>
  );
}


export default Shopping;