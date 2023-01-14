import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

function Payment(){

    let orderList = JSON.parse(sessionStorage.getItem('SAVEDORDER'));
    if (orderList){
        console.log(orderList)
        
    return(
        <div>
            <Card className='p-5'>Soy la pasarela de pago</Card>
        </div>
    )
    }
}

export default Payment;