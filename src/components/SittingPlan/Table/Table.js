import React, { useEffect, useState, useRef } from "react";
import styles from "./Table.module.scss";
import PropTypes from "prop-types";
import SittingPlanArray from "../SittingPlanArray";
import Chair from "../Chair/Chair";

const SittingArray = SittingPlanArray;

function Table(props) {
  
  const assignedTableNr = props.assignedTableNr;

  const tableArray = SittingArray.filter(
    (item) => item.tableNr === assignedTableNr
  );

  const chairCount = tableArray.length;
  const chairRowCount = chairCount / 2;

  const chairRowOne = tableArray.filter(
    (item) => item.chairNr <= chairRowCount
  );
  const chairRowTwo = tableArray.filter((item) => item.chairNr > chairRowCount);

  return (
    <div className={styles.wrapper} >
        <div className={styles.chairRow}>
          {assignedTableNr === 1
            ? tableArray.map((person) => (
                <Chair
                  chairNr={person.chairNr}
                  tableNr={person.tableNr}
                  person={`${person.firstName} ${person.lastName}`}
                  key={`${person.tableNr}_${person.chairNr}`}
                  row={"up"}
                ></Chair>
              ))
            : chairRowOne.map((person) => (
                <Chair
                  chairNr={person.chairNr}
                  tableNr={person.tableNr}
                  person={`${person.firstName} ${person.lastName}`}
                  key={`${person.tableNr}_${person.chairNr}`}
                  row={"up"}
                ></Chair>
              ))}
        </div>

        <div className={styles.table}>
          <p className={styles.tableNumber}>{assignedTableNr}</p>
        </div>

        {assignedTableNr !== 1 ? (
          <div className={styles.chairRow}>
            {chairRowTwo.map((person) => (
              <Chair
                chairNr={person.chairNr}
                tableNr={person.tableNr}
                person={`${person.firstName} ${person.lastName}`}
                key={`${person.tableNr}_${person.chairNr}`}
                row={"down"}
              ></Chair>
            ))}
          </div>
        ) : null}
      </div>
  );
}

Table.propTypes = {
  assignedTableNr: PropTypes.number.isRequired,
};

export default Table;
