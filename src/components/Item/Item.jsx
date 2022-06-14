import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Item({ producto }) {

    return (
        <>       
            <div>
                <CardGroup className="col-md-6 text-center container" style={{ width: '27rem', padding: '10px' }}>
                    <Card>
                        <Card.Img variant="top" src={producto.foto} />
                        <Card.Body>
                            <Card.Title className='text-uppercase'>
                                {producto.nombre}
                                </Card.Title>
                            <Card.Text>{producto.descripcion} </Card.Text>
                            <Card.Text>${producto.precio} </Card.Text>
                            <Link to={`/item/${producto.id}`}>
                                <Button variant="success">Ver detalle del producto</Button>{' '}
                            </Link>
                        </Card.Body>
                        <Card.Footer>
                            <small className="test-muted">Stock disponible: {producto.stock}</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        </>
    )
}

export default Item