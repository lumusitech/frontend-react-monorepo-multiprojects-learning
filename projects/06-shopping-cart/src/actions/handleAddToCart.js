// features/cart/actions/handleAddToCart.js
export const handleAddToCart = (state, action) => {
  const product = action.payload;

  const productInCartIndex = state.findIndex((item) => item.id === product.id);

  if (productInCartIndex >= 0) {
    const newCart = [...state];

    newCart[productInCartIndex] = {
      ...newCart[productInCartIndex],
      qty: newCart[productInCartIndex].qty + 1,
    };

    return newCart;
  } else {
    return [...state, { ...product, qty: 1 }];
  }
};
