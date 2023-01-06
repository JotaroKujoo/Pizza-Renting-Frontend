import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';

const Login = () => {
    let navigate = useNavigate()
    let logged = sessionStorage.getItem("SAVEUSERMAIL")
    useEffect(()=>{
        if (logged) {
            navigate("/")
        }
        console.log(user)
    })
    const [userError, setUserError] = useState({
        mailError: "",
        passwordError: "",
        LoginError: ""
    })
    const inputHandler = (e) => {
        //Seteamos dinámicamente el bindeo entre inputs y hook
        setUser((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const errorHandler = (field, value, type) => {
        let error = ""
        // error = errorCheck(field, value, type)
        setUserError(((prevState) => ({
            ...prevState,
            [field + "Error"]: error
        })))
    };
    const [user, setUser] = useState({
        mail: "",
        password: ""
    });
    const logMe = () =>{
    }
    return (
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
              <Card className="px-4">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-center text-uppercase ">
                      Logo
                    </h2>
                    <div className="mb-3">
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            Email address
                          </Form.Label>
                          <Form.Control type="email" name="mail" onChange={(e) => inputHandler(e)} placeholder="Enter email" />
                        </Form.Group>
  
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" name="password" onChange={(e) => inputHandler(e)} placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
                        <div className="d-grid">
                          <Button variant="primary" type="submit">
                            Log in
                          </Button>
                        </div>
                      </Form>
                      <div className="mt-3">
                        <p className="mb-0  text-center">
                          Already have an account??{' '}
                          <a href="{''}" className="text-primary fw-bold">
                            Sign In
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    );
}
export default Login;