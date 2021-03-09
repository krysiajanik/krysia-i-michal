import React from "react";
import styles from "./Table.module.scss";
import PropTypes, { resetWarningCache } from "prop-types";
import SittingPlanArray from "../SittingPlanArray";
import Chair from "../Chair/Chair";

const SittingArray = SittingPlanArray;

class Table extends React.Component {
  render() {
    const tableArray = SittingArray.filter(
      (item) => item.tableNr === this.props.assignedTableNr
    );

    const chairCount = tableArray.length;
    const chairRowCount = chairCount / 2;

    const chairRowOne = tableArray.filter(
      (item) => item.chairNr <= chairRowCount
    );
    const chairRowTwo = tableArray.filter(
      (item) => item.chairNr > chairRowCount
    );

    return (
      <>
        <div className={styles.wrapper}>
          <div className={styles.chairRow}>
            {chairRowOne.map((person) => (
              <Chair
                chairNr={person.chairNr}
                tableNr={person.tableNr}
                person={`${person.firstName} ${person.lastName}`}
                key={`${person.tableNr}_${person.chairNr}`}
              ></Chair>
            ))}
          </div>

          <div className={styles.table}>
            <p className={styles.tableNumber}>{this.props.assignedTableNr}</p>
          </div>
          <div className={styles.chairRow}>
            {chairRowTwo.map((person) => (
              <Chair
                chairNr={person.chairNr}
                tableNr={person.tableNr}
                person={`${person.firstName} ${person.lastName}`}
                key={`${person.tableNr}_${person.chairNr}`}
              ></Chair>
            ))}
          </div>
        </div>
      </>
    );
  }
}

Table.propTypes = {
  assignedTableNr: PropTypes.number.isRequired,
  tableCapacity: PropTypes.number.isRequired,
};

export default Table;
