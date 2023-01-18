import { useEffect } from "react"
import { useState } from "react"
import { Accordion, Form } from "react-bootstrap"
import jwt_decode from "jwt-decode";
import IngredientAccordionExtra from "./IngredientAccordionExtra"
import IngredientAccordionWithout from "./IngredientAccordionWithout"

export default function OrderAccordion({pizza,onUpdate}){
    let decoded = jwt_decode(sessionStorage.getItem("SAVEJWT"))

    console.log(decoded.id)
    console.log(pizza)
    const [isChecked,setIsChecked] = useState(false)
    const [ingredients, setIngredients] = useState([])
    const [extras,setExtras] = useState({})
    const [without,setWithout] = useState({})
    const [bodyPizza,setBodyPizza] = useState({
        idPizza: pizza.id,
        userId: parseInt(decoded.id),
        extra: "None",
        without: "None",
        quantity: pizza.quantity || 1,
        price: (pizza.quantity * pizza.price),
        address: "Calle i"
    })
    

    const AccHandler = () => {
        console.log("ENTROOOOOO")
        
        
    }
    
    
    
    const AccordionHandler = (item) => {
        setIsChecked(true)
        if(item.extras){
            setExtras(item)
            let temp = bodyPizza
            temp.extras = item.extras
            setBodyPizza(temp)
            onUpdate(temp)
        }
        if (item.without){
            setWithout(item)
            let temp = bodyPizza
            temp.without = item.without
            setBodyPizza(temp)
            onUpdate(temp)
        }
        
    }
    

    

    useEffect(()=>{
        if(ingredients.length === 0){
            setIngredients(pizza.description.split(","))
        }
        if(isChecked){
            console.log("Entro pero mucho")
        }
    })
    

    console.log(bodyPizza)

    return (
        <Accordion>
            <Accordion.Item>
                <Accordion.Header>{pizza.name}</Accordion.Header>
                <Accordion.Body>
                        <div className="mb-2">
                            {bodyPizza.extras}
                            <IngredientAccordionExtra onClick={()=>{AccHandler()}} onUpdate={AccordionHandler} ingredients={ingredients}/>
                        </div>

                        <div className="mb-2">
                            {bodyPizza.without}
                            <IngredientAccordionWithout onUpdate={AccordionHandler} ingredients={ingredients}/>
                        </div>


                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}