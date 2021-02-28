import React from "react";
import styles from "./Chair.module.scss";
import PropTypes from "prop-types";

const Chair = ({ chairNr, showChair }) => {
<div className={showChair ? styles.chair : styles.chairHighlight} {...chairNr}></div>
};

Chair.propTypes = {
  chairNr: PropTypes.number.isRequired,
  showChair: PropTypes.bool.isRequired,
};

export default Chair;
