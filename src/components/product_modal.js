import React, { useState } from "react";
import classes from "./product_modal.module.css";
import "./products.css";
import { Col, Card } from "react-bootstrap";
import { useCartContext } from "../context/cart_context";
function ProductModal({ product, hide }) {
  const { dispatch } = useCartContext();
  const [quantity, setQuantity] = useState(product.quantity);

  //
  const handleQuantity = (action) => {
    let q = quantity;
    switch (action) {
      case "add":
        setQuantity(++q);
        break;
      case "remove":
        if (quantity > 0) setQuantity(--q);
        break;
      default:
        break;
    }
  };
  //
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
              <div className="d-row quantity-div">
                <Card.Text>$ {product.price}</Card.Text>
                <div className="d-row">
                  <button
                    className="q-btn"
                    onClick={() => handleQuantity("add")}
                  >
                    +
                  </button>
                  <span>{quantity}</span>
                  <button
                    className="q-btn"
                    onClick={() => handleQuantity("remove")}
                  >
                    -
                  </button>
                </div>
              </div>
              <button
                className="cart-btn"
                onClick={() => {
                  product.quantity = quantity;
                  dispatch({ type: "ADD_TO_CART", item: product });
                  hide();
                }}
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
