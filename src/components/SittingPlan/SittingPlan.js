import React from "react";
import AppContext from "../../context";
import Chair from "./Chair/Chair";
import styles from "./SittingPlan.module.scss";
import Table from "./Table/Table";

class SittingPlan extends React.Component {
  static contextType = AppContext;

//   state = {
//     selectedChair: this.context.chairNr,
//     selectedTable: this.context.tableNr,
//   };

//   checkSelected = () => this.state.selectedTable === tableNr && (this.state.selectedChair = chairNr);

  
  render() {
      
    return (
      <div className={styles.wrapper}>
        <div className={styles.tableGrid} >
            
          <div className={styles.chairRow}>
            <Chair chairNr={1} tableNr={2}></Chair>
            <Chair chairNr={2} tableNr={2}></Chair>
            <Chair chairNr={3} tableNr={2}></Chair>
            <Chair chairNr={4} tableNr={2}></Chair>
          </div>
          <Table tableNr={2} tableCapacity={8}></Table>
          <div className={styles.chairRow}>
            <Chair chairNr={5} tableNr={2}></Chair>
            <Chair chairNr={6} tableNr={2}></Chair>
            <Chair chairNr={7} tableNr={2}></Chair>
            <Chair chairNr={8} tableNr={2}></Chair>
          </div>
        </div>
      </div>
    );
  }
}

export default SittingPlan;
