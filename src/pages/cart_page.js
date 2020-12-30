import React from "react";
import { useCartContext } from "../context/cart_context";
import { Button, ListGroup } from "react-bootstrap";
import NavComponent from "../components/nav_component";
import "./cart_page.css";

function CartPage() {
  const { cart, dispatch } = useCartContext();
  return (
    <div>
      <NavComponent cart={cart} />
      <div className="cart-body d-row">
        <p>Cart Total: {cart.total}</p>
        <ListGroup className="c-con">
          {cart.items.map((item, i) => {
            const { price, title, quantity } = item;
            return (
              <li key={i} className="d-row li-div">
                <div className="d-col">
                  <span className="cart-title">{title} </span>
                  <span>
                    $ {price} (total: {(price * quantity).toFixed(2)})
                  </span>
                </div>
                <span>Quantity: {quantity}</span>
                <Button
                  variant="danger"
                  size="sm"
                  style={{ marginLeft: "20px", padding: "2px 5px" }}
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payload: i })
                  }
                >
                  REMOVE
                </Button>
              </li>
            );
          })}
        </ListGroup>
        <div>
          
        </div>
      </div>
      {cart.items.length === 0 && <center>CART IS EMPTY</center>}
    </div>
  );
}

export default CartPage;
