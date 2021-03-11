import React, { useContext, useState } from "react";
import AppContext from "../../../context";
import styles from "./Chair.module.scss";
import PropTypes from "prop-types";

function Chair(props) {
  const [isShown, setIsShown] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const context = useContext(AppContext);
  const tableNr = props.tableNr;
  const chairNr = props.chairNr;
  const person = props.person;
  const row = props.row;

  function handleMouseOver(bool) {
    setIsShown(bool);
    setIsMouseOver(bool);
    context.clearSelectedPerson()
  }

  function handleClick() {
    if (!isMouseOver) {
      isShown ? setIsShown(false) : setIsShown(true);
    }
  }

  function handleRender() {
    if (
      isShown ||
      (context.tableNr === tableNr && context.chairNr === chairNr)
    ) {
      return (
        <div
          className={styles.chairHighlight}
          onMouseEnter={() => handleMouseOver(true)}
          onMouseLeave={() => handleMouseOver(false)}
          onClick={() => handleClick()}
        >
          <p
            className={
              row === "up" ? styles.personShowUp : styles.personShowDown
            }
          >
            {person}
          </p>
        </div>
      );
    } else {
      return (
        <div
          className={styles.chair}
          onMouseEnter={() => handleMouseOver(true)}
          onMouseLeave={() => handleMouseOver(false)}
          onClick={() => handleClick()}
        >
         
        </div>
      );
    }
  }

  return handleRender();

}

Chair.propTypes = {
  chairNr: PropTypes.number.isRequired,
  tableNr: PropTypes.number.isRequired,
  person: PropTypes.string.isRequired,
  tableNr: PropTypes.string.isRequired,
};

export default Chair;
