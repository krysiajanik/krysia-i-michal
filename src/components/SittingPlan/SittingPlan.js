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
        <Table assignedTableNr={2} tableCapacity={8}></Table>
        
      </div>
    );
  }
}

export default SittingPlan;
