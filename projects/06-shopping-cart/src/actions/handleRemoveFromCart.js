import { saveToLocalStorage } from "../storage/localStorageManagement";

export const handleRemoveFromCart = (state, action) => {
  const product = action.payload;
  const newCart = state.filter((item) => item.id !== product.id);
  saveToLocalStorage("key", newCart);
  return newCart;
};
