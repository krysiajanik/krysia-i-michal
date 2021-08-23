import React from "react";
import Section from "../Section/Section";
import SectionTitle from "../SectionTitle/SectionTitle";
import sittingPlanArray from "./SittingPlanArray";
import BackToTop from "../BackToTop/BackToTop";
import Footer from "../Footer/Footer";


const SittingList = () => {

    const tableArray = () => {

        let tableList = [];


        for (let n = 1; n <= 4; n++) {

            tableList.push(<SectionTitle>{n}</SectionTitle>)

            const table = (
                sittingPlanArray.filter((person) => person.tableNr == n)
                    .map((person) =>
                        <>

                            <Section key={`${person.tableNr}_${person.chairNr}`} sectionItem={`${person.firstName} ${person.lastName}`} />
                        </>
                    )
            );
            tableList.push(table);
        }
        return (tableList)
    };

    return (
        <>
            {tableArray()}

            <BackToTop />
           
        </>
    );
};

export default SittingList;