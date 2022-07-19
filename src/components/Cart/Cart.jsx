import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Button } from "react-bootstrap";
import "./Cart.css";
import { Link, NavLink } from "react-router-dom";
import CartList from "../CartList/CartList";

function Cart() {
  const { cart, EmptyCart, PriceTotal, IconCart } = useCartContext();

  return (
    <>
      <div>
        {cart.length === 0 ? (
          <div className="text-center">
            <div className="message">
              <h4>El carrito esta vac&iacute;o</h4>
            </div>
            <div className="message">
              <Link to="/">
                <button className="btn btn-success btn-space">
                  Ver Productos disponibles
                </button>
              </Link>
            </div>
          </div>
        ) : (
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
                  <CartList cart={cart} />
                </div>
              </div>
              <div className="my-3"></div>
              <div className="row">
                <div className="col-4">
                  <span>La cant. total del carrito es {IconCart()} items.</span>
                </div>
                <div className="col-4">
                  <span>El precio total es: ${PriceTotal()}</span>
                </div>
                <div className="col-3 ">
                  {" "}
                  <Button variant="danger" className="deleteCar" onClick={EmptyCart}>
                    Borrar carrito
                  </Button>
                  <NavLink to="/checkout">
                    <Button variant="success">Finalizar compra</Button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
