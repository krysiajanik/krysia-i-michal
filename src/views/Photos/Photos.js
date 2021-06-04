import React from "react";
import UploadForm from "../../components/Gallery/UploadForm/UploadForm";
import PageHeader from "../../components/PageHeader/PageHeader";
import Section from "../../components/Section/Section";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Photos = () => {
  return (
    <>
      <PageHeader>Zdjęcia</PageHeader>
      <UploadForm />
    </>
  );
};

export default Photos;
