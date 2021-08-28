import React, { useContext } from "react";
import AppContext from "../../../context";
import styles from "./SwitchView.module.scss";


const SwitchView = () => {

    const context = useContext(AppContext);

    const handleClickSearch = () => {
        context.changeView(1)
    }
    const handleClickList = () => {
        context.changeView(2)
    }

    return (
        <div className={styles.buttonWrapper}>
            <button className={context.view==1 ? styles.buttonSelected : styles.button} onClick={handleClickSearch} >WYSZUKAJ</button>
            <button className={context.view==2 ? styles.buttonSelected : styles.button} onClick={handleClickList} >LISTA GOŚCI</button>
    
        </div>
  );
};


export default SwitchView;