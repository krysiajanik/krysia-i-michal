import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MenuDropdown.module.scss";

const MenuDropdown = () => (
  <nav>
    <ul className={styles.wrapper}>
      <NavLink exact to="/krysia-i-michal/" className={styles.menuItemLink}>
        <li className={styles.menuItem}>Strona główna</li>
      </NavLink>

      <NavLink to="/krysia-i-michal/menu" className={styles.menuItemLink}>
        <li className={styles.menuItem}>Co jemy?</li>
      </NavLink>

      <NavLink to="/krysia-i-michal/drinkmenu" className={styles.menuItemLink}>
        <li className={styles.menuItem}>Co pijemy?</li>
      </NavLink>

      <NavLink to="/krysia-i-michal/sittingchart" className={styles.menuItemLink}>
        <li className={styles.menuItem}>Gdzie siedzę?</li>
      </NavLink>

      <NavLink to="/krysia-i-michal/photos" className={styles.menuItemLink}>
        <li className={styles.menuItem}>Zdjęcia!</li>
      </NavLink>
    </ul>
  </nav>
);

export default MenuDropdown;
