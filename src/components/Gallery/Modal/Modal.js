import React, {useEffect} from "react";
import Back from "./Back";
import Forward from "./Forward";
import styles from "./Modal.module.scss";

const Modal = ({ selectedImg, setSelectedImg, indexImg, setIndexImg, maxRight, authorName }) => {


const handleClick = (e) => {
  if(e.target.tagName.toLowerCase() === 'div'){
    setSelectedImg(null);
  }
}

const handleForward = () => {
  setIndexImg(++indexImg)
}

const handleBack = () => {
  setIndexImg(--indexImg)
}

    return (
        <div className={styles.backdrop} onClick={handleClick}>
          {(indexImg>0) ?<Back onClick={handleBack}/> : <span className={styles.button}></span>} 
          <p className={styles.author}>{`Autor zdjęcia: ${authorName}`}</p>
            <img src={selectedImg} className={styles.selectedImg} alt="Powiększone zdjęcie ze ślubu Krysi i Michała, dodane przez jednego z gości" />
          {(indexImg<maxRight-1) ? <Forward onClick={handleForward}/> : <span className={styles.button}></span>}
        </div>
    )
}

export default Modal;