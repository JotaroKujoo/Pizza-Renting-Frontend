import { useEffect } from "react"
import { useState } from "react"
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"
import { bringAllOrders } from "../../../services/apicalls"

function AdminOrders(){
    const [orders,setOrders] = useState()

    useEffect(()=>{
        if(orders === undefined){
            bringAllOrders().then(res => setOrders(res.data))
        }
    })
    console.log(orders)

   if(orders !== undefined){
    return (
        <Container>
            <Row>
                <Col>
                    {
                        orders.map((order)=>{
                            return (
                                <Card>
                                    <CardHeader><Card.Title>{order.address}</Card.Title></CardHeader>
                                    <Card.Body>
                                        <ListGroup>
                                            <ListGroupItem>
                                                Address: {order.address}
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                Extra: {order.extra}
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                Without: {order.without}
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                Id: {order.id}
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                Price: {order.price}€
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                Quantity: {order.quantity}
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                Pizza Id: {order.pizzaId}
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                Created at: {order.updatedAt}
                                            </ListGroupItem>
                                        </ListGroup>
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

export default AdminOrders