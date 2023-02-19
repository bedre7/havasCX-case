import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Layout.module.scss';

const Layout: React.FC<{ children: React.ReactNode; header: string }> = ({
  children,
  header,
}) => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(header === 'Sync' ? '/async' : '/sync');
  };

  return (
    <div className={styles.layout}>
      <header>
        <h1>State Management ({header})</h1>
        <button onClick={navigateTo}>{header === 'Sync' ? 'Async' : 'Sync'}</button>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
