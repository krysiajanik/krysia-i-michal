import React from "react";
import AppContext from "../../context";
import PageHeader from "../../components/PageHeader/PageHeader";
import SearchBar from "../../components/SearchBar/SearchBar";
import SittingPlan from "../../components/SittingPlan/SittingPlan";

class SittingChart extends React.Component {
  state = {
    selectedId: ["", ""],
    tableNr: 0,
    chairNr: 0,
  };


  updateSelectedPerson = (tableNr, chairNr) => {
    this.setState({
      selectedId: [tableNr, chairNr],
      chairNr: chairNr,
      tableNr: tableNr,
    });
  };

  clearSelectedPerson = () => {
      this.setState({
        chairNr: 0,
        tableNr: 0,
      });
  }

  render() {
    const contextElements = {
       updateSelectedPerson: this.updateSelectedPerson,
       clearSelectedPerson: this.clearSelectedPerson,
       tableNr: this.state.tableNr,
       chairNr: this.state.chairNr,
    };

    return (
      <>
        <PageHeader>Plan Stołów</PageHeader>
        <AppContext.Provider
          value={contextElements}
        >
          <SearchBar></SearchBar>
          <SittingPlan></SittingPlan>
        </AppContext.Provider>
      </>
    );
  }
}

export default SittingChart;
