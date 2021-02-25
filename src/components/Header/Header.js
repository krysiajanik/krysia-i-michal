import React from "react";
import styles from "./Header.module.scss";
import MenuBar from "./MenuBar";

const Header = () => (
    
    
    <header className={styles.header}>
        <MenuBar/>
        <div className={styles.wrapper}>
        <h1 className={styles.heading}>KRYSIA &amp; <div className={styles.headingSecond}>MICHAŁ</div></h1>
        </div>
    </header>
  
);

export default Header;
