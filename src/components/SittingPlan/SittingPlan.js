import React from "react";
import Chair from "./Chair/Chair";
import styles from "./SittingPlan.module.scss";
import Table from "./Table/Table";

class SittingPlan extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.tableGrid}>
          <div className={styles.chairRow}>
            <Chair chairNr={1}></Chair>
            <Chair chairNr={2}></Chair>
            <Chair chairNr={3}></Chair>
            <Chair chairNr={4}></Chair>
          </div>
          <Table tableNr={2} tableCapacity={8}></Table>
          <div className={styles.chairRow}>
            <Chair chairNr={1}></Chair>
            <Chair chairNr={2}></Chair>
            <Chair chairNr={3}></Chair>
            <Chair chairNr={4}></Chair>
          </div>
        </div>
      </div>
    );
  }
}

export default SittingPlan;
