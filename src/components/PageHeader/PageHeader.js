import React from "react";
import PropTypes from "prop-types";
import styles from "./PageHeader.module.scss";

const PageHeader = ({ children }) => {
  return (<h1 className={styles.header}>{children}</h1>);
};

PageHeader.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PageHeader;
