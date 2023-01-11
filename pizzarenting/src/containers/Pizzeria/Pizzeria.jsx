import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Sidebar from './../../components/Sidebar/Sidebar'
import CardGroup from 'react-bootstrap/CardGroup';
import "./Pizzeria"
import { bringPizzeriaById } from '../../services/apicalls';
import { Container, Image, Row, Col, Form } from "react-bootstrap";
import { json, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { bringAllPizzasInPizzeria } from '../../services/apicalls';
import { bringIngredientsInPizza } from '../../services/apicalls';

const pizzeriaName = "Giorno Giovana Pizzeria"

function Pizzeria() {
    let navigate = useNavigate()


    const [pizzeria, setPizzeria] = useState({
    })

    const [pizzas, setPizzas] = useState([])








    let pizzeriaId = parseInt(sessionStorage.getItem("SELECTEDPIZZERIA"))

    useEffect(() => {
        if (!pizzeria.id) {

            bringPizzeriaById(pizzeriaId)
                .then((res) => {
                    setPizzeria({
                        id: pizzeriaId,
                        pizzeria: res.data.foundPizzeria.name
                    })


                })

        }
    })


    useEffect(() => {

        console.log(pizzas)

        console.log(pizzas)
        bringAllPizzasInPizzeria(pizzeria.pizzeria)
            .then((res) => {
                let foundedPizzas = res.data
                foundedPizzas.map((pizza) => {
                    if (pizzas.length <= 0) {
                        setPizzas((prevState) => ([
                            ...prevState,
                            pizza
                        ]))
                        


                    }
                })
            })
            .then(console.log(pizzas))


    },)

    const getIngredientsFromPizza = async(pizzaName,pizzeriaName) => {
        let body = {
            name: pizzaName,
            pizzeria: pizzeriaName
        }
        let resp = await bringIngredientsInPizza(body)
        console.log(resp)
        return resp
    }




    const inputHandler = (e) => {
        setPizzeria((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }


    return (
        <Container fluid className="pizzeria">
            <Row className='d-flex ms-5 justify-content-center'>
                <Col xs={8} className='d-flex justify-content-center'>
                    <Form >
                        <Form.Label>
                            <h3 className='ms-5'>{pizzeria.pizzeria}</h3>
                        </Form.Label>
                    </Form>
                </Col>
            </Row>

            <Row className="">
                <Col xs={2}>

                    <Sidebar />
                </Col>
                <Col xs={8}>
                    <Form.Control type="text" name="searcher" placeholder="Search for pizza" />
                    <div className="cardcontainer mt-3 d-flex justify-content-center align-items-center flex-column">
                        {
                            pizzas.map(pizza => (
                                <Row>
                                    <Col>
                                        <Card className="m-3" >
                                            <Card.Img />
                                            Imagen
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className="m-3" style={{ width: '50rem' }}>
                                            <Card.Body>
                                                <Card.Title key={pizza.id}>{pizza.name}</Card.Title>
                                                <Card.Text onClick={getIngredientsFromPizza(pizza.name,pizzeria.pizzeria)}>
                                                    Some quick example text to build on the card title and make up the
                                                    bulk of the card's content.
                                                </Card.Text>
                                                <Button variant="primary">Order</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                </Row>
                            ))
                        }



                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Pizzeria;