import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons.jsx";

export const Cart = () => {
  const cartCheckboxId = useId();
  return (
    <>
      <label className="cart-label" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxId} />
    </>
  );
};
