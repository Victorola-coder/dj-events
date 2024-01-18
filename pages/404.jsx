import Link from 'next/link';
import Layout from '../components/Layout';
import style from '../styles/notfound.module.css';

export default function Custom404() {
  return (
    <Layout>
      <div className={style.error}>
        <h1>404 - Page Not Found</h1>
        <p>
          find your way&nbsp;
          <Link href='/'>Home</Link>
        </p>
      </div>
    </Layout>
  );
}
