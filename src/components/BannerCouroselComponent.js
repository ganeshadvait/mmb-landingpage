import React, { Component } from "react";
import Tirupati from "../img/Tirupati.jpg";
import Bangalore from "../img/bangalore.jpg";
import Hyderabad from "../img/Hyderabad.jpg";
import Vizag from "../img/vizag.PNG";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";

const options = {
  responsiveClass: true,
    nav: false,
    dots:false,
  loop: true,
  autoplay: true,
  smartSpeed: 100,
  dotsEach: false,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 1,
    },
    700: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
};

class BannerCouroselComponent extends Component {
  render() {
    return (
      <>
        <div className="" >
          <OwlCarousel
            className="owl-carousel fullBanner"
            {...options} style={{position: 'absolute'}}
          >
            <div className="item" >
              <img
                src={Tirupati}
                alt="Bike parcel/ Transport / Shipping"
              />
            </div>

            <div className="item" >
              <img
                src={Hyderabad}
                alt="bike shipment service from hyderabad"
                
              />
            </div>

            <div className="item" >
              <img
                src={Vizag}
                alt="bike parcel service from hyderabad"
                
              />
            </div>
            <div className="item" >
              <img src={Vizag} alt="bike transport from hyderabad to bangalore"  />
            </div>
            <div className="item" >
              <img src={Bangalore} alt="bike transport from bangalore to hyderabad"  />
            </div>
          </OwlCarousel>
        </div>
      </>
    );
  }
}

export default BannerCouroselComponent;

