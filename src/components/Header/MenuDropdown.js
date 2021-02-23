import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./MenuDropdown.module.scss";

const MenuDropdown = (menuClick) => (
  <nav onClick={ menuClick}>
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

MenuDropdown.propTypes = {
    menuClick: PropTypes.func,
}

export default MenuDropdown;
