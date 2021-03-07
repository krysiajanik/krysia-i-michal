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

  return (
    <div
      className={
        (selectedPerson.tableNr === tableNr && selectedPerson.chairNr === chairNr)
          ? styles.chairHighlight
          : styles.chair
      }
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {SittingArray.map((person) => (
        <p
          key={`${person.tableNr}_${person.chairNr}`}
          className={isShown ? styles.personShow : styles.personHide}
        >
          {person.tableNr === tableNr && person.chairNr === chairNr
            ? `${person.firstName} ${person.lastName}`
            : ""}
        </p>
      ))}
    </div>
  );
}

Chair.propTypes = {
  chairNr: PropTypes.number.isRequired,
  tableNr: PropTypes.number.isRequired,
};

export default Chair;
