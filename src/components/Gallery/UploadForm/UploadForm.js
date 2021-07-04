import React, { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./UploadForm.module.scss";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null)

  const types = ["image/png", "image/jpeg", "image/jpg", "image/gif"];


 
  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
        setFile(null);
        setError('Wybierz zdjęcie w jednym z dozwolonych formatów! (png, jpeg, jpg, gif)');
    }
  };

  const addFile = (e) => {

  }

  return (
    <form className={styles.form}>
        <label className={styles.formLabel}>
        <input type="file"  onChange={addFile} />
        <span className={styles.addButton}>+</span>
        </label>
     
      <div className={styles.output}>
          {error && <p className={styles.error}>{error}</p>}
          {file && 
          <>
          <p className={styles.filename}>{file.name}</p>
          <input className={styles.authorName} type="text" placeholder="Twoje imię"></input>
          <button className={styles.formButton}>DODAJ</button>
          </>
      }
          {file && <ProgressBar file={file} setFile={setFile} />}
      </div>

      
    </form>
  );
};

export default UploadForm;
