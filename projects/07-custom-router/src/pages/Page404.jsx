import { Link } from "../router/components/Link";

export default function Page404() {
  return (
    <>
      <h1>404 - this page was not found</h1>
      <img
        src="https://media.tenor.com/DA4ET79DlQsAAAAM/crash-and.gif"
        alt="Dog burning up, meme this is fine"
      />
      <br />
      <Link to="/">Go back Home</Link>
    </>
  );
}
