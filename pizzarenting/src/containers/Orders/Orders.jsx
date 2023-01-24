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
import PizzaAccordion from '../../components/Accordions/PizzaAccordion';





function Order() {
    const [pizzas, setPizzas] = useState([])
    const [address, setAddress] = useState()
    let carrito = JSON.parse(sessionStorage.getItem("SELECTEDPIZZA"))
    let navigate = useNavigate()

    useEffect(() => {
        if (pizzas.length === 0) {
            if (carrito) {
                setPizzas(carrito)
            }
        }

    })

    const showTemp = (body) => {
        let orderArr = JSON.parse(sessionStorage.getItem("ORDER"))

        let result = orderArr.filter((item, index) => {
            return item.idPizza !== body.idPizza
        })
        result.push(body)
        sessionStorage.setItem("ORDER", JSON.stringify(result))

    }

    const inputAddressHandler = (e) => {
        setAddress((prevState) => ({
            ...prevState,
            "address": e.target.value
        }))
        sessionStorage.setItem("ADDRESS", JSON.stringify(e.target.value))
    }

    const finishOrder = () => {
        let orderArr = JSON.parse(sessionStorage.getItem("ORDER"))
        let result = orderArr.filter((item, index) => {
            return orderArr.indexOf(item) === index;
        })

        sessionStorage.setItem("ORDER", JSON.stringify(result))



        navigate("/payment")


    }



    if (pizzas.length > 0) {
        return (
            <Container>
                <Row>
                    <Col>
                        <Card>
                            {
                                pizzas.map((pizza) => {
                                    return (
                                        <PizzaAccordion onUpdate={showTemp} pizza={pizza} />
                                    )
                                })
                            }
                        </Card>
                    </Col>
                    <Col>
                        <Card className='p-5'>
                            <Button onClick={() => { finishOrder() }}>Realizar pedido</Button>
                            <Form.Label className='mt-4'>Dirección de envío</Form.Label>
                            <Form.Control onKeyUp={(e) => { inputAddressHandler(e) }} placeholder='Your address' className='mt-2'></Form.Control>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }



}

export default Order;


