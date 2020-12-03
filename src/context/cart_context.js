import React, { createContext, useReducer, useContext } from "react";
const INITIAL_STATE = {
  total: 0,
  items: [],
};

const CartContext = createContext();
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: state.items.concat(action.item),
        total: state.total + 1,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item, i) => i !== action.payload),
        total: state.total - 1,
      };
    default:
      throw new Error("Action Type required");
  }
};

export const CartProvider = (props) => {
  const [cart, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context !== undefined) {
    return context;
  }
  return new Error("Context must be used under a provider");
};
