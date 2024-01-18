import Link from 'next/link';
import Styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={Styles.footer}>
      <p>
        &copy;{' '}
        <span>
          {' '}
          {new Date().getUTCFullYear()}, All wrong reserved. DJ Events.
        </span>
      </p>
      <p>
        <Link href='/about'>About this Project?</Link>
      </p>
    </footer>
  );
}
