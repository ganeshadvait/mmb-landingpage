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
import exclusivimg from "../img/Transportbikefromvizag.jpg";
import callicon from '../img/bike transport call icon.png';
import whatsappicon from '../img/Bike trasportation services from Bangalore.png';

const Vizag = ({ fdata, tdata }) => {
  const userDetails = React.useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);

  React.useEffect(() => {
    const updateItem = {
      ...userDetails,
      fromCityId
        :
        "108",
      fromCityShortCode
        :
        "VIZ",
      fromLocation
        :
        "Vizag"
    };
    setUserDetails(updateItem);
  }, []);
  return (
    <div className="whole-component">
      <Helmet>
        <title>
          Best Bike parcel | bike Transportation services from Vizag |
          Movemybike | Railways
        </title>
      </Helmet>
      <div className="main-wrapper row pr-2 exclusive-wrap" style={{backgroundImage: `url(${exclusivimg})`}}>
        {/* /<img src={exclusivimg} className="exclusive-bg" alt="bike shipment service from vizag" /> */}
        <div className="content-wrapper col-md-7 exclusive-content"  >
          <h1> Affordable Bike Parcel, Shifting, and Moving Services in Visakhapatnam (Vizag)
          </h1>
          <br />

          <ul className="bullet-features">
            <li>Reliable and budget-friendly bike parcel, shifting, and relocation services in Vizag</li>
            <li>Convenient door-to-door pickup and delivery options available</li>
            <li>Customized bike transportation solutions to meet individual customer requirements</li>
            <li>Secure delivery of motorcycles, scooters, and mopeds across popular Vizag neighborhoods</li>
            <li>Skilled team ensures safe and damage-free transit using specialized carriers</li>
            <li>Comprehensive bike moving and packing techniques for hassle-free relocation</li>
          </ul>
          <h4 style={{ textAlign: "left", paddingLeft: "20px" }}>
            For any assistance <a href="tel:9014044900"><img src={callicon} alt="Bike Transportation services from Vizag" width="40px"/></a>  or <a href="//api.whatsapp.com/send?phone=919014044900&text=Hi, I want to use your transportation services"><img src={whatsappicon} alt="Bike Transportation services from Vizag" width="40px" /></a> us at
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

export default Vizag;