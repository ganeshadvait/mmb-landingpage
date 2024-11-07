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
import exclusivimg from "../img/bangalore.jpg";
import callicon from '../img/bike transport call icon.png';
import whatsappicon from '../img/Bike trasportation services from Bangalore.png';

const Bangalore = ({ fdata, tdata }) => {
  const userDetails = React.useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);

  React.useEffect(() => {
    const updateItem = {
      ...userDetails,
      fromCityId: "102",
      fromCityShortCode: "BLR",
      fromLocation: "Bangalore"
    };
    setUserDetails(updateItem);
  }, []);
  return (
    <div className="whole-component">
      <Helmet>
        <title>
          Best Bike parcel | bike Transportation services from Bangalore |
          Movemybike | Railways
        </title>
      </Helmet>
      <div className="main-wrapper row pr-2 exclusive-wrap" style={{backgroundImage: `url(${exclusivimg})`}}>
        {/* <img src={exclusivimg} className="exclusive-bg" alt="bike shipment service from Bangalore" /> */}
        <div className="content-wrapper col-md-7 exclusive-content">
          <h1>Bike Relocation and Delivery Services in Bangalore</h1>
          <br />

          <ul className="bullet-features">
            <li>Offering competitive rates for bike parcel, shifting, and moving in Bangalore</li>
            <li>Reliable door-to-door bike transportation and delivery solutions</li>
            <li>Safe and secure two-wheeler relocation across popular Bangalore localities</li>
            <li>Customized bike courier, shifting, and moving services to meet specific needs</li>
            <li>Experienced professionals handle motorcycles, scooters, and mopeds with care</li>
            <li>High-quality packing materials and specialized bike carriers prevent damage</li>
          </ul>
          <h4 style={{ textAlign: "left", paddingLeft: "20px" }}>
            For any assistance <a href="tel:9014044900"><img src={callicon} alt="Bike Transportation services from Bangalore" width="40px"/></a>  or <a href="//api.whatsapp.com/send?phone=919014044900&text=Hi, I want to use your transportation services"><img src={whatsappicon} alt="Bike Transportation services from benguluru" width="40px" /></a> us at
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
        <WholeComponent fdata={fdata} tdata={tdata} sdata={"BLR"} />
      </div>
      <CarouselMain />
      <OurServices />
      <TestiMonialCarousel />
      <ContactSub />
    </div>
  );
};

export default Bangalore;
