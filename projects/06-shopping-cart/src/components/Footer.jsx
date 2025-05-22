import { IS_DEVELOPMENT } from "../config";
import "./Footer.css";

import { useFilters } from "../hooks/useFilters";

export const Footer = () => {
  const { filters } = useFilters();

  return (
    <footer className="footer">
      {IS_DEVELOPMENT && (
        <p>Active filters - {JSON.stringify(filters, null, 2)}</p>
      )}
      <h4>Technical test - React</h4>
      <span>@lumusitech</span>
      <h5>Shopping cart with useContext and useReducer</h5>
    </footer>
  );
};
