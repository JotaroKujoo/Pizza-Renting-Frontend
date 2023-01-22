import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Sidebar from './../../components/Sidebar/Sidebar'
import "./Home.scss"


import { Container,Button, Row, Col,Form } from "react-bootstrap";
import { bringAllPizzerias, bringPizzeriasByName } from "../../services/apicalls";
import PizzeriaCard from '../../components/Cards/PizzeriaCard';
import BuscadorPizzeria from '../../components/Buscador/BuscadorPizzeria';


function Home(){
    let [pizzerias,setPizzerias] = useState([])
    const [buscador, setBuscador] = useState({
        name:""
    })

    useEffect(()=>{
        if (pizzerias.length===0 || pizzerias === ""){
            setTimeout(()=>{
                bringAllPizzerias()
                .then((res)=>{
                    setPizzerias(res.data)
                })
            },300)
        }
    },[pizzerias]);

    const inputHandler = (e) => {
        setTimeout(()=>{
            setBuscador((prevState)=>({
                ...prevState,
                name: e.target.value
            }))
        },400)
        bringPizzeriasByName(e.target.value).then((res)=>{setPizzerias(res.data.foundPizzeria)})
        if (e.target.value === ""){
            setTimeout(()=>{
                bringAllPizzerias()
                .then((res)=>{
                    setPizzerias(res.data)
                })
            },300)
        }
    }
    console.log(pizzerias)

    return (
        <Container fluid className="homeContainer">
            <Row className=" d-flex justify-content-center">
                
                <Col className='d-flex justify-content-center align-items-center flex-column' xs = {8}>
                     
                <Form className="d-flex w-75">
                    <Form.Control onKeyUp={(e)=>{inputHandler(e)}} placeholder="Busca una pizzeria" className="me-2 p-2"></Form.Control>
                   
                </Form>


                    <div className="cardcontainer mt-3 d-flex justify-content-center align-items-center flex-wrap">
                        
                                {
                                    pizzerias.map(pizzeria => (
                                        <PizzeriaCard  pizzeria={pizzeria}/>
                                    ))
                                }
                                
                            
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;

