import { useState } from "react";
import { Accordion, Form } from "react-bootstrap";

export default function IngredientAccordionExtra({ ingredients, onUpdate }) {
    const [without, setWithout] = useState([])
    const [checkedState, setCheckedState] = useState(
        new Array(ingredients.length).fill(false)
    )


    const CheckBoxHandler = (position, e) => {
        let action = e.target.checked
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
        let ingredient = ingredients[position];
        if (without.length === 0) {
            setWithout([ingredient])
        } else {
            if (action === true) {
                let temp = without
                temp.push(ingredient)
                setWithout(temp)
                onUpdate({ without: temp.toString() })
            } else {
                let temp = without
                let result = temp.filter(item => item != ingredient)
                setWithout(result)
                onUpdate({ without: result.toString() })
            }
        }
    }
    return (
        <Accordion>
            <Accordion.Item>
                <Accordion.Header>Without</Accordion.Header>
                <Accordion.Body>
                    {
                        ingredients.map((ingredient, index) => {
                            return (

                                <Form>
                                    <div className="ingredients-list-item d-flex">
                                        <div className="left-section me-5">
                                            <input
                                                type="checkbox"
                                                id={`custom-checkbox-${index}`}
                                                name={ingredient}
                                                value={ingredient}
                                                checked={checkedState[index]}
                                                onChange={(e) => { CheckBoxHandler(index, e) }}
                                            />
                                        </div>
                                        <label htmlFor={`custom-checkbox-${index}`}>{ingredient}</label>
                                    </div>
                                </Form>

                            )
                        })
                    }
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}