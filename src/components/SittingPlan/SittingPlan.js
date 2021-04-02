import React, { useEffect, useState, useRef } from "react";
import styles from "./SittingPlan.module.scss";
import Table from "./Table/Table";

function SittingPlan() {
  const [scale, setScale] = useState(1);
  const scaleRef = useRef(null);
  const winWidth = Math.min(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  useEffect(() => {
    if (scaleRef.current && winWidth < 680) {
      setScale((winWidth / scaleRef.current.scrollWidth) * 0.8);
    }
  }, [scaleRef]);

  const scaleStyle = {
    transform: "scale(" + scale + ")",
  };

  return (
    <div className={styles.wrapper} ref={scaleRef}>
      <div className={styles.tablePlan} style={scaleStyle}>
        {console.log(winWidth, scaleRef, scale)}
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
    </div>
  );
}

export default SittingPlan;
