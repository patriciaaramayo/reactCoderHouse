import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import "./ItemCount.css"


function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial)

    function sumar() {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    function restar() {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <>
            <Card style={{ width: '18rem' }} className="text-center">
                <Card.Img variant="top" src="https://i.pinimg.com/originals/b1/ae/90/b1ae90a924eaa010c51fa934cad0940e.jpg" />
                <Card.Body>
                    <Card.Title>Anuales</Card.Title>
                    <Card.Text>
                        Pensamientos
                    </Card.Text>
                    <Button variant="outline-primary" className="counter" onClick={restar}>-</Button>
                    <input type="text" className="btn counter counter_number" defaultValue={count} />
                    <Button variant="outline-primary" className="counter" onClick={sumar}>+</Button>
                    <Button variant="primary" onClick={() => onAdd(count)}>Agregar al carrito</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemCount