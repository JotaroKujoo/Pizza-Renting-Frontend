import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Sidebar from './../../components/Sidebar/Sidebar'
import CardGroup from 'react-bootstrap/CardGroup';
import "./Orders.scss"
import { Container, Image, Row, Col, Form, Accordion } from "react-bootstrap";
import { json, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';


function Order() {
    const [carrito, setCarrito] = useState();

    console.log(carrito)

    useEffect(() => {
        if (carrito === undefined) {
            setCarrito(JSON.parse(sessionStorage.getItem("SELECTEDPIZZA")));
        }
    })

    if (carrito !== undefined) {
        return (
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Accordion>
                                {
                                    carrito.map((pizza)=>{
                                        return (
                                            <Accordion.Item>
                                                <Accordion.Header>{pizza.name}</Accordion.Header>
                                                <Accordion.Body>
                                                    <Form>
                                                        <div className="mb-3">
                                                            
                                                            
                                                        </div>
                                                    </Form>
    
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        )
                                    })
                                }
                            </Accordion>
    
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Button>Realiza pedido</Button>
                            
    
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
        

}

export default Order;

