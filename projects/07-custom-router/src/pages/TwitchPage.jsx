import { Link } from "../router/components/Link";

export default function TwitchPage() {
  return (
    <>
      <h1>Twitch</h1>
      <Link to="/">Go Home</Link> | <Link to="/about">Go About</Link>
    </>
  );
}
