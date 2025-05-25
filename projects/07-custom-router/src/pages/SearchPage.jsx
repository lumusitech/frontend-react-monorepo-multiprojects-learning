import { useEffect } from "react";
import { Link } from "../router/components/Link";

export const SearchPage = ({ routeParams }) => {
  useEffect(() => {
    document.title = `search ${routeParams.query}`;
  }, [routeParams.query]);

  return (
    <>
      <h1>Search params:</h1>
      <pre>{JSON.stringify(routeParams, null, 2)}</pre>
      <br />
      <Link to="/">Go back to Home</Link>
    </>
  );
};
