import React from "react";

import { Container, Image, Row, Col } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';

const pizzerias = 3

const OwnCard = () => {

    
    return (
        <Container fluid className="">
            <Row className="">
                <Col>
                    <div className="cardcontainer mt-3 d-flex justify-content-center align-items-center flex-wrap">
                        <div className="card">
                            <div className="card-image-top">
                                <Image></Image>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Pizzeria</h5>
                                <p>Sort definition from pizzeria</p>
                                <Button>Go</Button>
                                
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default OwnCard;