import React from "react";
import classes from "./product_modal.module.css";
import { Col, Card } from "react-bootstrap";
import { useCartContext } from "../context/cart_context";

function ProductModal({ product, hide }) {
  const { dispatch } = useCartContext();
  return (
    <div className={classes.container}>
      <div className={classes.product}>
        <Col>
          <Card>
            <div className="card-body">
              <div className="card-img-wrap">
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img"
                ></img>
              </div>
              <h1 className="">{product.title}</h1>
              <span className="">{product.description}</span>
              <Card.Text>$ {product.price}</Card.Text>
              <button
                className="cart-btn"
                onClick={() => dispatch({ type: "ADD_TO_CART", item: product })}
              >
                Add to Cart
              </button>
              <div className="mx-auto mt-2">
                <button className="btn-light btn-sm" onClick={hide}>
                  Cancel
                </button>
              </div>
            </div>
          </Card>
        </Col>
      </div>
    </div>
  );
}

export default ProductModal;
