import React, { createContext, useReducer, useContext } from "react"

// let create our cart state we want to manage
const INITIAL_STATE = {
    'total': 0,
    'items': []
}

// create our cart context
const CartContext = createContext(); // this is our cart context

const cardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, items: addItemToCart(state.items, action.payload), total: getTotal() }

        default:
            throw new Error('Action Type required')
    }
}

////////////////  
//are you there?
// are are are are are you there? are you there?yesssss
// okayy bosss
// no lagging? to github so i'll be fast

const addItemToCart = (cart, item) => {
    return cart.push(item); // lets just add it for now
}

const getTotal = (cart) => cart.length;