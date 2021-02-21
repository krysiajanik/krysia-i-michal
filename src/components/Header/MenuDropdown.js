import React from "react";
import styles from "./MenuDropdown.module.scss";

const MenuDropdown = () => (
 <div className={styles.wrapper}>
     <p className={styles.menuItem}>
        Co jemy?
     </p>
     <p className={styles.menuItem}>
        Co pijemy?
     </p>
     <p className={styles.menuItem}>
        Gdzie siedzę?
     </p>

 </div>
)

export default MenuDropdown