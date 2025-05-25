import { lazy, Suspense } from "react";

import "./App.css";
import Router from "./router/Router";
import { Route } from "./router/components/Route";

import HomePage from "./pages/Home";
const AboutPage = lazy(() => import("./pages/About"));
const Page404 = lazy(() => import("./pages/Page404"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const TwitchPage = lazy(() => import("./pages/TwitchPage"));

// Router mode 1
const routes = [
  {
    path: "/twitch",
    Component: TwitchPage,
  },
  {
    path: "/search/:query",
    Component: SearchPage,
  },
];

function App() {
  return (
    <main>
      <h1>Custom Router</h1>
      <hr />

      <Suspense fallback={<div>Loading...</div>}>
        {/* Router mode 1 - pass routes as array to <Router />*/}
        <Router routes={routes} defaultComponent={Page404}>
          {/* Router mode 2 - Children <Route /> - read children props like path and Component */}
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
