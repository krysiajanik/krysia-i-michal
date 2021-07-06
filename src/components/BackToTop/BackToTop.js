import React, { useState } from "react";
import styles from "./BackToTop.module.scss";

function BackToTop() {
  const [showButton, setShowButton] = useState(false);
  const winHeight = window.innerHeight / 2;

  const handleShowButton = () => {
    if (!showButton && window.pageYOffset > winHeight) {
      setShowButton(true);
    } else if (showButton && window.pageYOffset <= winHeight) {
      setShowButton(false);
    }
  };
  window.addEventListener("scroll", handleShowButton);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behaviour: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={showButton ? styles.buttonUp : styles.noButton}
    >
      <svg height={24} width={24} fill="#013A1E">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
      </svg>
    </button>
  );
}


export default BackToTop;
