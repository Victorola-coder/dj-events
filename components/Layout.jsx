import Head from 'next/head';
import Styles from '../styles/Layout.module.css';
import Header from './header';
import Footer from './footer';

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
      <div className={Styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'DJ Events | Find the Hottest DJs around you',
  keywords: 'DJ, Music, Events, Entertainment',
  description: 'Find the Hottest DJ Events',
};
