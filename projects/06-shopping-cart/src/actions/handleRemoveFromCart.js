export const handleRemoveFromCart = (state, action) => {
  const product = action.payload;
  return state.filter((item) => item.id !== product.id);
};
