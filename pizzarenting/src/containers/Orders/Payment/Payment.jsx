import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { makeAnOrder } from '../../../services/apicalls';

function Payment(){

    const makeOrder = () =>{
        orderList.map((order)=>{
            makeAnOrder(order).then((res)=>{
                console.log(res)
            })
        })
    }

    let orderList = JSON.parse(sessionStorage.getItem('SAVEDORDER'));
    if (orderList){
        console.log(orderList)
        
    return(
        <div>
            <Card className='p-5'>
                <Card.Title>Soy la pasarela de pago</Card.Title>
                <Card.Body>
                    Introduce tus datos
                    <Button onClick={()=>{makeOrder()}}>Pagar</Button>
                </Card.Body>
            </Card>
        </div>
    )
    }
}

export default Payment;