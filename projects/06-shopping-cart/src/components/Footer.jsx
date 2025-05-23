import { IS_DEVELOPMENT } from "../config";
import "./Footer.css";

import { useFilters } from "../hooks/useFilters";
import { useCart } from "../hooks/useCart";

export const Footer = () => {
  const { filters } = useFilters();
  const { cart } = useCart();

  const singleCart = cart.map(({ id, title, qty }) => ({
    id,
    title,
    qty,
  }));

  return (
    <footer className="footer">
      {IS_DEVELOPMENT && (
        <div>
          <pre>Active filters: {JSON.stringify(filters, null, 2)}</pre>
          <pre>Products in Cart: {JSON.stringify(singleCart, null, 2)}</pre>
        </div>
      )}
      <h4>Technical test - React</h4>
      <span>@lumusitech</span>
      <h5>Shopping cart with useContext and useReducer</h5>
    </footer>
  );
};
