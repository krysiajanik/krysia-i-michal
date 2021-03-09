import React, { useContext, useState } from "react";
import AppContext from "../../../context";
import styles from "./Chair.module.scss";
import PropTypes from "prop-types";
import SittingPlanArray from "../SittingPlanArray";

const SittingArray = SittingPlanArray;

function Chair(props) {
  const [isShown, setIsShown] = useState(false);
  const selectedPerson = useContext(AppContext);
  const tableNr = props.tableNr;
  const chairNr = props.chairNr;
  const person = props.person;
  const row = props.row;

  function personClass() {
    let newClass;
    if (isShown === true) {
      switch (row) {
        case "up":
          newClass = "styles.personShowUp";
          break;
        case "down":
          newClass = "styles.personShowDown";
          break;
        case "left":
          newClass = "styles.personShowLeft";
          break;
        case "right":
          newClass = "styles.personShowRight";
          break;
        default:
          newClass = "styles.personShow";
      }
      return newClass;
    } else {
      newClass = "styles.personHide";
      return newClass;
    }
  }

  const personMap = SittingArray.map((person) => (
    <p key={`${person.tableNr}_${person.chairNr}`} className={personClass()}>
      {person.tableNr === tableNr && person.chairNr === chairNr
        ? `${person.firstName} ${person.lastName}`
        : ""}
    </p>
  ));

  return (
    <div
      className={
        selectedPerson.tableNr === tableNr && selectedPerson.chairNr === chairNr
          ? styles.chairHighlight
          : styles.chair
      }
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <p className={isShown ? styles.personShow : styles.personHide}>
        {person}
      </p>
      {/* {SittingArray.map((person) => (
        <p
          key={`${person.tableNr}_${person.chairNr}`}
          className={personClass(row)}
        >
          {person.tableNr === tableNr && person.chairNr === chairNr
            ? `${person.firstName} ${person.lastName}`
            : ""}
        </p>
      ))} */}
    </div>
  );
}

// isShown ? styles.personShow : styles.personHide

Chair.propTypes = {
  chairNr: PropTypes.number.isRequired,
  tableNr: PropTypes.number.isRequired,
};

export default Chair;
