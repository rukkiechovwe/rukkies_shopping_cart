import React, { createContext, useContext, useReducer } from "react";

const ProductContext = createContext();
const INITIAL_STATE = {
  products: [],
  isLoading: true,
};
const productReducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.products,
        isLoading: false,
      };
    default:
      throw new Error("action type required");
  }
};

export const ProductProvider = (props) => {
  const [products, dispatchProductsAction] = useReducer(
    productReducer,
    INITIAL_STATE
  );
  return (
    <ProductContext.Provider value={{ products, dispatchProductsAction }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export const useProductsContext = () => {
  const c = useContext(ProductContext);
  return c;
};
