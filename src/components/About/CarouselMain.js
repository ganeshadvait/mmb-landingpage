import React, { Component } from "react";
import del from "../../img/delivery-img.png";
import coupns from "../../img/packed-img.jpg";
import promise from "../../img/Customer-Promise.png";
import compensation from "../../img/compensation-img.png";
import track from "../../img/live-tracking-img.png";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";

const options = {
  responsiveClass: true,
  // nav: true,
  loop: true,
  autoplay: true,
  smartSpeed: 100,
  dotsEach: true,
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
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
};

class TestiMonialCarousel extends Component {
  render() {
    return (
      <>
        <div className="feactures-carousel" style={{paddingTop:'2rem'}}>
          <h3 style={{ color: "rgb(241, 148, 138)", marginBottom: "25px" }}>
            Features of our Transportation services
          </h3>
          <OwlCarousel
            className="slider-items owl-carousel carousel-content"
            {...options}
          >
            <div className="item" style={{ padding: 8 }}>
              <h4>Door pick up and door delivery as demanded by customer</h4>
              <img
                src={del}
                alt="Bike parcel/ Transport / Shipping"
                style={{ width: "150px" }}
              />
            </div>

            <div className="item" style={{ padding: 8 }}>
              <h4>Provision of Monetory compensation for Delayed delivery</h4>
              <img
                src={promise}
                alt="bike transport service from bangalore"
                style={{ width: "180px" }}
              />
              <h4> We Promise the delivery time. </h4>
            </div>

            <div className="item" style={{ padding: 8 }}>
              <h4>
                Transperant procedure for the compensation in case of any
                damages during transportation 
              </h4>
              <img
                src={compensation}
                alt="best bike parcel service in hyderabad"
                style={{ width: "180px" }}
              />
            </div>
            <div className="item" style={{ padding: 8 }}>
              <h4>
                Status of transportation will be updated on regular intervals
              </h4>
              <img src={track} alt="bike parcel service from hyderabad" style={{ width: "180px" }} />
            </div>
            <div className="item" style={{ padding: 8 }}>
              <h4>
                Pictures of packed bike will be made available with customer
              </h4>
              <img src={coupns} alt="bike transport from hyderabad to bangalore" style={{ width: "180px" }} />
            </div>
          </OwlCarousel>
        </div>
      </>
    );
  }
}

export default TestiMonialCarousel;
