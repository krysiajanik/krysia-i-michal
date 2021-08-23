import React from "react";
import PropTypes from "prop-types";
import styles from "./Section.module.scss";

const Section = ({ sectionItem }) => {
  return <p className={styles.sectionItem}>{sectionItem}</p>;
};

Section.propTypes = {
  sectionItem: PropTypes.string.isRequired,
};

export default Section;
