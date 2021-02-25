import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import Section from "../../components/Section/Section";
import SectionTitle from "../../components/SectionTitle/SectionTitle";


const DrinkMenu = () => {
  const wines = [
    "Wino białe półwytrawne",
    "Wino czerwone półwytrawne",
    "Prosecco",
  ];

  const spirits = [
    "Wódka",
    "Gin",
    "Whisky",
  ];

  const beverages = [
    "Sok pomarańczowy",
    "Sok jabłkowy",
    "Tonik",
    "Coca-cola",
    "Sprite",
  ];

  return (
    <>
       <PageHeader>Drink Menu</PageHeader>
      <SectionTitle>Wina</SectionTitle>
      {wines.map((wine) => (
        <Section menuItem={wine} />
      ))}
      <SectionTitle>Alkohole Mocne</SectionTitle>
      {spirits.map((spirit) => (
        <Section menuItem={spirit} />
      ))}
      <SectionTitle>Napoje Zimne</SectionTitle>
      {beverages.map((beverage) => (
        <Section menuItem={beverage} />
      ))}

    </>
  );
}; 


export default DrinkMenu;