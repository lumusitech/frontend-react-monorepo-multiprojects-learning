import { Link } from "../router/components/Link";

const i18n = {
  es: {
    title: "Página Acerca de",
    description:
      "Soy lumusitech e hice un router de react personalizado desde cero ",
    buttonHome: "Ir a Inicio",
    buttonTwitch: "Ir a Twitch",
  },
  en: {
    title: "About Page",
    description:
      "I am lumusitech and I made a custom react router from scratch",
    buttonHome: "Go to Home",
    buttonTwitch: "Go to Twitch",
  },
};

const useI18n = (lang) => {
  return i18n[lang] || i18n.en;
};

export default function AboutPage({ routeParams }) {
  const { title, description, buttonHome, buttonTwitch } =
    useI18n(routeParams.lang) ?? "es";

  return (
    <>
      <h1>{title}</h1>
      <div>
        <p>{description}</p>
        <img
          src="https://pbs.twimg.com/profile_images/1469790772589256707/AwCBsjQm_400x400.jpg"
          alt="profile photo of lumusitech"
        />
      </div>
      <Link to="/">{buttonHome}</Link> |{" "}
      <Link to="/twitch">{buttonTwitch}</Link>
    </>
  );
}
