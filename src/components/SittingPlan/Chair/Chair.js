import React, { useContext, useState, useEffect, useRef } from "react";
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

  const contextPerson =
    context.tableNr === tableNr && context.chairNr === chairNr;

  const scrollRef = useRef();

  useEffect(() => {
    if (contextPerson && scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  });

  function handleMouseOver(bool) {
    setIsShown(bool);
    setIsMouseOver(bool);
    context.clearSelectedPerson();
  }

  function handleClick() {
    if (!isMouseOver) {
      isShown ? setIsShown(false) : setIsShown(true);
      context.clearSelectedPerson();
    }
  }

  function handleRender() {
    if (isShown || contextPerson) {
      return (
        <div
          ref={scrollRef}
          className={styles.chairHighlight}
          onMouseEnter={() => handleMouseOver(true)}
          onMouseLeave={() => handleMouseOver(false)}
          onClick={() => handleClick()}
        >
          {tableNr === 1 ? (
            <p className={styles.personShowUp}>{person}</p>
          ) : (
            <p
              className={
                row === "left" ? styles.personShowLeft : styles.personShowRight
              }
            >
              {person}
            </p>
          )}
        </div>
      );
    } else {
      return (
        <div
          className={styles.chair}
          onMouseEnter={() => handleMouseOver(true)}
          onMouseLeave={() => handleMouseOver(false)}
          onClick={() => handleClick()}
        ></div>
      );
    }
  }

  return handleRender();
}

Chair.propTypes = {
  chairNr: PropTypes.number.isRequired,
  tableNr: PropTypes.number.isRequired,
};

export default Chair;
