import React, { useEffect } from "react";
import styles from "./Modal.module.scss";

const Modal = ({ selectedImg, setSelectedImg }) => {

const handleClick = (e) => {
  if(e.target.tagName.toLowerCase() === 'div'){
    setSelectedImg(null);
  }
}

    return (
        <div className={styles.backdrop} onClick={handleClick}>
            <img src={selectedImg} className={styles.selectedImg} alt="Powiększone zdjęcie ze ślubu Krysi i Michała, dodane przez jednego z gości" />
        </div>
    )
}

export default Modal;