import React from "react";
import PropTypes from "prop-types";
import styles from "./Section.module.scss";

const Section = ({ menuItem }) => {
  return <p className={styles.menuItem}>{menuItem}</p>;
};

Section.propTypes = {
  menuItem: PropTypes.string.isRequired,
};

export default Section;
