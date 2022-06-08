import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
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
            <Button variant="outline-primary" className="counter" onClick={restar}>-</Button>
            <p className="counter counter_number">{count} </p>
            <Button variant="outline-primary" className="counter" onClick={sumar}>+</Button>
            <Button variant="primary" className="btn_agregarCarrito" onClick={() => onAdd(count)}>Agregar al carrito</Button>
        </>
    )
}

export default ItemCount