import { useEffect } from "react"
import { useState } from "react"
import { Button, Card } from "react-bootstrap"

export default function PizzaCardLogged({ pizza }) {
    const [selected, setSelected] = useState(false)
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        if (counter <= 0) {
            setSelected(false)
        }
    })

    const CounterHandler = (e) => {
        let carrito = JSON.parse(sessionStorage.getItem("SELECTEDPIZZA"))
        const value = e.target.value

        carrito.map((pizzaCarrito) => {
            if (pizzaCarrito.id === pizza.id) {
                const newCarrito = carrito.filter(carrito => carrito.id != pizza.id)
                sessionStorage.setItem("SELECTEDPIZZA", JSON.stringify(newCarrito))
            }
        })

        if (value === "+") {
            setCounter(counter + 1)
            pizza.quantity = counter + 1


        }
        if (value === "-") {
            setCounter(counter - 1)
            pizza.quantity = counter - 1
        }

        carrito = JSON.parse(sessionStorage.getItem("SELECTEDPIZZA"))

        if (!carrito) {
            pizza.quantity = 1
            sessionStorage.setItem("SELECTEDPIZZA", JSON.stringify([pizza]))
        } else {
            carrito.push(pizza)
            sessionStorage.setItem("SELECTEDPIZZA", JSON.stringify(carrito))
        }






    }

    const selectedPizzaHandler = (body) => {
        let carrito = JSON.parse(sessionStorage.getItem("SELECTEDPIZZA"))

        if (!carrito) {
            body.quantity = 1
            sessionStorage.setItem("SELECTEDPIZZA", JSON.stringify([body]))
        } else {
            carrito.push(body)
            sessionStorage.setItem("SELECTEDPIZZA", JSON.stringify(carrito))
        }
        setSelected(true)
        setCounter(counter + 1)
    }


    return (
        <Card className='m-3' style={{ height: "25rem", width: '18rem' }}>
            <Card.Img variant="top" src={pizza.imagen} />
            <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
                <Card.Text>
                    {pizza.description}
                </Card.Text>
            </Card.Body>

            {selected ? (

                <Card.Body className="d-flex justify-content-end align-items-center">
                    <div className="counterPanel d-flex justify-content-center align-items-center">
                        <Button onClick={(e) => { CounterHandler(e) }} value="+" className="me-2" variant="dark">+</Button>
                        <div className="me-2">{counter}</div>
                        <Button onClick={(e) => { CounterHandler(e) }} className="me-2" value="-" variant="dark">-</Button>
                    </div>
                    <Button onClick={() => { selectedPizzaHandler(pizza) }} className='me-4' > BUY</Button>
                    <h4>{pizza.price}€</h4>
                </Card.Body>
            ) : (
                <Card.Body className="d-flex justify-content-end align-items-center">
                    <Button onClick={() => { selectedPizzaHandler(pizza) }} className='me-4' > BUY</Button>
                    <h4>{pizza.price}€</h4>
                </Card.Body>
            )}

        </Card>
    )

}