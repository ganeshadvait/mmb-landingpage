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
import exclusivimg from "../img/Tirupati.jpg";
import callicon from '../img/bike transport call icon.png';
import whatsappicon from '../img/Bike trasportation services from Bangalore.png';

const Tirupati = ({ fdata, tdata }) => {
  const userDetails = React.useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);

  React.useEffect(() => {
    const updateItem = {
      ...userDetails,
      fromCityId
        :
        "110",
      fromCityShortCode
        :
        "TIR",
      fromLocation
        :
        "Tirupati"
    };
    setUserDetails(updateItem);
  }, []);
  return (
    <div className="whole-component">
      <Helmet>
        <title>
          Best Bike parcel | bike Transportation services from Tirupati |
          Movemybike | Railways
        </title>
      </Helmet>
      <div className="main-wrapper row pr-2 exclusive-wrap" style={{backgroundImage: `url(${exclusivimg})`}}>
        {/* <img src={exclusivimg} className="exclusive-bg" alt="bike shipment service from tirupati" /> */}
        <div className="content-wrapper col-md-7 exclusive-content">
          <h1>Competitive Pricing for Bike Parcel, Shifting, and Courier Services in Tirupati</h1>
          <br />

          <ul className="bullet-features">
            <li>Offering competitive rates for bike parcel, shifting, and courier services in Tirupati</li>
            <li>Convenient door-to-door pickup and delivery options available</li>
            <li>Customized bike courier, shifting, and moving solutions to meet individual needs</li>
            <li>Secure delivery of two-wheelers across popular areas like Alipiri, Tirumala, Srinivasa Nagar, and Chandragiri</li>
            <li>Experienced team ensures damage-free transit using specialized bike carriers</li>
            <li>Comprehensive packing and moving techniques for hassle-free two-wheeler relocation</li>
          </ul>
          <h4 style={{ textAlign: "left", paddingLeft: "20px" }}>
            For any assistance <a href="tel:9014044900"><img src={callicon} alt="Bike Transportation services from Tirupathi" width="40px"/></a>  or <a href="//api.whatsapp.com/send?phone=919014044900&text=Hi, I want to use your transportation services"><img src={whatsappicon} alt="Bike Transportation from Tirupathi" width="40px" /></a> us at
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
        
        <WholeComponent fdata={fdata} tdata={tdata} sdata={"TIR"} />
        
      </div>
      <CarouselMain />
      <OurServices />
      <TestiMonialCarousel />
      <ContactSub />
    </div>
  );
};

export default Tirupati;
