import "./App.css";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import { Router } from "./Router";
import { Link } from "./components/Link";
import { Page404 } from "./pages/Page404";

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
    Component: () => (
      <>
        <h1>Twitch</h1>
        <Link to="/">Go Home</Link> | <Link to="/about">Go About</Link>
      </>
    ),
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
