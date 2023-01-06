import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Sidebar from './../../components/Sidebar/Sidebar'
import CardGroup from 'react-bootstrap/CardGroup';




import { Container, Image, Row, Col,Form } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
const pizzeriaName = "Giorno Giovana Pizzeria"
const pizzas = ["Margarita","4 quesos","Barbacoa","4 estaciones", "Pulled pork"];

function Pizzeria(){
    let navigate = useNavigate()
    const [pizzeria,setPizzeria] = useState({
        searcher: ""
    })

    const inputHandler = (e) => {
        setPizzeria((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }
    useEffect(()=>{
        console.log(pizzeria)
    })


    return (
        <Container fluid className="">
            <Row className='d-flex ms-5 justify-content-center'>
                <Col xs={8} className='d-flex justify-content-center'>
                    <Form >
                    <Form.Label>
                        <h3 className='ms-5'>{pizzeriaName}</h3>
                    </Form.Label>
                    </Form>
                </Col>
            </Row>

            <Row className="">
                <Col xs = {2}>
                    
                    <Sidebar/>
                </Col>
                <Col xs = {8}>
                <Form.Control type="text" name="searcher" onChange={(e)=> inputHandler(e)} placeholder="Search for pizza" />
                    <div className="cardcontainer mt-3 d-flex justify-content-center align-items-center flex-column">
                        
                                {
                                    pizzas.map(pizzeria => (
                                        <Row>
                                            <Col>
                                            <Card className="m-3" >
                                                    <Card.Img   />
                                                    Imagen
                                            </Card>
                                            </Col>
                                             <Col>
                                                <Card className="m-3" style={{ width: '50rem' }}>
                                                    <Card.Body>
                                                        <Card.Title>{pizzeria}</Card.Title>
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