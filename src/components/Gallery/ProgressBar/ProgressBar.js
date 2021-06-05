import React, { useEffect } from "react";
import useStorage from "../../../hooks/useStorage";
import styles from "./ProgressBar.module.scss";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect( () => {

    if(url) {
        setFile(null)
    }
  }, [url, setFile]
  )

  return (
    <div className={styles.progressBar} style={{ width: progress + "%" }}></div>
  );
};

export default ProgressBar;
