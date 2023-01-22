import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Col, Container, Image, ListGroup, Row } from 'react-bootstrap';
import { makeAnOrder } from '../../../services/apicalls';

function Payment(){
    const address = JSON.parse(sessionStorage.getItem("ADDRESS"))
    const [orderFinished, setOrderFinished] = useState(false)

    const makeOrder = () =>{
        orderList.map((order)=>{
            order.address = JSON.parse(sessionStorage.getItem("ADDRESS"))
            console.log(order)
            makeAnOrder(order).then((res)=>{
                console.log(res)
                sessionStorage.removeItem("ADDRESS")
                sessionStorage.removeItem("ORDER")
                sessionStorage.removeItem("SELECTEDPIZZA")
                setOrderFinished(true)
            })
        })
    }

    let orderList = JSON.parse(sessionStorage.getItem('ORDER'));
    let carritoList = JSON.parse(sessionStorage.getItem('SELECTEDPIZZA'));
    if (orderList){
        console.log(orderList)
        if(orderFinished === false){
            return(
                <Container fluid>
                    <Row>
                        <Col className='d-flex justify-content-center align-items-center flex-column '>
                            <h4>Confirmar pedido</h4>
                            <Card className='mt-4' style={{ height: "25rem", width: '18rem' }}>
                                <Card.Title className='mt-3'><h5>{address}</h5></Card.Title>
                                <Card.Body>
                                    <ListGroup variant='flush'>
        
                                    {
                                        carritoList.map((carritoListItem)=>{
                                            return(
                                                <ListGroup.Item>
                                                    <div className='row'>
                                                    <div className='col d-flex justify-content-end'>
                                                        {carritoListItem.name}
                                                    </div>
                                                    <div className='col d-flex justify-content-start'>
                                                        {carritoListItem.quantity}
                                                    </div>
                                                </div>
                                                </ListGroup.Item>
                                            )
                                        })
                                    }
        
                                    </ListGroup>
        
                                    <Button className='' onClick={()=>{makeOrder()}}>Pagar</Button>
        
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            )
        }else{
            return(
                <Container fluid>
                    <Row>
                        <Col className='d-flex justify-content-center align-items-center flex-column '>
                            <h4>Pedido Realizado</h4>
                            <Card className='mt-4' style={{ height: "25rem", width: '18rem' }}>
                                <Card.Title className='mt-3'><h5>{address}</h5></Card.Title>
                                <Card.Body>
                                    
                                    El rider llegará en breves momentos
        
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            )
        }
        
    }else{
        return(
            <Container fluid>
                <Row>
                    <Col className='d-flex justify-content-center align-items-center flex-column '>
                        <h4>Pedido Realizado</h4>
                        <Card className='mt-4' style={{ height: "30rem", width: '25rem' }}>
                            <Card.Title className='mt-3'><h5>{address}</h5></Card.Title>
                            <Card.Body>
                                
                                <h4 className='mb-2'>El rider llegará en breves momentos</h4>
                                <div className='mb-5'>Tiempo medio estimado: 30 min</div>
                                <img src="https://github.com/JotaroKujoo/Pizza-Renting-Frontend/blob/main/pizzarenting/src/assets/img/rider.png?raw=true"/>
    
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Payment;