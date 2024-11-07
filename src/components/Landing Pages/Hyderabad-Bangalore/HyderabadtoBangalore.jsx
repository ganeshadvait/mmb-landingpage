import React from "react";
import { Link } from 'react-router-dom';
import './Hyderabad-Bangalore.css';
import Lheader from "../../Lcomponents/Lheader";
import Lfooter from "../../Lcomponents/Lfooter";
import Lhero from "../../Lcomponents/Lhero";
import Lstepform from "../../Lcomponents/LStepform";
import BeforeFooter from "../../Lcomponents/Beforefooter";
import Features  from "../../Lcomponents/Features";
import Lservices from "../../Lcomponents/Lservices";
import Packages from "../../Lcomponents/Packages";
import Reviews from "../../Lcomponents/Reviews";
import SbsGuide from "../../Lcomponents/sbsGuide";
import LpLocations from "../../Lcomponents/LpLocations";
import Faqs from "../../Lcomponents/Lfaqs";


function HyderabadtoBangalore() {
    return (
        <>
        <section className="Landing-page">
        <Lheader />
        <Lhero />
        <Features />
        <Lservices />
        <Packages />
        <Reviews />
        <SbsGuide />
        <LpLocations />
        <Faqs />
        <BeforeFooter />
            <Lfooter />
            {/* <Lstepform /> */}
            </section>
        </>
    );
}

export default HyderabadtoBangalore;
