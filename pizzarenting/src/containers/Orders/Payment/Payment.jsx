import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { makeAnOrder } from '../../../services/apicalls';

function Payment(){
    const address = JSON.parse(sessionStorage.getItem("ADDRESS"))

    const makeOrder = () =>{
        orderList.map((order)=>{
            order.address = JSON.parse(sessionStorage.getItem("ADDRESS"))
            console.log(order)
            makeAnOrder(order).then((res)=>{
                console.log(res)
                sessionStorage.removeItem("ADDRESS")
                sessionStorage.removeItem("ORDER")
                sessionStorage.removeItem("SELECTEDPIZZA")
            })
        })
    }

    let orderList = JSON.parse(sessionStorage.getItem('ORDER'));
    let carritoList = JSON.parse(sessionStorage.getItem('SELECTEDPIZZA'));
    if (orderList){
        console.log(orderList)
        
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
    }
}

export default Payment;