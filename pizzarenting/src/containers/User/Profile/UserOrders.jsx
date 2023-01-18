import jwt_decode from "jwt-decode";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { getMyOrders } from "../../../services/apicalls";
import { bringPizzaById } from "../../../services/apicalls";
function UserOrders(){
    const [orders,setOrders] = useState([])
    


    useEffect(()=>{
        if (orders.length === 0){
            let decoded = jwt_decode(sessionStorage.getItem("SAVEJWT"))
            console.log(parseInt(decoded.id))
            getMyOrders(parseInt(decoded.id)).then((res)=>setOrders(res.data.orders) )
        }
        orders.map((order)=>{
            bringPizzaById(order.id).then((res)=>{console.log(res)})
        })
        
    })

    if(orders.length !== 0){
        return(
            <div>
                {
                    orders.map((order)=>{
                        return(
                            <Card>
                                <Card.Header>{order.updatedAt.split("T")[0]} {order.updatedAt.split("T")[1].split(".")[0]}</Card.Header>
                                <Card.Body>
                                    {order.address}
                                    {order.quantity}
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
        )
    }

    
}


export default UserOrders;