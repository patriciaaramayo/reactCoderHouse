import { Button } from 'react-bootstrap';
import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';

function CartItem({ product, cant }) {
    const { RemoveItem } = useCartContext()
    const { id, name, category, price, photo } = product;
    return (
        <>
            <div className="p-4 border-bottom">
                <div className="row d-flex align-items-center bord">
                    <div className="col-5">
                        <div className="d-flex align-items-center">
                            <Link to={`/item/${id}`} style={{ textDecoration: 'none' }}>
                                <img className="img-fluid" src={photo} alt="..." width="75" />
                            </Link>
                            <div className="ms-3">
                                <Link to={`/item/${id}`} style={{ textDecoration: 'none' }}>
                                    <h5 className="mb-0 text-dark fw-normal">{name}</h5>
                                    <span className="text-muted">{category}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-2"><span>${price}</span></div>
                    <div className="col-2">
                        <span>{cant}</span>
                    </div>
                    <div className="col-1 text-center">
                        <Button variant="danger" onClick={() => RemoveItem(id)}>Eliminar</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem