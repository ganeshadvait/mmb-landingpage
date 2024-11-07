import React from "react";
import "../static/Home.css";
import CarouselMain from "./About/CarouselMain";
import TestiMonialCarousel from "./About/BannerCarousel";
import OurServices from "./About/OurServices";
import ContactSub from "./About/ContactSub";
import {
  UserContext,
  UserDispatchContext,
} from "../Context/MyContext";
import { useContext } from "react";
import WholeComponent from "./wholeComponent";
import { Helmet } from "react-helmet";
import exclusivimg from "../img/Transportbikefromchennai.jpg";
import callicon from '../img/bike transport call icon.png';
import whatsappicon from '../img/Bike trasportation services from Bangalore.png';

const Chennai = ({ fdata, tdata }) => {
  const userDetails = React.useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);

  React.useEffect(() => {
    const updateItem = {
      ...userDetails,
      fromCityId
        :
        "106",
      fromCityShortCode
        :
        "MAA",
      fromLocation
        :
        "Chennai"
    };
    setUserDetails(updateItem);
  }, []);
  return (
    <div className="whole-component">
      <Helmet>
        <title>
          Best Bike parcel | bike Transportation services from Pune |
          Movemybike | Railways
        </title>
      </Helmet>
      <div className="main-wrapper row pr-2 exclusive-wrap" style={{backgroundImage: `url(${exclusivimg})`}}>
        {/* <img src={exclusivimg} className="exclusive-bg" alt="bike shipment service from chennai" /> */}
        <div className="content-wrapper col-md-7 exclusive-content">
          <h1>Competitive Pricing for Bike Parcel, Shifting, and Courier Services in Chennai</h1>
          <br />

          <ul className="bullet-features">
            <li>Offering competitive rates for bike parcel, shifting, and courier services in Chennai</li>
            <li>Hassle-free door-to-door bike transportation and delivery experience</li>
            <li>Tailored bike courier, shifting, and moving solutions to suit customer needs</li>
            <li>Secure delivery of two-wheelers across major areas like Anna Nagar, Adyar, Velachery, T. Nagar, and Tambaram</li>
            <li>Skilled professionals handle bikes with utmost care and expertise</li>
            <li>High-quality packing materials and specialized carriers ensure bike safety</li>
          </ul>
          <h4 style={{ textAlign: "left", paddingLeft: "20px" }}>
            For any assistance <a href="tel:9014044900"><img src={callicon} alt="Bike Transportation services from Chennai" width="40px"/></a>  or <a href="//api.whatsapp.com/send?phone=919014044900&text=Hi, I want to use your transportation services"><img src={whatsappicon} alt="Bike Transportation from chennai" width="40px" /></a> us at
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
        
        <WholeComponent fdata={fdata} tdata={tdata} sdata={"MAA"} />
        
      </div>
      <CarouselMain />
      <OurServices />
      <TestiMonialCarousel />
      <ContactSub />
    </div>
  );
};

export default Chennai;
