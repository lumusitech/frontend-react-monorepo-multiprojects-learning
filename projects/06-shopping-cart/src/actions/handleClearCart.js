import { saveToLocalStorage } from "../storage/localStorageManagement";

export const handleClearCart = () => {
  saveToLocalStorage("cart", []);
  return [];
};
