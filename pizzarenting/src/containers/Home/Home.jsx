import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Sidebar from './../../components/Sidebar/Sidebar'
import "./Home.scss"


import { Container, Row, Col,Form } from "react-bootstrap";
import { bringAllPizzerias } from "../../services/apicalls";
import PizzeriaCard from '../../components/Cards/PizzeriaCard';


function Home(){
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

    return (
        <Container fluid className="homeContainer">
            <Row className=" d-flex justify-content-center">
                
                <Col className='d-flex justify-content-center align-items-center flex-column' xs = {8}>
                 <Form.Control type="text" className='w-75 mt-3' name="searcher" placeholder="Search for restaurant" /> {/*TODO onChange={(e)=> inputHandler(e)}  */}
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

