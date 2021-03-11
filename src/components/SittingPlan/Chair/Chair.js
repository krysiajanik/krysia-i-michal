import React, { useContext, useState } from "react";
import AppContext from "../../../context";
import styles from "./Chair.module.scss";
import PropTypes from "prop-types";
import SittingPlanArray from "../SittingPlanArray";

const SittingArray = SittingPlanArray;

function Chair(props) {
  const [isShown, setIsShown] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const selectedPerson = useContext(AppContext);
  const tableNr = props.tableNr;
  const chairNr = props.chairNr;
  const person = props.person;
  const row = props.row;

  function handleMouseOver(bool) {
    setIsShown(bool);
    setIsMouseOver(bool);
    setIsSelected(false);
  }

  function handleClick() {
    if (!isMouseOver) {
      isShown ? setIsShown(false) : setIsShown(true);
    }
  }

  function handleSelected() {
    selectedPerson.tableNr === tableNr && selectedPerson.chairNr === chairNr
      ? setIsSelected(true)
      : setIsSelected(false);
  }

  function handleRender() {
    if (
      isShown ||
      (selectedPerson.tableNr === tableNr && selectedPerson.chairNr === chairNr)
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
    } else if (!isSelected) {
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
  // <div
  //   className={
  //     selectedPerson.tableNr === tableNr && selectedPerson.chairNr === chairNr
  //       ? styles.chairHighlight
  //       : styles.chair
  //   }
  //   onMouseEnter={() => handleMouseOver(true)}
  //   onMouseLeave={() => handleMouseOver(false)}
  //   onClick={() => handleClick()}
  // >
  //   <p className={isShown ? styles.personShow : styles.personHide}>
  //     {person}
  //   </p>
  // </div>
}

Chair.propTypes = {
  chairNr: PropTypes.number.isRequired,
  tableNr: PropTypes.number.isRequired,
};

export default Chair;
