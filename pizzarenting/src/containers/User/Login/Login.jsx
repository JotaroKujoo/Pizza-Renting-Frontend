import React, {useState, useEffect} from "react";

import { useNavigate } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { errorCheck } from "../../../services/usefull";
import { loginUser } from "../../../services/apicalls";
import jwt_decode from "jwt-decode";


const Login = () => {
    let navigate = useNavigate()
    let logged = sessionStorage.getItem("SAVEUSERMAIL")
    useEffect(()=>{
        if (logged) {
            navigate("/")
        }
    })
    const [userError, setUserError] = useState({
        mailError: "",
        passwordError: "",
        LoginError: ""
    })

    const clickedPizza = (id) => {
      
    }

    const inputHandler = (e) => {
        //Seteamos dinámicamente el bindeo entre inputs y hook
        setUser((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const errorHandler = (field, value, type) => {
        let error = ""
        error = errorCheck(field, value, type)
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
      try {
        loginUser(user)
        .then(res => {
          if (res.data.message !== "Login successful"){
            console.log("Algo va mal", res.data.message)
            
          }else{
            sessionStorage.setItem("SAVEJWT", JSON.stringify(res.data.yourToken))
            sessionStorage.setItem("SAVEUSERMAIL",JSON.stringify(user.mail))
            if (res.data.role === "Admin"){
              sessionStorage.setItem("SAVEUSERROL","Admin")
            }else{
              sessionStorage.setItem("SAVEUSERROL","userRole")
            }
          }
          let decoded = jwt_decode(res.data.yourToken)
          if (decoded){
            sessionStorage.setItem("SAVEUSERNAME",decoded.name)
          }
          navigate("/")
          return res
        })
      } catch (error) {
        console.log(error)
      }
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
                          <Form.Control type="mail" name="mail" onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e.target.name, e.target.value, "mail")} placeholder="Enter email" />
                        </Form.Group>
  
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" name="password" onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e.target.name, e.target.value, "password")} placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
                        <div className="d-grid">
                          <div onClick={()=>logMe()} className="btn btn-primary">
                          Log in
                          </div>
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