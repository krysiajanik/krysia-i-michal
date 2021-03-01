import React from "react";
import styles from "./Table.module.scss";
import PropTypes from "prop-types";

const Table = ({ tableNr, tableCapacity }) => {

  function tableSize() {
    if (tableCapacity === 6) {
      return (
        <div className={styles.tableForSix}>
      <p className={styles.tableNumber}>{tableNr}</p>
    </div>)
    }
    else if (tableCapacity === 8) {
      return (
        <div className={styles.tableForEight}>
      <p className={styles.tableNumber}>{tableNr}</p>
    </div>)
    }
    else {
      return (
        <div className={styles.tableMain}>
      <p className={styles.tableNumber}>{tableNr}</p>
    </div>)
    }
  }


  return (
    tableSize()
  );
};

Table.propTypes = {
  tableNr: PropTypes.number.isRequired,
  tableCapacity: PropTypes.number.isRequired,
};

export default Table;
