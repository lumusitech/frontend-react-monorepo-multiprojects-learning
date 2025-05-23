import { useReducer, useCallback } from "react";
import { cartReducer } from "../reducers/cartReducer"; // Tu reducer
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from "../actions/cartActionTypes";
import { CartContext } from "./CartContext";
import { getFromLocalStorage } from "../storage/localStorageManagement";

const initialState = getFromLocalStorage("cart") ?? [];

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = useCallback(
    (product) => {
      dispatch({ type: ADD_TO_CART, payload: product });
    },
    [dispatch]
  );

  const removeFromCart = useCallback(
    (product) => {
      dispatch({ type: REMOVE_FROM_CART, payload: product });
    },
    [dispatch]
  );

  const clearCart = useCallback(() => {
    dispatch({ type: CLEAR_CART });
  }, [dispatch]);

  const getTotalItems = useCallback(() => {
    return cartState.reduce((total, item) => total + item.qty, 0);
  }, [cartState]);

  const getTotalPrice = useCallback(() => {
    return cartState.reduce(
      (total, item) => total + item.qty * (item.price || 0),
      0
    );
  }, [cartState]);

  const contextValue = {
    cart: cartState,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalItems,
    getTotalPrice,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
