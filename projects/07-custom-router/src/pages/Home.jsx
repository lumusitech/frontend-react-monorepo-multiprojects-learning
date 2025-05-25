import { Link } from "../router/components/Link";

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <p>This is an example page for create a react router from scratch</p>
      <Link to="/about">Go About</Link> | <Link to="/twitch">Go Twitch</Link>
    </>
  );
}
