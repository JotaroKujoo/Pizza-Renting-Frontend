import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import "./Pizzeria"
import { bringPizzeriaById } from '../../services/apicalls';
import { Container, Image, Row, Col, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { bringAllPizzasInPizzeria } from '../../services/apicalls';
import { bringIngredientsInPizza } from '../../services/apicalls';
import PizzaCardLogged from './../../components/Cards/PizzaCardLogged';
import PizzaCardUnlogged from './../../components/Cards/PizzaCardUnlogged';


function Pizzeria() {
    let pizzeriaId = sessionStorage.getItem("SELECTEDPIZZERIA")

    let logged = sessionStorage.getItem("SAVEJWT")

    const [pizzeria, setPizzeria] = useState("")

    const [pizzas, setPizzas] = useState([])

    if (pizzeria === "") {
        bringPizzeriaById(pizzeriaId)
            .then((res) => {
                setPizzeria(res.data.foundPizzeria.name)
            })
    }


    if (pizzas.length === 0 && pizzeria !== "") {
        bringAllPizzasInPizzeria(pizzeria)
            .then((res) => {


                setPizzas(res.data)

            })
    }


    if (logged) {
        return (
            <Container fluid className="pizzeria">
                <Row className='d-flex ms-5 justify-content-center'>
                    <Col xs={8} className='d-flex justify-content-center'>
                        <Form >
                            <Form.Label>
                                <h3 className='ms-5'>{pizzeria}</h3>
                            </Form.Label>
                        </Form>
                    </Col>
                </Row>

                <Row className="">

                    <Col>
                        <div className="cardcontainer mt-3 d-flex justify-content-center align-items-center flex-wrap m-3">
                            {
                                pizzas.map(pizza => (

                                    <PizzaCardLogged pizza={pizza} />

                                ))
                            }



                        </div>
                    </Col>
                </Row>
            </Container>
        )
    } else {
        return (
            <Container fluid className="pizzeria">
                <Row className='d-flex ms-5 justify-content-center'>
                    <Col xs={8} className='d-flex justify-content-center'>
                        <Form >
                            <Form.Label>
                                <h3 className='ms-5'>{pizzeria}</h3>
                            </Form.Label>
                        </Form>
                    </Col>
                </Row>

                <Row className="">

                    <Col>
                        <div className="cardcontainer mt-3 d-flex justify-content-center align-items-center flex-wrap m-3">
                            {
                                pizzas.map(pizza => (

                                    <PizzaCardUnlogged pizza={pizza} />

                                ))
                            }



                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Pizzeria;