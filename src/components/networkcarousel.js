import React, { Component } from "react";
import kacheguda from "../img/kacheguda.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import bike3 from "../img/bike-3.jpg";
import bike4 from "../img/bike4.jpg";
import bike6 from "../img/bike6.jpg";
import bike7 from "../img/bike7.jpg";
import bike8 from "../img/bike8.png";
import bike from "../img/Bike.jpg";

const options = {
  responsiveClass: true,
  nav: false,
  loop: true,
  autoplay: true,
  smartSpeed: 100,
  dotsEach: false,
  responsive: {
    0: {
      items: 1,
    },
  },
};

class networkcarousel extends Component {
  render() {
    return (
      <>
        <h4>Kacheguda/Hyderabad</h4>
        <OwlCarousel
          className="slider-items owl-carousel ournetwork"
          {...options}
        >
          <div className="item" style={{ padding: 8 }}>
            <img src={kacheguda} alt="Bike parcel/ Transport / Shipping" />
          </div>

          <div className="item" style={{ padding: 8 }}>
            <img src={bike3} alt="bike shipment service from hyderabad" />
          </div>

          <div className="item" style={{ padding: 8 }}>
            <img src={bike4} alt="two wheeler transport in hyderabad" />
          </div>

          <div className="item" style={{ padding: 8 }}>
            <img src={bike6} alt="bike shipment service from hyderabad" />
          </div>

          <div className="item" style={{ padding: 8 }}>
            <img src={bike7} alt="low cost bike transport service in hyderabad" />
          </div>

          <div className="item" style={{ padding: 8 }}>
            <img src={bike8} alt="bike shipment service from hyderabad" />
          </div>

          <div className="item" style={{ padding: 8 }}>
            <img src={bike} alt="fastest bike transport service" />
          </div>
        </OwlCarousel>
      </>
    );
  }
}

export default networkcarousel;
