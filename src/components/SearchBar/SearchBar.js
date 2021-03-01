import React from "react";
import AppContext from "../../context";
import styles from "./SearchBar.module.scss";
import SearchIcon from "./SearchIcon.js";
import SittingPlanArray from "../../components/SittingPlan/SittingPlanArray";

const SittingArray = SittingPlanArray;
class SearchBar extends React.Component {
  state = {
    text: "",
  };

  handleInput = (e) => {
    this.setState({ text: e.target.value.toUpperCase() });

    // searchResult = newArray.map(item => {
    //     fName: newArray.firstName
    // })
  };

  render() {
    const newArray = SittingArray.filter(
      (item) =>
        item.firstName.toUpperCase().includes(this.state.text.toUpperCase()) ||
        item.lastName.toUpperCase().includes(this.state.text.toUpperCase())
    );

    // newPerson = (fName, lName) => {
    //     const fName = newArray.map((person) => person.firstName);
    //     const lName = newArray.map((person) => person.lastName);
    //     return {

    //     }
    // }

    console.log(this.state.text);

    return (
      // <AppContext.Consumer>
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
            <p className={styles.inputHintsItem}>
              {person.firstName} {person.lastName}
            </p>
          ))}
        </div>
      </div>
      // </AppContext.Consumer>
    );
  }
}

export default SearchBar;
