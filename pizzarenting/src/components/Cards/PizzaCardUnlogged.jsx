import { Button, Card } from "react-bootstrap"

export default function PizzaCardUnlogged({ pizza }) {



    return (
        <Card className='m-3' style={{ height: "25rem", width: '18rem' }}>
            <Card.Img variant="top" src={pizza.imagen} />
            <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
                <Card.Text>
                    {pizza.description}
                </Card.Text>
            </Card.Body>


        </Card>
    )

}