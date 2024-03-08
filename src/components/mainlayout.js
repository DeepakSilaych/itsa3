import styles from './page.module.css';
import CursorBackground from '../components/mouse.js';

function MainLayout({ children }) {
  return (
    <div className={styles.container}>
      <CursorBackground />
      <header className={styles.header}>
        <a href="https://itc.gymkhana.iitb.ac.in/">
          <img src="/logo.png" alt="ITC Logo" />
        </a>
        <h1>Institute Technical Summer Activities</h1>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 ITSA | Created by Web Team with <a href="https://www.deepaksilaych.tech/">🤍</a></p>
      </footer>
    </div>
  );
};

export default MainLayout;
