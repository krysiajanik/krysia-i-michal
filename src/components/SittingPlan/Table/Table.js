import React from "react";
import styles from "./Table.module.scss";

const Table = ({ tableNr, tableCapacity }) => (
    
  <div className={styles.table+tableCapacity}>
    <p className={styles.tableNumber}>{tableNr}</p>
  </div>
);

Table.propTypes = {
    tableNr: PropTypes.number.isRequired,
    tableCapacity: PropTypes.string.isRequired,
  };

export default Table;
