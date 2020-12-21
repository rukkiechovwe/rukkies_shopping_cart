import React, { createContext, useContext, useReducer } from "react";

const INITIAL_STATE = {
    quantity: 1
};
const QuantityContext = createContext()
const quantityReducer = (state, action) => {

}

export const QuantityProvider = (props) => {
    const [quantity, dispatch] = useReducer(quantityReducer, INITIAL_STATE);
    return (
        <QuantityContext.Provider value={{ quantity, dispatch }}>
            { props.children}
        </QuantityContext.Provider>
    )
}
export const useQuantityContext = () => {
    const c = useContext(QuantityContext);
    return c;
};