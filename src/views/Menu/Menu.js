import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import Section from "../../components/Section/Section";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import BackToTop from "../../components/BackToTop/BackToTop";
import Footer from "../../components/Footer/Footer";


const Menu = () => {
  const dinners = [
    "Krem z dyni podany z płatkami migdałów",
    "Roladka z kurczaka ze szpinakiem i serem feta",
    "Zrazy wieprzowe w sosie z leśnych grzybów",
    "Filety z pstrąga pieczone z cytryną",
    "Karkówka szpikowana czosnkiem",
    "Kluski śląskie",
    "Ziemniaczki z koperkiem",
    "Kolorowy ryż",
    "Kapusta zasmażana",
    "Warzywa na parze",
    "Surówka z buraczków",
  ];

  const warms = [
    "Zupa gulaszowa podana w chlebku",
    "Gołąbki w sosie z leśnych grzybów",
    "Żurek z jajkiem",
  ];

  const colds = [
    "Pomidorki z mozzarellą i bazylią",
    "Sałatka grecka",
    "Staropolskie mięsa pieczone",
    "Deska wędlin i serów",
    "Śledzie w dwóch odsłonach",
    "Ruloniki z szynki z sałatką jarzynową",
    "Sałatka lazurowa z gruszką i orzechami",
    "Jajka w sosie tatarskim",
    "Galaretki drobiowe",
    "Pierś z kurczaka z serkiem i suszonymi pomidorami",
    
  ];

  const cakes = [
    "Sernik królewski",
    "Stefanka",
    "Ciasto czekoladowe",
    "Miodownik",
    "Pani Walewska",
    "Ciasto marchewkowe",
    "Biszkopt z borówką amerykańską",
    "Biszkopt z malinami",
    "Ciasta niespodzianki - sprawdźcie sami!",
  ];

  return (
    <>
      <PageHeader>Menu</PageHeader>
      <SectionTitle>Obiad</SectionTitle>
      {dinners.map((dinner) => (
        <Section sectionItem={dinner} />
      ))}
      <SectionTitle>Dania na ciepło</SectionTitle>
      {warms.map((warm) => (
        <Section sectionItem={warm} />
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
