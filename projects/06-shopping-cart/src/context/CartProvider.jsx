import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // My way
  //   const addToCart = (product) => {
  //     const productInCart = cart.find((p) => p.id === product.id);

  //     if (!productInCart) setCart((prev) => [{ ...product, qty: 1 }, ...prev]);
  //     else {
  //       setCart(
  //         cart.map((product) => {
  //           return product.id === productInCart.id
  //             ? { ...product, qty: product.qty + 1 }
  //             : product;
  //         })
  //       );
  //     }
  //   };

  const addToCart = (product) => {
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);

      newCart[productInCartIndex].qty += 1;

      return setCart(newCart);
    }

    setCart((prev) => [...prev, { ...product, qty: 1 }]);
  };

  const removeFromCart = (product) => {
    setCart((prev) => prev.filter((item) => item.id !== product.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
