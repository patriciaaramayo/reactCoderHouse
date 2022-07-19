import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import Img from '../../images/mediosPago.jpg'

function ItemDetail({ product }) {
  const { cart, addToCart } = useCartContext();
  const [quantity, setQuantity] = useState();

  function onAdd(quantity) {
    setQuantity(quantity);
    addToCart({ product, quantity });
  }

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col className="img-prod">
            <img src={product.photo} className="img-fluid mb-3" alt="" />
          </Col>
          <Col>
            <div className="col-md-8 mt-2">
              <h1 className="h4 d-inline me-2 text-uppercase">
                {" "}
                {product.name}
              </h1>
              <span className="badge bg-success me-2">
                {product.category}
              </span>
              <div className="row small mb-3 mt-2">
                <span className="col-sm-2">Stock</span>
                <span className="col-sm-10">{product.stock}</span>
                <span className="col-sm-2">Color</span>
                <div className="col-sm-10">
                  <button className="btn btn-sm btn-danger p-2 me-2"></button>
                  <button className="btn btn-sm btn-primary p-2 me-2"></button>
                </div>
              </div>
              <div className="mb-3">
                <span className="fw-bold h5 me-2">${product.price}</span>
                <del className="small me-2">
                  ${(product.price * 20) / 100 + parseInt(product.price)}
                </del>
                <span className="rounded p-1 bg-warning  me-2 small">-20%</span>
              </div>
              <div className="m-left-none m-bottom-quarter">
                    <span className="payment">
                      <img src={Img} style={{ width: '150px', height: '30px', marginBottom:"10px" }} />
                    </span>
              </div>

              {quantity ? (
                <div>
                  <Link to="/cart">
                    <button className="btn btn-success btn-space">
                      Terminar mi compra
                    </button>
                  </Link>
                  <Link to="/">
                    <button className="btn btn-success btn-space">
                      Seguir comprando
                    </button>
                  </Link>
                </div>
              ) : (
                <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
              )}
              <div>
                <p className="mb-2 small">{product.largeDescription}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ItemDetail;