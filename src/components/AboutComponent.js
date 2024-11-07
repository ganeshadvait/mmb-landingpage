import React, { Component } from "react";
import Banner from "./About/Banner";
import CarouselMain from "./About/CarouselMain";
import TestiMonialCarousel from "./About/BannerCarousel";
import OurServices from "./About/OurServices";
import ContactSub from "./About/ContactSub";
import FaqContent from "../components/FaqComponent";
import ".././static/about.css";
import "./About/Carousel/carousel.css";

export class About extends Component {
  render() {
    return (
      <div className="">
        <Banner />
        {/* <AboutContent /> */}
        <CarouselMain />
        <OurServices />
        <TestiMonialCarousel />
        <FaqContent />
        <ContactSub />
      </div>
    );
  }
}

export default About;
