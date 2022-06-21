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

    const agregar = () => {
        onAdd(count)
    }

    return (
        <>
            <div className='contenedor_counter'>
                <Button variant="outline-primary" className="counter" onClick={restar}>-</Button>
                <p className="counter counter_number">{count} </p>
                <Button variant="outline-primary" className="counter" onClick={sumar}>+</Button>
            </div>
            <div className='contenedor_btnCarrito'>
                <Button variant="success" className="btn_agregarCarrito" onClick={agregar}>Agregar al carrito</Button>
            </div>
        </>
    )
}

export default ItemCount