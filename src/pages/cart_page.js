import React from "react";
import { useCartContext } from "../context/cart_context";
import { Button, ListGroup } from "react-bootstrap";
import NavComponent from "../components/nav_component";

function CartPage() {
  const { cart, dispatch } = useCartContext();
  return (
    <div>
      <NavComponent cart={cart} />
      <p>Cart Total: {cart.total}</p>
      <ListGroup>
        {cart.items.map((item, i) => {
          const { price, title } = item;
          return (
            <ListGroup.Item key={i}>
              {title}: $ {price}
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
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      {cart.items.length === 0 && <center>CART IS EMPTY</center>}
    </div>
  );
}

export default CartPage;
