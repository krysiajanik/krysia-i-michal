import React from "react";
import AppContext from "../../context";
import Chair from "./Chair/Chair";
import styles from "./SittingPlan.module.scss";
import Table from "./Table/Table";

class SittingPlan extends React.Component {

    static contextType = AppContext;

  render() {
    

    return (
      
        <div className={styles.wrapper}>
          <div className={styles.tableGrid}>
            <div className={styles.chairRow}>
              <Chair chairNr={1} showChair={this.context.chairNr}></Chair>
              <Chair chairNr={2} showChair={this.context.chairNr}></Chair>
              <Chair chairNr={3} showChair={this.context.chairNr}></Chair>
              <Chair chairNr={4} showChair={this.context.chairNr}></Chair>
            </div>
            <Table tableNr={2} tableCapacity={8}></Table>
            <div className={styles.chairRow}>
              <Chair chairNr={5}></Chair>
              <Chair chairNr={6}></Chair>
              <Chair chairNr={7}></Chair>
              <Chair chairNr={8}></Chair>
            </div>
          </div>
        </div>
     
    );
  }
}

export default SittingPlan;
