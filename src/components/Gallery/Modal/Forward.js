import React from "react";
import styles from "./Modal.module.scss";

const Forward = ({onClick}) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <svg height={24} width={24} fill="#FBFAFA" className={styles.forward}>
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z" />
      </svg>
    </button>
  );
};

export default Forward;
