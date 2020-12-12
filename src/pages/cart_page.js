import React from "react";
import { useCartContext } from "../context/cart_context";
import { Button, ListGroup } from "react-bootstrap";
import NavComponent from "../components/nav_component";
import { Link } from "react-router-dom"

function CartPage() {
  const { cart, dispatch } = useCartContext();
  // let itemQuantity = 0
  // const handleQ = (itemQuantity, actionType) => {
  //   switch (actionType) {
  //     case "add":
  //       itemQuantity++
  //       break;
  //     case "remove":
  //       itemQuantity--
  //       break;
  //     default:
  //       break;
  //   }
  // }
  return (
    <div>
      <NavComponent cart={cart} />
      <p>Cart Total: {cart.total}</p>
      <ListGroup>
        {cart.items.map((item, i) => {
          const { price, title } = item;
          return (
            <ListGroup.Item key={i}>
              {/* <div className="row q-btn">
                <button onClick={() => handleQ(item, 'add')}>+</button>
                <button onClick={() => handleQ(item, 'remove')} >-</button>
              </div> */}
              {title}: $ {price}
              {/* <span>Quantity: {itemQuantity}</span> */}
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
      <button>
        <Link to="/login">checkout</Link>
      </button>
      {cart.items.length === 0 && <center>CART IS EMPTY</center>}
    </div>
  );
}

export default CartPage;
