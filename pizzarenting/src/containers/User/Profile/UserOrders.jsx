import jwt_decode from "jwt-decode";
import { useState } from "react";
import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { getMyOrders } from "../../../services/apicalls";
import { bringPizzaById } from "../../../services/apicalls";
function UserOrders(){
    const [orders,setOrders] = useState([])
    


    useEffect(()=>{
        if (orders.length === 0){
            let decoded = jwt_decode(sessionStorage.getItem("SAVEJWT"))
            getMyOrders(parseInt(decoded.id)).then((res)=>setOrders(res.data.orders) )
        }
        orders.map((order)=>{
            bringPizzaById(order.pizzaId).then((res)=>{console.log(res)})
        })
        
    })

    if(orders.length !== 0){
        return(
            <Container fluid>
                <Row>
                    <h1 className="mb-5">Historial de pedidos</h1>
                    <Col className="d-flex justify-content-center flex-wrap">
                        
                        {
                            orders.map((order)=>{
                                return(
                                    <Card className="m-4" style={{ height: "8rem", width: '40rem' }}>
                                        <Card.Header>{order.updatedAt.split("T")[0]} {order.updatedAt.split("T")[1].split(".")[0]}</Card.Header>
                                        <Card.Body>
                                            <div>{order.address}</div>
                                            <div>{order.price}€</div>
                                            
                                        </Card.Body>
                                    </Card>
                                )
                            })
                        }
                    </Col>
                </Row>
            </Container>
        )
    }

    
}


export default UserOrders;