import React from "react";
import styles from "./Answer.module.scss";

const Answer = ({children}) => {
  return <p className={styles.answer}>{children}</p>;
};



export default Answer;