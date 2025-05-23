import { saveToLocalStorage } from "../storage/localStorageManagement";

export const handleAddToCart = (state, action) => {
  const product = action.payload;

  const productInCartIndex = state.findIndex((item) => item.id === product.id);

  if (productInCartIndex >= 0) {
    const newCart = [...state];

    newCart[productInCartIndex] = {
      ...newCart[productInCartIndex],
      qty: newCart[productInCartIndex].qty + 1,
    };

    saveToLocalStorage("cart", newCart);

    return newCart;
  } else {
    const newCart = [...state, { ...product, qty: 1 }];
    saveToLocalStorage("cart", newCart);
    return newCart;
  }
};
