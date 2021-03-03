import React from "react";
import styles from "./Chair.module.scss";
import PropTypes from "prop-types";

const Chair = ({ showChair, chairNr }) => (

 
      <div
        className={chairNr === showChair ? styles.chairHighlight : styles.chair}
        
      ></div>
);

Chair.propTypes = {
  chairNr: PropTypes.number.isRequired,
  showChair: PropTypes.number.isRequired,
};


export default Chair;
