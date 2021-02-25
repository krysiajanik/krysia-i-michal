import React from "react";
import PropTypes from "prop-types";
import styles from "./SectionTitle.module.scss";


const SectionTitle = ({ children }) => {
  return (<h2 className={styles.sectionTitle}>{children}</h2>);
};

SectionTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SectionTitle;