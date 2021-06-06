import React from "react";
import styles from "./Modal.module.scss";

const Back = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <svg height={24} width={24} fill="#FBFAFA" className={styles.back}>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
      </svg>
    </button>
  );
};

export default Back;
