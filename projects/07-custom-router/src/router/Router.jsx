import { useEffect, useState, Children } from "react";
import { EVENTS } from "./utils/const";

import { match } from "path-to-regexp";

export default function Router({
  children,
  routes = [],
  defaultComponent = () => <h1>404</h1>,
}) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  let routeParams = {};

  // add routes from child <Route /> components
  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type;
    const isRoute = name === "Route";

    return isRoute ? props : null;
  });

  const routesToUse = routes.concat(routesFromChildren).filter(Boolean);

  const Page = routesToUse.find(({ path }) => {
    if (path === currentPath) return true;

    // using path-to-regexp library for detect dynamic pages like /search/:query, query is a dynamic route
    const matcherUrl = match(path, { decode: decodeURIComponent });
    const matched = matcherUrl(currentPath);
    if (!matched) return false;

    // if matched, we save dynamics params
    routeParams = matched.params;
    return true;
  })?.Component;

  return (
    <>
      {Page ? (
        <Page routeParams={routeParams} />
      ) : (
        defaultComponent({ routeParams })
      )}
    </>
  );
}
