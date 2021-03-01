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

  newArray = SittingArray.filter((item) =>
    item.firstName
      .toUpperCase()
      .includes(
        this.state.text.toUpperCase() ||
          item.lastName.toUpperCase().includes(this.state.text.toUpperCase())
      )
  );

  render() {
    console.log(SittingArray);
    console.log(this.newArray);

    return (
      // <AppContext.Consumer>
      <div className={styles.wrapper}>
        <div className={styles.searchBar}>
          <SearchIcon className={styles.icon} />
          <input
            aria-label="Znajdź gdzie kto siedzi"
            onInput={this.handleInput}
            placeholder={"Wpisz imię lub nazwisko"}
            className={styles.input}
            value={this.state.text}
          />
        </div>
      </div>
      // </AppContext.Consumer>
    );
  }
}

export default SearchBar;
