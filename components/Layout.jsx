import Head from "next/head";
import Styles from "@/styles/Layout.module.css";
import Header from "./header";
import Footer from "./footer";
import Showcase from "./showcase";
import { useRouter } from "next/router";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />

      {/* if you want to limit the showcase to only show on the home page then we use the useRouter hook */}
      {router.pathname === "/" && <Showcase />}
      <div className={Styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "DJ Events | Find the Hottest DJs around you",
  keywords: "DJ, Music, Events, Entertainment",
  description: "Find the Hottest DJ Events",
};
