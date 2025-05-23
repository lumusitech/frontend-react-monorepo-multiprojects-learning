import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons.jsx";

import "./Cart.css";
import { useCart } from "../hooks/useCart";

const CartItem = ({ title, price, thumbnail, qty, addToCart }) => {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> ${price}
      </div>

      <footer>
        <small>Qty: {qty}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
};

export const Cart = () => {
  const cartCheckboxId = useId();
  const { cart, addToCart, clearCart } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              {...product}
              addToCart={() => addToCart(product)}
            />
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};
