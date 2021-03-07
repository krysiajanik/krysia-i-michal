import { element } from "prop-types";
import React from "react";
import Chair from "./Chair/Chair";
import styles from "./SittingPlan.module.scss";
import Table from "./Table/Table";

class SittingPlan extends React.Component {
  render() {
    const rowUp = "up";
    const rowDown = "down";
    const rowLeft = "left";
    const rowRight = "right";

    return (
      <div className={styles.wrapper}>
        <div className={styles.tableGrid}>
          <div className={styles.chairRow}>
            <Chair chairNr={1} tableNr={2} row={rowUp}></Chair>
            <Chair chairNr={2} tableNr={2} row={rowUp}></Chair>
            <Chair chairNr={3} tableNr={2} row={rowUp}></Chair>
            <Chair chairNr={4} tableNr={2} row={rowUp}></Chair>
          </div>
          <Table tableNr={2} tableCapacity={8}></Table>
          <div className={styles.chairRow}>
            <Chair chairNr={5} tableNr={2} row={rowDown}></Chair>
            <Chair chairNr={6} tableNr={2} row={rowDown}></Chair>
            <Chair chairNr={7} tableNr={2} row={rowDown}></Chair>
            <Chair chairNr={8} tableNr={2} row={rowDown}></Chair>
          </div>
        </div>
      </div>
    );
  }
}

export default SittingPlan;
