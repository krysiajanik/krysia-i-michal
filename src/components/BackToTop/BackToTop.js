import React from "react";
import PropTypes from "prop-types";
import styles from "./BackToTop.module.scss";

const BackToTop = (href) => (
  <button>
    <svg height={24} width={24} fill="#013A1E">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
    </svg>
    <a href={href}></a>
  </button>
);

BackToTop.propTypes = {
    href: PropTypes.string.isRequired,
  };

export default BackToTop;

