export const handlerAddToCart = (state, action) => {
  const product = action.payload;
  const productInCartIndex = state.findIndex((item) => item.id === product.id);

  if (productInCartIndex >= 0) {
    const newState = structuredClone(state);

    newState[productInCartIndex].qty += 1;

    return newState;
  }

  return [...state, { ...product, qty: 1 }];
};
