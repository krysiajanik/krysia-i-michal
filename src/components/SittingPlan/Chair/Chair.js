import React from "react";
import AppContext from "../../../context";
import styles from "./Chair.module.scss";
import PropTypes from "prop-types";

const Chair = ({ showChair }) => (
  <AppContext.Consumer>
    {(context) => (
      <div
        className={showChair === false ? styles.chair : styles.chairHighlight}
      
      ></div>
    )}
  </AppContext.Consumer>
);

Chair.propTypes = {
  chairNr: PropTypes.number.isRequired,
  showChair: PropTypes.bool,
};

Chair.defaultProps = {
  showChair: false,
};

export default Chair;
