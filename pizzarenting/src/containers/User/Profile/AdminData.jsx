import { useEffect } from "react";
import { useState } from "react";
import { Button, Card, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { bringAllUsers } from "../../../services/apicalls";

function AdminData(){
    const [users, setUsers] = useState()
    

    useEffect(()=>{
        if (users === undefined){
            bringAllUsers().then((resp)=>{
                setUsers(resp.data)
            })
        }
    })
    console.log(users)

    if (users !== undefined){
        return (
            <Container fluid>
                <Row>
                    <Col className="d-flex justify-content-center flex-column">
                        {
                            users.map((user)=>{
                                return (
                                    <Card className="m-1">
                                        <CardHeader>
                                            <Card.Title>{user.name}</Card.Title>
                                        </CardHeader>
                                        <Card.Body>
                                            <ListGroup>
                                                <ListGroupItem>
                                                    Email: {user.mail}
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                    Address: {user.address}
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                    Joined at: {user.updatedAt.split("T")[0]}
                                                </ListGroupItem>
                                            </ListGroup>
                                            <Button variant="danger" className="mt-2">Delete</Button>
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

export default AdminData;