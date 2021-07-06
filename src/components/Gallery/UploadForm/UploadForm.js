import React, { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./UploadForm.module.scss";

const UploadForm = () => {
  const [tempFile, setTempFile] = useState(null);
  const [file, setFile] = useState(null);
  const [authName, setAuthName] = useState(null);
  const [error, setError] = useState(null)

  const types = ["image/png", "image/jpeg", "image/jpg", "image/gif"];



  const handleImage = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setTempFile(selected);
      setError('');
    } else {
      setTempFile(null);
      setError('Wybierz zdjęcie w jednym z dozwolonych formatów! (png, jpeg, jpg, gif)');
    }
  };

  const addFile = (e) => {
    e.preventDefault()

    const newFile = tempFile

    if (!authName) {
      window.alert("Podpisz swoje zdjęcie")
    }

    if (authName && authName.length < 3) {
      window.alert("Imię musi mieć przynajmniej trzy znaki")
    } else {
      newFile.authorName = authName
      setFile(newFile)
      setTempFile(null)
      setAuthName(null)
    }

  }

  return (
    <form className={styles.form}>
      <label className={styles.formLabel}>
        <input type="file" onChange={handleImage} />
        <span className={styles.addButton}>+</span>
      </label>

      <div className={styles.output}>
        {error && <p className={styles.error}>{error}</p>}
        {tempFile &&
          <>
            <p className={styles.filename}>{tempFile.name}</p>
            <input className={styles.authorName} required min="2" max="30" type="text" placeholder="Twoje imię" id="authorName" onChange={(e) => setAuthName(e.target.value)}></input>
            <button className={styles.formButton} onClick={addFile}>DODAJ</button>
          </>
        }
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>


    </form>
  );
};

export default UploadForm;
