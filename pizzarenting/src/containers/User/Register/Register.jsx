import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { errorCheck } from "../../../services/usefull";
import { registerUser } from "../../../services/apicalls";
import { loginUser } from "../../../services/apicalls";
import jwt_decode from "jwt-decode";


const Register = () => {
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

    const assertPasswordEqual = (pass) => {
      let error = ""
      if (user.password !== pass){
        error = "Password dont match"
      }


        setUserError(((prevState) => ({
            ...prevState,
            ["Error"]: error

        })))
  }

    const [user, setUser] = useState({
        name: "",
        mail: "",
        password: "",
        passwordConfirm: "",
    });

    const regMe = () => {
      try {
        registerUser(user)
        .then(res=>{
          console.log(res)
          try {
            loginUser(user)
        .then(res => {
          if (res.data.message !== "Login successful"){
            console.log("Algo va mal", res.data.message)
            
          }else{
            sessionStorage.setItem("SAVEJWT", JSON.stringify(res.data.yourToken))
            sessionStorage.setItem("SAVEUSERMAIL",JSON.stringify(user.mail))
            if (res.data.roleId === 1){
              sessionStorage.setItem("SAVEUSERROL","Admin")
            }else{
              sessionStorage.setItem("SAVEUSERROL","userRole")
            }
          }
          let decoded = jwt_decode(res.data.yourToken)
          navigate("/")
          return res
        })
            

          } catch (error) {
            console.log(error)
          }
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
                        <Form.Group className="mb-3" controlId="Name">
                          <Form.Label className="text-center">Name</Form.Label>
                          <Form.Control type="text" name="name" onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e.target.name, e.target.value, "text")} placeholder="Enter Name" />
                        </Form.Group>
  
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            Email address
                          </Form.Label>
                          <Form.Control type="mail" name="mail" onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e.target.name, e.target.value, "mail")} placeholder="Enter email" />
                        </Form.Group>
  
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" name="password" onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e.target.name, e.target.value, "password")} placeholder="Password" />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Confirm Password</Form.Label>
                          <Form.Control type="password" name="passwordConfirm" onChange={(e) => inputHandler(e)} onBlur={(e) => assertPasswordEqual(e.target.value)} placeholder="Password" />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        ></Form.Group>
                        <div className="d-grid">
                          <div onClick={()=>{regMe()}} className="btn btn-primary">
                            Create account
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

export default Register;