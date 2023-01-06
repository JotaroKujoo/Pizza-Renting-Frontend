import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

import { Container, Image, Row, Col,Form } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
const pizzerias = ["Cheese Lovers","Meat Lovers","Veggie Lovers", "Giorno Giovana Pizzeria"];

const Home = () => {
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
            <Row className="">
                <Col>
                <Form.Control type="text" name="searcher" onChange={(e)=> inputHandler(e)} placeholder="Search for restaurant" />
                    <div className="cardcontainer mt-3 d-flex justify-content-center align-items-center flex-wrap">
                        
                                {
                                    pizzerias.map(pizzeria => (
                                        <Card className="m-3" style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src="holder.js/100px180" />
                                            <Card.Body>
                                                <Card.Title>{pizzeria}</Card.Title>
                                                <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                                </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    ))
                                }
                                
                            
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;

