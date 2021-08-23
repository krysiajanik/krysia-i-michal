import React from "react";
import AppContext from "../../context";
import PageHeader from "../../components/PageHeader/PageHeader";
import SwitchView from "../../components/SittingPlan/SwitchView/SwitchView";
import SittingPlan from "../../components/SittingPlan/SittingPlan";
import BackToTop from "../../components/BackToTop/BackToTop";
import Footer from "../../components/Footer/Footer";
import SittingList from "../../components/SittingPlan/SittingList";

class SittingChart extends React.Component {
  state = {
    selectedId: ["", ""],
    tableNr: 0,
    chairNr: 0,
    view: 1,
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

  changeView = (view) => {
    this.setState({view: view})
  }

  render() {
    const contextElements = {
       updateSelectedPerson: this.updateSelectedPerson,
       clearSelectedPerson: this.clearSelectedPerson,
       tableNr: this.state.tableNr,
       chairNr: this.state.chairNr,
       view: this.state.view,
       changeView: this.changeView,
    };

    return (
      <>
        <PageHeader>Plan Stołów</PageHeader>
        <AppContext.Provider
          value={contextElements}
        >
          <SwitchView ></SwitchView>
           {console.log(this.state.view)}
          {this.state.view==1 ? <SittingPlan></SittingPlan> : <SittingList></SittingList>}
          
          <BackToTop></BackToTop>
        </AppContext.Provider>
        <Footer />
      </>
    );
  }
}

export default SittingChart;
