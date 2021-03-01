import React from "react";
import AppContext from "../../context";
import PageHeader from "../../components/PageHeader/PageHeader";
import SearchBar from "../../components/SearchBar/SearchBar";
import SittingPlan from "../../components/SittingPlan/SittingPlan";
import SittingPlanArray from "../../components/SittingPlan/SittingPlanArray";

// const sittingArray = SittingPlanArray;

const initialState = {
  data: [],
  search: "",
  searchData: [],
};

// handleInput = e => {
//   let str = e.target.value
//   const newArray = this.state.data

//  }
class SittingChart extends React.Component {
  render() {
    // const inputStr = "Joh";

    // let result = sittingArray.sittingPlanArray.filter((item) =>
    //   item.firstName.toLowerCase().includes(inputStr.toLowerCase() ||
    //         item.lastName.toLowerCase().includes(inputStr.toLowerCase())
    //     )
    // );

    return (
      <>
        <PageHeader>Plan Stołów</PageHeader>

        <AppContext.Provider value={''}>
          <SearchBar></SearchBar>
          <SittingPlan></SittingPlan>
        </AppContext.Provider>
      </>
    );
  }
}

export default SittingChart;
