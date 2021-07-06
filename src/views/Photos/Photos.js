import React from "react";
import Gallery from "../../components/Gallery/Gallery";
import PageHeader from "../../components/PageHeader/PageHeader";
import BackToTop from "../../components/BackToTop/BackToTop";
import Footer from "../../components/Footer/Footer";

const Photos = () => {
  return (
    <>
      <PageHeader>Zdjęcia</PageHeader>
      <Gallery />
      <BackToTop />
      <Footer />
    </>
  );
};

export default Photos;
