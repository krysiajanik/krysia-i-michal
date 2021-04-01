import React from "react";
import styles from "./SittingPlan.module.scss";
import Table from "./Table/Table";

class SittingPlan extends React.Component {
  // resizeView = () => {
  //   const el = document.getElementById("wrapper");
  //   const elWidth = el.getBoundingClientRect().width;
  //   const winWidth = window.innerWidth;
  //   const scale = elWidth / winWidth;
  //   return {
  //     transform: "scale(" + scale + ")",
  //   };
  // };

  render() {
    return (
        <div className={styles.wrapper}>
          <div className={styles.tableMain}>
            <Table assignedTableNr={1}></Table>
          </div>
          <Table assignedTableNr={2}></Table>
          <Table assignedTableNr={3}></Table>
          <Table assignedTableNr={4}></Table>
          <Table assignedTableNr={6}></Table>
          <Table assignedTableNr={7}></Table>
          <Table assignedTableNr={8}></Table>
          <Table assignedTableNr={9}></Table>
          
        </div>
    );
  }
}

export default SittingPlan;
