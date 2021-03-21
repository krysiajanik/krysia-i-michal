import React from "react";
import AppContext from "../../context";
import styles from "./SearchBar.module.scss";
import SearchIcon from "./SearchIcon.js";
import SittingPlanArray from "../../components/SittingPlan/SittingPlanArray";
import ClearSearch from "./ClearSearch.js"

const SittingArray = SittingPlanArray;
class SearchBar extends React.Component {
  state = {
    text: "",
    displayHints: false,
  };

  static contextType = AppContext;

  handleInput = (e) => {
    this.setState({ 
      text: e.target.value.toUpperCase(),
      displayHints: this.state.text.length > 0 ? true : false});
  };

  handleSelectedPerson = (firstName, lastName, tableNr, chairNr) => {
    this.setState({
      text: `${firstName} ${lastName}`,
      selectedTable: tableNr,
      selectedChair: chairNr,
      displayHints: false,
    });
  };

  handleClear = () => {
    this.setState({
      text: "",
      displayHints: false,
    })
  }

  render() {
    const newArray = SittingArray.filter(
      (item) =>
        item.firstName.toUpperCase().includes(this.state.text.toUpperCase()) ||
        item.lastName.toUpperCase().includes(this.state.text.toUpperCase())
    );

    return (
      <div className={styles.wrapper}>
        <div
          className={this.state.displayHints ? styles.searchBarHints : styles.searchBar}
        >
          <SearchIcon className={styles.icon} />
          <input
            aria-label="Znajdź gdzie kto siedzi"
            onInput={this.handleInput}
            placeholder={"Wpisz imię lub nazwisko"}
            className={styles.input}
            value={this.state.text}
          />
          {this.state.text != "" ? <ClearSearch  className={styles.icon} onClick={this.handleClear}/> : null}
        </div>
        <div
          className={
            this.state.displayHints ? styles.inputHints : styles.inputNone
          }
        >
          {newArray.map((person) => (
            <p
              key={`${person.firstName}_${person.lastName}`}
              className={styles.inputHintsItem}
              onClick={() => {
                this.handleSelectedPerson(
                  person.firstName,
                  person.lastName,
                  person.tableNr,
                  person.chairNr
                );

                this.context.updateSelectedPerson(
                  person.tableNr,
                  person.chairNr
                );
              }}
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
