import { useEffect } from "react";
import { useState } from "react";
import { Button, Card, Col, Container, FormControl, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { bringMyUserData, updateUserData } from "../../../services/apicalls";


function UserData() {
    const [user, setUser] = useState({
        mail: "",
        name: "",
        address:""
    })
    const userMail = JSON.parse(sessionStorage.getItem("SAVEUSERMAIL"))
    const [isEdit, setIsEdit] = useState(false)
    const [updateBody, setUpdateBody] = useState({
        name: user.name,
        address: user.address,
    })

    const updateProfileButtonHandler = () => {
        if(isEdit){
            
            if(updateBody.name === "" || updateBody.address === ""){
                return (
                    <div>
                        Rellena todo los campos
                    </div>
                )
            }
            
            updateUserData({
                name: updateBody.name,
                address: updateBody.address,
                mail: user.mail
            }).then(()=>{
                setIsEdit(false);
                
            })

        }else{
            setIsEdit(true);
        }
    } 
    
    const inputHandler = (e) => {
        setUpdateBody((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }


    useEffect(() => {
        if (user.mail === "") {
            bringMyUserData(userMail).then((res) => { setUser(res.data) })
        }
        console.log(updateBody)
        console.log(user)
    })


    if (user !== undefined) {
       if(isEdit===true) {
        return (
            <Container fluid>
                <div>Aviso: para ver los cambios reinicia la sesión</div>
                <Row>
                    <Col className="d-flex justify-content-center mt-4">
                        <Card style={{ height: "30rem", width: '30rem' }}>
                            <Card.Header>{user.name}</Card.Header>
                            <Card.Body className="mt-4">
                                <ListGroup className="">
                                    <ListGroupItem className="p-3">
                                        <Row>
                                            <Col>
                                            Email:
                                            </Col>
                                            <Col>
                                            {user.mail}
                                            </Col>
                                        </Row>
                                    </ListGroupItem>
                                    <ListGroupItem className="p-3">
                                        <Row>
                                            <Col>
                                            Name:
                                            </Col>
                                            <Col>
                                            <FormControl onChange={(e)=>{inputHandler(e)}} name="name" placeholder={user.name}></FormControl>
                                            </Col>
                                        </Row>
                                    </ListGroupItem>
                                    <ListGroupItem className="p-3">
                                        <Row>
                                            <Col>
                                            Address:
                                            </Col>
                                            <Col>
                                            <FormControl onChange={(e)=>{inputHandler(e)}} name="address" placeholder={user.address}></FormControl>
                                            </Col>
                                        </Row>
                                    </ListGroupItem>
                                </ListGroup>
                                <Button onClick={()=>{updateProfileButtonHandler()}} className="mt-4">Finish</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
       }else{
        return (
            <Container fluid>
                
                <div>Aviso para ver los cambios reinicia la sesión</div>
                <Row>
                    <Col className="d-flex justify-content-center mt-4">
                        <Card style={{ height: "30rem", width: '30rem' }}>
                            <Card.Header>{user.name}</Card.Header>
                            <Card.Body className="mt-4">
                                <ListGroup className="">
                                    <ListGroupItem className="p-3">
                                        <Row>
                                            <Col>
                                            Email:
                                            </Col>
                                            <Col>
                                            {user.mail}
                                            </Col>
                                        </Row>
                                    </ListGroupItem>
                                    <ListGroupItem className="p-3">
                                        <Row>
                                            <Col>
                                            Name:
                                            </Col>
                                            <Col>
                                            {user.name}
                                            </Col>
                                        </Row>
                                    </ListGroupItem>
                                    <ListGroupItem className="p-3">
                                        <Row>
                                            <Col>
                                            Address:
                                            </Col>
                                            <Col>
                                            {user.address}
                                            </Col>
                                        </Row>
                                    </ListGroupItem>
                                </ListGroup>
                                <Button onClick={()=>{updateProfileButtonHandler()}} className="mt-4">update</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
       }
    }
};

export default UserData;