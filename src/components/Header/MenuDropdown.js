import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MenuDropdown.module.scss";

const MenuDropdown = () => (
  <nav>
    <ul className={styles.wrapper}>
      <NavLink exact to="/" className={styles.menuItemLink}>
        <li className={styles.menuItem}>Strona główna</li>
      </NavLink>

      <NavLink to="/menu" className={styles.menuItemLink}>
        <li className={styles.menuItem}>Co jemy?</li>
      </NavLink>

      <NavLink to="/drinkmenu" className={styles.menuItemLink}>
        <li className={styles.menuItem}>Co pijemy?</li>
      </NavLink>

      <NavLink to="/sittingchart" className={styles.menuItemLink}>
        <li className={styles.menuItem}>Gdzie siedzę?</li>
      </NavLink>
    </ul>
  </nav>
);

export default MenuDropdown;
