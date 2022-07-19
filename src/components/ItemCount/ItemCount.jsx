import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import "./ItemCount.css"

function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial)

    function add() {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    function substract() {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const addProductToCart = () => {
        onAdd(count)
    }

    return (
        <>
            <div className='counter-container'>
                <Button variant="outline-primary" className="counter" onClick={substract}>-</Button>
                <p className="counter counter_number">{count} </p>
                <Button variant="outline-primary" className="counter" onClick={add}>+</Button>
            </div>
            <div className='btnCart-container'>
                <Button variant="success" className="btn_addCart" onClick={addProductToCart}>Agregar al carrito</Button>
            </div>
        </>
    )
}

export default ItemCount