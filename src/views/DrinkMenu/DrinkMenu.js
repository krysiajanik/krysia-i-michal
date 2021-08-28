import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import Section from "../../components/Section/Section";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import BackToTop from "../../components/BackToTop/BackToTop";
import Footer from "../../components/Footer/Footer";

const DrinkMenu = () => {
  const wines = [
    "Gruzińskie wino białe półwytrawne",
    "Gruzińskie wino czerwone półwytrawne",
  ];

  const spirits = [
    "Wódka",
    "Gin",
  ];

  const beverages = [
    "Sok pomarańczowy",
    "Sok jabłkowy",
    "Tonik",
    "Tonik bez cukru",
    "Coca-cola",
    "Coca-cola zero",
    "Woda z cytryną",
    "Na życzenie dla abstynentów: Piwo bezalkoholowe",
  ];
  const warmBev = [
    "Herbata",
    "Kawa",
  ];

  return (
    <>
      <PageHeader>Drink Menu</PageHeader>
      <SectionTitle>Wina</SectionTitle>
      {wines.map((wine) => (
        <Section sectionItem={wine} />
      ))}
      <SectionTitle>Alkohole Mocne</SectionTitle>
      {spirits.map((spirit) => (
        <Section sectionItem={spirit} />
      ))}
      <SectionTitle>Napoje Zimne</SectionTitle>
      {beverages.map((beverage) => (
        <Section sectionItem={beverage} />
      ))}
      <SectionTitle>Napoje Ciepłe</SectionTitle>
      {warmBev.map((bev) => (
        <Section sectionItem={bev} />
      ))}
      <BackToTop />
      <Footer />
    </>
  );
};

export default DrinkMenu;