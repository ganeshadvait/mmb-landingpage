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
import exclusivimg from "../img/Transportbikefromvijayawada.webp";
import callicon from '../img/bike transport call icon.png';
import whatsappicon from '../img/Bike trasportation services from Bangalore.png';

const Vijayawada = ({ fdata, tdata }) => {
  const userDetails = React.useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);

  React.useEffect(() => {
    const updateItem = {
      ...userDetails,
      fromCityId
        :
        "107",
      fromCityShortCode
        :
        "VGA",
      fromLocation
        :
        "Vijayawada"
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
        {/* <img src={exclusivimg} className="exclusive-bg" alt="bike shipment service from vijayawada" /> */}
        <div className="content-wrapper col-md-7 exclusive-content">
          <h1> Affordable Bike Parcel, Shifting, and Moving Rates in Vijayawada</h1>
          <br />

          <ul className="bullet-features">
            <li>Reliable and budget-friendly bike parcel, shifting, and moving services in Vijayawada</li>
            <li>Hassle-free door-to-door pickup and delivery experience</li>
            <li>Tailored bike transportation solutions as per customer requirements</li>
            <li>Secure delivery of two-wheelers across major Vijayawada localities like Bund Area, Governorpet, Patamata, and Vijayawada Railway Station</li>
            <li>Skilled professionals handle bikes with utmost care and expertise</li>
            <li>High-quality packing materials and specialized carriers ensure bike safety during transit</li>
          </ul>
          <h4 style={{ textAlign: "left", paddingLeft: "20px" }}>
            For any assistance <a href="tel:9014044900"><img src={callicon} alt="Bike Transportation services from Vijayawada" width="40px"/></a>  or <a href="//api.whatsapp.com/send?phone=919014044900&text=Hi, I want to use your transportation services"><img src={whatsappicon} alt="Bike Transportation from vijayawada" width="40px" /></a> us at
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
        
        <WholeComponent fdata={fdata} tdata={tdata} sdata={"VZG"} />
        
      </div>
      <CarouselMain />
      <OurServices />
      <TestiMonialCarousel />
      <ContactSub />
    </div>
  );
};

export default Vijayawada;