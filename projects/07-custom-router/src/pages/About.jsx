import { Link } from "../components/Link";

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <div>
        <p>I am lumusitech and I create a custom react router from scratch</p>
        <img
          src="https://pbs.twimg.com/profile_images/1469790772589256707/AwCBsjQm_400x400.jpg"
          alt="profile photo of lumusitech"
        />
      </div>
      <Link to="/">Go Home</Link> | <Link to="/twitch">Go Twitch</Link>
    </>
  );
}
