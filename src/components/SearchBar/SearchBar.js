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

  static contextType = AppContext;

  handleInput = (e) => {
    this.setState({ text: e.target.value.toUpperCase() });
  };

  handleSelectedPerson = (firstName, lastName, tableNr, chairNr) => {
    this.setState({
      text: `${firstName} ${lastName}`,
      selectedTable: tableNr,
      selectedChair: chairNr,
    });
  };

  render() {
    const newArray = SittingArray.filter(
      (item) =>
        item.firstName.toUpperCase().includes(this.state.text.toUpperCase()) ||
        item.lastName.toUpperCase().includes(this.state.text.toUpperCase())
    );

    
    // const contextElements = {
    //     tableNr: this.state.selectedId[0],
    //     chairNr: this.state.selectedId[1],
    // }

    return (
      //<AppContext.Provider value={contextElements}>
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
              onClick={() => {
                this.handleSelectedPerson(
                  person.firstName,
                  person.lastName,
                  person.tableNr,
                  person.chairNr
                );
                
                this.context.updateSelectedPerson(person.tableNr, person.chairNr)
                // <AppContext.Consumer>
                //     {(context) => (
                //         //context.updateSelectedPerson([person.tableNr, person.chairNr]);
                //         console.log(context)
                //     )}
                // </AppContext.Consumer>
                // this.state.selectedChair = this.props.selectedChair;
              }}
            >
              {person.firstName} {person.lastName}
            </p>
          ))}
        </div>
      </div>
      //</AppContext.Provider>
    );
  }
}

export default SearchBar;
