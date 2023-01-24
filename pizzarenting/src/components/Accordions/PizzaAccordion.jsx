import { Accordion, Form } from "react-bootstrap"
import jwt_decode from "jwt-decode";

import { useEffect } from "react"
import { useState } from "react"
import IngredientAccordionExtra from "./IngredientAccordionExtra"
import IngredientAccordionWithout from "./IngredientAccordionWithout"


export default function PizzaAccordion({ pizza, onUpdate }) {

    let decoded = jwt_decode(sessionStorage.getItem("SAVEJWT"))
    let carrito = JSON.parse(sessionStorage.getItem("ORDER"))
    const [extras, setExtras] = useState({})
    const [without, setWithout] = useState({})
    const [isChecked, setIsChecked] = useState(false)
    const [ingredients, setIngredients] = useState([])

    let address = JSON.parse(sessionStorage.getItem("ADDRESS"))


    const [bodyPizza, setBodyPizza] = useState({
        idPizza: pizza.id,
        id: decoded.id,
        extra: "None",
        without: "None",
        quantity: pizza.quantity || 1,
        price: (pizza.quantity * pizza.price),
        address: address
    })

    useEffect(() => {


        if (ingredients.length === 0) {
            let carrito = JSON.parse(sessionStorage.getItem("ORDER"))
            setIngredients(pizza.description.split(","))
            if (carrito) {
                let result = carrito.filter(item => item.idPizza !== pizza.id)
                result.push(bodyPizza)
                sessionStorage.setItem('ORDER', JSON.stringify(result))
            } else {
                sessionStorage.setItem('ORDER', JSON.stringify([bodyPizza]))

            }

        }



    })

    const AccordionHandler = (item) => {

        setIsChecked(true)
        if (item.extra) {
            setExtras(item)
            let temp = bodyPizza
            temp.extra = item.extra
            setBodyPizza(temp)
            onUpdate(temp)

        }
        if (item.without) {
            setWithout(item)
            let temp = bodyPizza
            temp.without = item.without
            setBodyPizza(temp)
            onUpdate(temp)
        }


    }


    return (
        <Accordion>
            <Accordion.Item>
                <Accordion.Header>{pizza.name}</Accordion.Header>
                <Accordion.Body>
                    <div className="mb-2">
                        {bodyPizza.extra}
                        <IngredientAccordionExtra onUpdate={AccordionHandler} ingredients={ingredients} />
                    </div>

                    <div className="mb-2">
                        {bodyPizza.without}
                        <IngredientAccordionWithout onUpdate={AccordionHandler} ingredients={ingredients} />
                    </div>


                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}