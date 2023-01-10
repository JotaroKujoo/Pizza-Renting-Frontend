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

const pizzeriaName = "Giorno Giovana Pizzeria"

function Pizzeria() {
    let navigate = useNavigate()


    const [pizzeria, setPizzeria] = useState({
    })

    const [pizzas,setPizzas] = useState([])

    if (pizzas.length === 0){
        bringAllPizzasInPizzeria(pizzeria.pizzeria)
                    .then((res) => {
                        let foundedPizzas = res.data
                        foundedPizzas.map((pizza)=>{
                            setPizzas([pizza.name])
                            console.log(pizza.name)
                        })
                        console.log(typeof pizzas)
                    })

    }


    let pizzeriaId = parseInt(sessionStorage.getItem("SELECTEDPIZZERIA"))

    useEffect(() => {
        if (!pizzeria.id) {
            console.log(pizzeria)
            
                bringPizzeriaById(pizzeriaId)
                    .then((res) => {
                        console.log(res.data.foundPizzeria)
                        setPizzeria((prevState) => ({
                            ...prevState,
                            id: pizzeriaId,
                            pizzeria: res.data.foundPizzeria.name
                        }))
                        

                    })
            
        }
        


    })
    

    console.log(pizzeria)

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
                                                <Card.Title>{pizza}</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the
                                                    bulk of the card's content.
                                                </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
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