import React from "react";
import AppContext from "../../context";
import PageHeader from "../../components/PageHeader/PageHeader";
import SearchBar from "../../components/SearchBar/SearchBar";
import SittingPlan from "../../components/SittingPlan/SittingPlan";
// import SittingPlanArray from "../../components/SittingPlan/SittingPlanArray";

// const SittingArray = SittingPlanArray;
class SittingChart extends React.Component {
  state = {
    selectedId: ["", ""],
    tableNr: "",
    chairNr: "",
  };

  // handleInput = (e) => {
  //   this.setState({ text: e.target.value.toUpperCase() });
  // };

  // handleSelectedPerson = (firstName, lastName, tableNr, chairNr) => {
  //   this.setState({
  //     text: `${firstName} ${lastName}`,
  //     selectedId: [tableNr, chairNr],
  //   });
  // };

  // displayHints = () => {
  //   newArray.map((person) => (
  //     <p
  //       key={`${person.firstName}_${person.lastName}`}
  //       className={styles.inputHintsItem}
  //       onClick={() => handleSelectedPerson(
  //           person.firstName,
  //           person.lastName,
  //           person.tableNr,
  //           person.chairNr
  //         )
  //       }
  //     >
  //       {person.firstName} {person.lastName}
  //     </p>
  //   ));
  // };

  updateSelectedPerson = (tableNr, chairNr) => {
    this.setState({
      selectedId: [tableNr, chairNr],
      chairNr: chairNr,
      tableNr: tableNr,
    });
  };

  render() {
    // const contextElements = {
    //   tableNr: this.state.selectedId[0],
    //   chairNr: this.state.selectedId[1],
    // };

    //  const newArray = SittingArray.filter(
    //   (item) =>
    //     item.firstName.toUpperCase().includes(this.state.text.toUpperCase()) ||
    //     item.lastName.toUpperCase().includes(this.state.text.toUpperCase())
    // );

    return (
      <>
        <PageHeader>Plan Stołów</PageHeader>
        <AppContext.Provider
          value={{ updateSelectedPerson: this.updateSelectedPerson }}
        >
          <SearchBar></SearchBar>
          <SittingPlan></SittingPlan>
        </AppContext.Provider>
      </>
    );
  }
}

// inputText={this.state.text}
// handleInput={() => this.handleInput()}
// hintsArray={newArray}>

// displayHints={() =>this.displayHints()}
// handleSelectedPerson={
//   () => this.handleSelectedPerson()
//   person.firstName,
//   person.lastName,
//   person.tableNr,
//   person.chairNr
// )
//   }

// {newArray.map((person) => (
//   <p
//     key={`${person.firstName}_${person.lastName}`}
//     className={styles.inputHintsItem}
//     onClick={() =>
//       handleSelectedPerson(
//         person.firstName,
//         person.lastName,
//         person.tableNr,
//         person.chairNr
//       )
//     }
//   >
//     {person.firstName} {person.lastName}
//   </p>
// ))} */}

export default SittingChart;
