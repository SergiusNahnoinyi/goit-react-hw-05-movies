import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <NavLink end to="/" className={styles.link}>
        Home
      </NavLink>
      <NavLink end to="/movies" className={styles.link}>
        Movies
      </NavLink>
    </nav>
  );
}
