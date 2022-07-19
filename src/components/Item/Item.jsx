import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Item({ product }) {

    return (
        <>
            <div>
                <CardGroup className="col-md-6 text-center container" style={{ width: '27rem', padding: '10px' }}>
                    <Card>
                        <Link to={`/item/${product.id}`}>
                            <Card.Img variant="top" src={product.photo} style={{ width: '410px', height: '273px' }}/>
                        </Link>
                        <Card.Body>
                            <Card.Title className='text-uppercase'>
                                {product.name}
                            </Card.Title>
                            <Card.Text>{product.description} </Card.Text>
                            <Card.Text>${product.price} </Card.Text>
                            <Link to={`/item/${product.id}`}>
                                <Button variant="success">Ver detalle del producto</Button>{' '}
                            </Link>
                        </Card.Body>
                        <Card.Footer>
                            <small className="test-muted">Stock disponible: {product.stock}</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        </>
    )
}

export default Item