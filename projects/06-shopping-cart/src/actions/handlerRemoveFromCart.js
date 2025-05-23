export const handlerRemoveFromCart = (state, action) => {
  const product = action.payload;
  return state.filter((item) => item.id !== product.id);
};
