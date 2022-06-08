import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Card } from 'react-bootstrap'

function Item({ producto }) {

    function onAdd(cantidad) {
        console.log(cantidad);
    }

    return (
        <div className='col-md-4 p-1' >
            <Card className="text-center">
                <Card.Img variant="top" src={producto.foto} />
                <Card.Body>
                    <Card.Text>  {producto.nombre}</Card.Text>
                    <Card.Text>  {producto.categoria}</Card.Text>
                    <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
                </Card.Body>
                <Card.Footer>Ver detalle</Card.Footer>
            </Card>
        </div>

    )
}

export default Item