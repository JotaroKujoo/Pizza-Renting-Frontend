import React, { useState, useEffect } from 'react';
import { makeAnOrder } from '../../services/apicalls';

import Card from 'react-bootstrap/Card';
import Sidebar from './../../components/Sidebar/Sidebar'
import CardGroup from 'react-bootstrap/CardGroup';
import "./Orders.scss"
import { Container, Image, Row, Col, Form, Accordion } from "react-bootstrap";
import { json, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import jwt_decode from "jwt-decode";
import OrderAccordion from '../../components/Accordions/OrderAccordion';





function Order() {
    const [pizzas, setPizzas] = useState([])
    const [orders, setOrders] = useState([])
    let carrito = JSON.parse(sessionStorage.getItem("SELECTEDPIZZA"))
    let navigate = useNavigate()

    const accHandler = () => {
        console.log("FUNCIONOOO")
    }
    useEffect(() => {
        if (pizzas.length === 0) {
            if (carrito) {
                setPizzas(carrito)
            }
        }
    })

    const finishOrder = () => {
        makeAnOrder(orders)
        .then((res)=>{
            console.log(res)
            navigate("/payment")

        })
        
        
    }

    const addOrderToState = (bodyOrder) => {
        let temp = pizzas.filter(item => item.id === bodyOrder.id)
        temp.push(bodyOrder)
        setOrders(temp)
    }
    console.log(orders)

    if (pizzas.length > 0) {
        return (
            <Container>
                <Row>
                    <Col>
                        <Card>
                            {
                                pizzas.map((pizza) => {
                                    return (
                                        <OrderAccordion  onUpdate={addOrderToState} onClick={()=>{accHandler()}} pizza={pizza}/>
                                    )
                                })
                            }
                        </Card>
                    </Col>
                    <Col>
                        <Card className='p-5'>
                            <Button onClick={()=>{finishOrder()}}>Realizar pedido</Button>
                            <Form.Label className='mt-4'>Dirección de envío</Form.Label>
                            <Form.Control placeholder='Your address' className='mt-2'></Form.Control>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }



}

export default Order;


