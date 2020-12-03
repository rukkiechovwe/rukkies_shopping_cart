import React from "react";
import { useCartContext } from "../context/cart_context";

function CartPage() {
  const { cart, dispatch } = useCartContext();
  return (
    <div>
      <p>Cart Total: {cart.total}</p>
      <ul>
        {cart.items.map((item, i) => {
          const { price, title } = item;
          return (
            <li key={i}>
              {title}: $ {price}
              <span
                style={{ color: "red", cursor: "pointer" }}
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: i })
                }
              >
                {" "}
                "REMOVE"
              </span>
            </li>
          );
        })}
      </ul>
      {cart.items.length === 0 && <center>CART IS EMPTY</center>}
    </div>
  );
}

export default CartPage;
