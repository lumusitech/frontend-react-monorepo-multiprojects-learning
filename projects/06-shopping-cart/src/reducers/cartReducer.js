import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
  handleAddToCart,
  handleClearCart,
  handleRemoveFromCart,
} from "../actions";

const actionHandlers = {
  [ADD_TO_CART]: handleAddToCart,
  [REMOVE_FROM_CART]: handleRemoveFromCart,
  [CLEAR_CART]: handleClearCart,
};

export const cartReducer = (state, action) => {
  const handler = actionHandlers[action.type];

  return handler ? handler(state, action) : state;
};
