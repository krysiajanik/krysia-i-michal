import React from "react";
import styles from "./Chair.module.scss";
import PropTypes from "prop-types";

const Chair = ({ chairNr, showChair }) => (
<div className={showChair===false ? styles.chair : styles.chairHighlight} {...chairNr}></div>
);

Chair.propTypes = {
  chairNr: PropTypes.number.isRequired,
  showChair: PropTypes.bool,
};

Chair.defaultProps = {
  showChair: false,
}

export default Chair;
