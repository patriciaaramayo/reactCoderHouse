import React from 'react'
import { useCartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Button } from 'react-bootstrap'
import "./Cart.css"
import { Link } from 'react-router-dom'

function Cart() {

  const { cart, EmptyCart, PriceTotal, IconCart } = useCartContext()

  return (
    <>
      <div>
        {
          (cart.length == 0) ?
            <div className="text-center">
              <div className='mensaje'>
                <h4>El carrito esta vac&iacute;o</h4>
              </div>
              <div className='mensaje'>
                <Link to='/'>
                  <button className="btn btn-success btn-space">Ver Productos disponibles</button>
                </Link>
              </div>
            </div>
            :
            <div>
              <div className="container py-5">
                <div className="cart-outer">
                  <div className="cart-inner">
                    <div className="bg-light px-4 py-3">
                      <div className="row fw-normal text-uppercase">
                        <div className="col-5">Producto</div>
                        <div className="col-2">Precio</div>
                        <div className="col-2">Cantidad</div>
                        <div className="col-1 text-center">Eliminar</div>
                      </div>
                    </div>
                    {
                      cart.map((i) => <CartItem key={i.item.producto.id} product={i.item.producto} cant={i.item.cantidad} />)
                    }
                  </div>
                </div>
                <div className="my-3"></div>
                <div className="row">
                  <div className="col-4">
                    <span>La cant. total del carrito es {IconCart()} items.</span>
                  </div>
                  <div className="col-5"><span>El precio total es: ${PriceTotal()}</span>
                  </div>
                  <div className="col-2 borrarCarrito">  <Button variant="danger" onClick={EmptyCart}>Borrar carrito</Button></div>
                </div>
              </div>
            </div>
        }
      </div>
    </>
  )
}

export default Cart

