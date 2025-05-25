import "./App.css";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

import { Page404 } from "./pages/Page404";
import { SearchPage } from "./pages/SearchPage";
import { TwitchPage } from "./pages/TwitchPage";
import { Router } from "./router/Router";

const routes = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
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
      <Router routes={routes} defaultComponent={Page404} />
    </main>
  );
}

export default App;
