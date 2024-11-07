import React from "react";
import "../static/Home.css";
import CarouselMain from "./About/CarouselMain";
import BannerCouroselComponent from './BannerCouroselComponent'
import TestiMonialCarousel from "./About/BannerCarousel";
import OurServices from "./About/OurServices";
import ContactSub from "./About/ContactSub";
import WholeComponent from "./wholeComponent";
import MapComponent from "./MapComponent/MapComponent";
import GalleryComponent from './GalleryComponentMain'
import FaqContentHome from "./FaqComponentHome";
import callicon from '../img/bike transport call icon.png';
import whatsappicon from '../img/Bike trasportation services from Bangalore.png';

const Home = ({ fdata, tdata }) => {
  return (
    <div className="whole-component">
      <BannerCouroselComponent />
      <div className="main-wrapper row pr-2">
        <div className="content-wrapper col-md-7">
          <h1> BIKE PARCEL / BIKE TRANSPORT <br />
            FAST & SAFE</h1>
          <br />
          <ul className="bullet-features">
            <li>
              <h3 style={{ fontSize: '1.25rem' }}>
                We offer the
                <i style={{ color: "burlywood" }}> Lowest prices </i> for bike
                parcel service than any other service provider in the market
              </h3>
            </li>
            <b />
            <li>
              <h4>
                <i style={{ color: "burlywood" }}>
                  <h3 style={{ fontSize: '1.25rem', display: 'inline' }}>Door pickup and Door delivery </h3>
                </i>
                facility available as per the demand of the customer
              </h4>
            </li>
            <li>
              <h3 style={{ fontSize: '1.25rem', display: 'inline' }}>
                Bike Transport Services available across India including 
                <i style={{ color: "burlywood" ,marginLeft:'5px'}}>
                  Hyderabad, Bangalore, Vizag, Vijayawada, Chennai, Delhi,
                  Pune, Hubli etc
                </i>
              </h3>
            </li>
            <li>
              <h3 style={{ fontSize: '1.25rem', display: 'inline' }}>
                We provide services of bike transport by Train with <i style={{ color: "burlywood" }}>customized bike transportation solutions</i> to meet the specific needs of each customer.
              </h3>
            </li>
          </ul>
          <br />
          <h4 style={{ textAlign: "left", paddingLeft: "20px" }}>
            For any assistance <a href="tel:9014044900"><img src={callicon} alt="Bike Transportation services from Hyderabad" width="40px"/></a>  or <a href="//api.whatsapp.com/send?phone=919014044900&text=Hi, I want to use your transportation services"><img src={whatsappicon} alt="Bike Transportation services from Banglore" width="40px" /></a> us at
          </h4>
          <h3
            style={{
              textAlign: "left",
              paddingLeft: "20px",
              color: "burlywood",
            }}
          >

            9014044900 , 9063506008
          </h3>
        </div>
        <WholeComponent fdata={fdata} tdata={tdata} sdata={""} />
      </div>

      <CarouselMain />
      <OurServices />
      <GalleryComponent />
      <FaqContentHome />
      <TestiMonialCarousel />
      <MapComponent />
      <ContactSub />
    </div>
  );
};
export default Home;
