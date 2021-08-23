import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import Section from "../../components/Section/Section";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import BackToTop from "../../components/BackToTop/BackToTop";
import Footer from "../../components/Footer/Footer";


const Menu = () => {
  const dinners = [
    "Krem z dyni",
    "Karkówka w sosie",
    "Filet z kurczaka",
    "Pstrąg pieczony z cytryną",
    "Kluski śląskie",
    "Puree z ziemniaków",
    "Kolorowy ryż",
  ];

  const colds = [
    "Sałatka grecka",
    "Sałatka jarzynowa",
    "Śledzie",
    "Deska wędlin",
    "Deska serów",
  ];

  const cakes = [
    "Sernik",
    "Jabłecznik",
    "Ciasto czekoladowe",
    "Karpatka",
    "Biszkopt z truskawkami i kremem",
  ];

  return (
    <>
      <PageHeader>Menu</PageHeader>
      <SectionTitle>Obiad</SectionTitle>
      {dinners.map((dinner) => (
        <Section sectionItem={dinner} />
      ))}
      <SectionTitle>Zimny stół</SectionTitle>
      {colds.map((cold) => (
        <Section sectionItem={cold} />
      ))}
      <SectionTitle>Ciasta</SectionTitle>
      {cakes.map((cake) => (
        <Section sectionItem={cake} />
      ))}
      <BackToTop/>
      <Footer/>
    </>
  );
};

export default Menu;
