import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MenuDropdown.module.scss";

const MenuDropdown = () => (
  <nav >
    <ul className={styles.wrapper}>
      <li className={styles.menuItem}>
        <NavLink exact
          to="/"
          className={styles.menuItemLink}
        >
            Strona główna
        </NavLink>
      </li>
      <li className={styles.menuItem}>
        <NavLink
          to="/menu"
          className={styles.menuItemLink}
        >
            Co jemy?
        </NavLink>
      </li>
      
      <li className={styles.menuItem}>
        <NavLink
          to="/drinkmenu"
          className={styles.menuItemLink}
        >
            Co pijemy?
        </NavLink>
      </li>
     
      <li className={styles.menuItem}>
        <NavLink
          to="/sittingchart"
          className={styles.menuItemLink}
        >
            Gdzie siedzę?
        </NavLink>
      </li>
      
    </ul>
  </nav>
);


export default MenuDropdown;
