import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import SearchBar from "../../components/SearchBar/SearchBar";
import SittingPlan from "../../components/SittingPlan/SittingPlan";



class SittingChart extends React.Component{

  render () {

    return (
      <>
      <PageHeader>Plan Stołów</PageHeader>
      <SearchBar></SearchBar>
      <SittingPlan></SittingPlan>
      </>
    )
  }
} 


export default SittingChart;