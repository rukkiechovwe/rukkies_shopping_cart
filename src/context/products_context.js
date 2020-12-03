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
  // this is my provider, it has the value of
  // [my products state which is INITIAL_STATE and dispatchProductsAction]
  // which is used to update my state
  // see it as
  // const [products, setProducts] = useState([])
  // where products is the state and setProducts is the function to update the state
  // you get? small, don't delete the comments here, okayyyyyy
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
