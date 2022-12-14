import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Sidebar from './../../components/Sidebar/Sidebar'


import { Container, Image, Row, Col,Form } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { bringAllPizzerias } from "../../services/apicalls";
import { all } from "axios";

let pizzerias2 = [];



const Home = () => {
    let navigate = useNavigate()

    let [pizzerias,setPizzerias] = useState([])
    useEffect(()=>{
        if (pizzerias.length===0){
            setTimeout(()=>{
                bringAllPizzerias()
                .then((res)=>{
                    setPizzerias(res.data)
                })
            },300)
        }
    },[pizzerias]);

    const clickedPizzeria = (id) => {
        sessionStorage.setItem("SELECTEDPIZZERIA",id);
        navigate("/pizzeria") //TODO AÑADIR RUTA DE PIZZERIA DETAIL
    }


    return (
        <Container fluid className="">
            <Row className="">
                <Col xs = {2}>
                    
                    <Sidebar/>
                </Col>
                <Col className='d-flex justify-content-center align-items-center flex-column' xs = {8}>
                 <Form.Control type="text" className='w-75 mt-3' name="searcher" placeholder="Search for restaurant" /> {/*TODO onChange={(e)=> inputHandler(e)}  */}
                    <div className="cardcontainer mt-3 d-flex justify-content-center align-items-center flex-wrap">
                        
                                {
                                    pizzerias.map(pizzeria => (
                                        <Card className="m-3" style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src="holder.js/100px180" />
                                            <Card.Body>
                                                <Card.Title  key={pizzeria.id}>{pizzeria.name}</Card.Title>
                                                <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                                </Card.Text>
                                                <Button onClick={()=>{clickedPizzeria(pizzeria.id)}} variant="primary">Go somewhere</Button>
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

