import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Home.module.scss";

const Home = () => (
  <nav>
    <ul className={styles.wrapper}>
      <li className={styles.menuItem}>
        <NavLink to="/krysia-i-michal/menu" className={styles.menuItemLink}>
          <p className={styles.menuItemText}>Co jemy?</p>
        </NavLink>
      </li>

      <li className={styles.menuItem}>
        <NavLink to="/krysia-i-michal/drinkmenu" className={styles.menuItemLink}>
          <p className={styles.menuItemText}>Co pijemy?</p>
        </NavLink>
      </li>

      <li className={styles.menuItem}>
        <NavLink to="/krysia-i-michal/sittingchart" className={styles.menuItemLink}>
          <p className={styles.menuItemText}>Gdzie siedzę?</p>
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Home;