import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import SittingPlan from "../../components/SittingPlan/SittingPlan";



class SittingChart extends React.Component{

  render () {

    return (
      <>
      <PageHeader>Plan Stołów</PageHeader>
      <SittingPlan></SittingPlan>
      </>
    )
  }
} 


export default SittingChart;