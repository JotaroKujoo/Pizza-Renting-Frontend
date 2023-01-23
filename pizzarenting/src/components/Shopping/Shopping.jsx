import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { bringPizzaById } from '../../services/apicalls';
import { Card, Row, Col } from 'react-bootstrap';

function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);
    const [content, setContent] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let logged = sessionStorage.getItem("SAVEUSERMAIL")

    useEffect(()=>{
        if (logged){
            let carrito = sessionStorage.getItem("SELECTEDPIZZA")
            if (carrito){
                if (content === undefined){
                    setContent(carrito)
                }

            }
        }
    })
        
    

    if (logged) {
        let carrito = sessionStorage.getItem("SELECTEDPIZZA")
        if (carrito) {
            let carritoArr = carrito.split(",")
            
            return (
                <>
                    <Button variant="secondary" onClick={handleShow} className="me-2">
                        {name}                                                                  {/* BOTÓN DEL CARRITO */}
                    </Button>
                    <Offcanvas show={show} onHide={handleClose} {...props}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Carrito</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                        
                            
                            
                        </Offcanvas.Body>

                            
                        
                    </Offcanvas>
                </>
            );

        } else {
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


}

function Shopping() {
    return (
        <>

            <OffCanvasExample placement={"end"} name={"Carrito"} />

        </>
    );
}


export default Shopping;