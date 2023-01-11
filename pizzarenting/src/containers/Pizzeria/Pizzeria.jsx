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
    let pizzeriaId = sessionStorage.getItem("SELECTEDPIZZERIA")

    const [pizzeria, setPizzeria] = useState("")

    const [pizzas,setPizzas] = useState([])




    if(pizzeria === ""){
        bringPizzeriaById(pizzeriaId)
        .then((res)=>{
            setPizzeria(res.data.foundPizzeria.name)
        })
    }

    console.log(pizzas.length)

    if (pizzas.length === 0 && pizzeria !==""){
        bringAllPizzasInPizzeria(pizzeria)
        .then((res)=>{
            console.log(res.data)

            
            setPizzas(res.data)
            
        })
    }

    const selectedPizzaHandler = (id) => {
        let carrito = sessionStorage.getItem("SELECTEDPIZZA")
        
        if (!carrito){
            sessionStorage.setItem("SELECTEDPIZZA",","+ id)
            console.log(carrito)
        }else{
            sessionStorage.setItem("SELECTEDPIZZA",carrito +","+ id)
            console.log(carrito)
        }
    }

    console.log(pizzas)
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
                                                <Card.Title >{pizza.name}</Card.Title>
                                                <Card.Text>
                                                    {pizza.description}
                                                </Card.Text>
                                                <Button onClick={()=>{selectedPizzaHandler(pizza.id)}} variant="primary">Order</Button>
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