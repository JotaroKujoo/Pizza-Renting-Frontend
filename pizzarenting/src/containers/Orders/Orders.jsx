import React, { useState, useEffect } from 'react';

import Card from 'react-bootstrap/Card';
import Sidebar from './../../components/Sidebar/Sidebar'
import CardGroup from 'react-bootstrap/CardGroup';
import "./Orders.scss"
import { Container, Image, Row, Col, Form, Accordion } from "react-bootstrap";
import { json, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import jwt_decode from "jwt-decode";





function Order() {
    const [address, setAddress] = useState([])
    const [carrito, setCarrito] = useState([]);
    const [order,setOrder] = useState([]);
    const [user,setUser] = useState();
    const [instructions,setInstructions] = useState();
    let decoded = jwt_decode(sessionStorage.getItem("SAVEJWT"))
    let navigate = useNavigate()
    

    const addExtrasToState = (e) => {
        console.log(e.id)
        console.log(e.value)

    }

    const inputAddressHandler = (e) => {
        console.log(e)
        setAddress(e)

    }

    const addOrderToState = (address) => {
        let orderSaved = sessionStorage.getItem("SAVEDORDER")
        if (!orderSaved){
            carrito.map((item)=>{
                console.log(carrito.indexOf(item))
                let indexValue = document.getElementById(carrito.indexOf(item)).selectElement
                console.log(indexValue)
                let orderArr = order
                orderArr.push({
                    pizzaId: item.id,
                    userId: user,
                    extra: "None",
                    without: "None",
                    address: address
                })
                setOrder(orderArr)
                console.log(order)
                sessionStorage.setItem("SAVEDORDER",JSON.stringify(order))
                navigate("/payment")
                
            })
        }
        navigate("/payment")
        
    }
    useEffect(() => {
        if (carrito.length === 0) {
            setCarrito(JSON.parse(sessionStorage.getItem("SELECTEDPIZZA")));
        }
        
        if (decoded){
            setUser(decoded.id)
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
                                                    
                                                    
                                                        
                                                        {
                                                            pizza.description.split(",").map((ingredient)=>{
                                                                return(
                                                                    
                                                                    <div id={carrito.indexOf(pizza)}  onChange={(e)=>{addExtrasToState(e.target)}}>
                                                        
                                                                        <Form.Label>
                                                                        {ingredient}
                                                                        </Form.Label>
                                                                            
                                                                    </div>
                                                                   
                                                                )
                                                            })
                                                        }

                                                        
                                                        
                                                    

                                                    

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
                        <Card className='p-5'>
                            <Button onClick={()=>{addOrderToState(address)}}>Realizar pedido</Button>
                            <Form.Label  className='mt-4'>Dirección de envío</Form.Label>
                            <Form.Control onChange={(e)=>{inputAddressHandler(e.target.value)}} placeholder='Your address' className='mt-2'></Form.Control>
                            
    
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
        

}

export default Order;


