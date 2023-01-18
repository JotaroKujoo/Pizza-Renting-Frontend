import React from "react";

import { Container, Image, Row, Col } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';



function PizzeriaCard({pizzeria}){
    let navigate = useNavigate()
    const ClickHandler = () => {
        sessionStorage.setItem("SELECTEDPIZZERIA", pizzeria.id);
        navigate("/pizzeria")
    }
    console.log(pizzeria)
    return (
        
                        <div className="card p-3 m-3" style={{width:300}}>
                            <div className="card-body">
                                <h5 className="card-title">{pizzeria.name}</h5>
                                
                                <Button onClick={()=>{ClickHandler()}}>Go</Button>
                                
                            </div>
                        </div>
                    
              
    )
}

export default PizzeriaCard;