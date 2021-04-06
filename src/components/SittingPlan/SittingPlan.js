import React, { useEffect, useState, useRef } from "react";
import styles from "./SittingPlan.module.scss";
import Table from "./Table/Table";

function SittingPlan() {
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const [scale, setScale] = useState(1);
  const scaleRef = useRef(null);

  const translateRef = useRef(null);
  const [trslRatio, setTrslRatio] = useState(0);

  function handleScale() {
    let newWinWidth = Math.min(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );

    setWinWidth(newWinWidth);

    if (scaleRef.current && winWidth < 680) {
      setScale((winWidth / scaleRef.current.scrollWidth) * 0.65);
      setTrslRatio(
        (translateRef.current.scrollWidth - scaleRef.current.scrollWidth) / 2
      );
    }
  }

  useEffect(() => {
    handleScale();

    window.addEventListener("resize", handleScale);

    return (_) => {
      window.removeEventListener("resize", handleScale);
    };
  }, []);

  const scaleStyle = {
    transform: "scale(" + scale + ") translate(-" + trslRatio + "px)",
  };

  return (
    <div className={styles.wrapper} >
      <div className={styles.tablePlan} >
        <div className={styles.tableMain}>
          <Table assignedTableNr={1}></Table>
        </div>
        <div className={styles.tables}>
        <Table assignedTableNr={2}></Table>
        <Table assignedTableNr={3}></Table>
        <Table assignedTableNr={4}></Table>
        <Table assignedTableNr={6}></Table>
        <Table assignedTableNr={7}></Table>
        <Table assignedTableNr={8}></Table>
        <Table assignedTableNr={9}></Table>
        </div>
        
      </div>
    </div>
  );
}

{/* <div className={styles.wrapper} ref={scaleRef}> */}
      {/* <div className={styles.tablePlan} ref={translateRef} style={scaleStyle}></div> */}

export default SittingPlan;
