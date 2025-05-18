import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useState, type ReactNode } from 'react';
import styles from '../styles/Layout.module.css';
import Background from './Background';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  hero?: ReactNode;
}

export default function Layout({
  children,
  title = '当社サービス',
  hero,
}: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Company Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Background />
      <header className={styles.header}>
        {!sidebarOpen && (
          <button
            className={styles.menuToggle}
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <div />
            <div />
            <div />
          </button>
        )}
        <div className={styles.logo}>
          <Link href="/">
            <img
              src="/images/company-logo.png"
              alt="Company Logo"
              width={63}
              height={60}
            />
          </Link>
        </div>
        <nav className={styles.nav}>
          <Link href="/">ホーム</Link>
          <Link href="/company">会社概要</Link>
          <Link href="/services">サービス</Link>
          <Link href="/contact">お問い合わせ</Link>
        </nav>
      </header>
      <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''}`}>
        {sidebarOpen && (
          <button
            className={styles.closeToggle}
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            &larr;
          </button>
        )}
        <nav className={styles.mobileNav}>
          <Link href="/" onClick={() => setSidebarOpen(false)}>ホーム</Link>
          <Link href="/company" onClick={() => setSidebarOpen(false)}>会社概要</Link>
          <Link href="/services" onClick={() => setSidebarOpen(false)}>サービス</Link>
          <Link href="/contact" onClick={() => setSidebarOpen(false)}>お問い合わせ</Link>
        </nav>
      </div>
      {hero}
      <div className={styles.container}>
        <motion.main
          className={styles.main}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.main>
        <footer className={styles.footer}>
          <p>&copy; {new Date().getFullYear()} WizAward Inc. All Right Reserved.</p>
        </footer>
      </div>
    </>
  );
}
