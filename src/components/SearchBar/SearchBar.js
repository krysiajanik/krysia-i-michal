import React from "react";
import styles from "./SearchBar.module.scss";
import SearchIcon from "./SearchIcon.js";
import SittingPlanArray from "../../components/SittingPlan/SittingPlanArray";

const SittingArray = SittingPlanArray;
class SearchBar extends React.Component {
  state = {
    text: "",
    selectedId: [""],
  };

  handleInput = (e) => {
    this.setState({ text: e.target.value.toUpperCase() });
  };

  handleSelectedPerson = (firstName, lastName, tableNr, chairNr) => {
    this.setState({
      text: `${firstName} ${lastName}`,
      selectedId: [tableNr, chairNr],
    });
  };

  render() {
    const newArray = SittingArray.filter(
      (item) =>
        item.firstName.toUpperCase().includes(this.state.text.toUpperCase()) ||
        item.lastName.toUpperCase().includes(this.state.text.toUpperCase())
    );

    console.log(this.state.text);

    return (
      <div className={styles.wrapper}>
        <div
          className={
            this.state.text.length > 2
              ? styles.searchBarHints
              : styles.searchBar
          }
        >
          <SearchIcon className={styles.icon} />
          <input
            aria-label="Znajdź gdzie kto siedzi"
            onInput={this.handleInput}
            placeholder={"Wpisz imię lub nazwisko"}
            className={styles.input}
            value={this.state.text}
          />
        </div>
        <div
          className={
            this.state.text.length > 2 ? styles.inputHints : styles.inputNone
          }
        >
          {newArray.map((person) => (
            <p
              key={`${person.firstName}_${person.lastName}`}
              className={styles.inputHintsItem}
              onClick={() =>
                this.handleSelectedPerson(person.firstName, person.lastName, person.tableNr, person.chairNr)
              }
            >
              {person.firstName} {person.lastName}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchBar;
