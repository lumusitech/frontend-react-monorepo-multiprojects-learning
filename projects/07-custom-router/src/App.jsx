import "./App.css";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

import { Page404 } from "./pages/Page404";
import { SearchPage } from "./pages/SearchPage";
import { TwitchPage } from "./pages/TwitchPage";
import { Router } from "./router/Router";
import { Route } from "./router/components/Route";

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

      {/* Router mode 1 - pass routes as array to <Router />*/}
      <Router routes={routes} defaultComponent={Page404}>
        {/* Router mode 2 - Children <Route /> - read children props like path and Component */}
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
      </Router>
    </main>
  );
}

export default App;
