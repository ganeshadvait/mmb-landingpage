import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import React, { Component } from "react";
import "./Carousel/carousel.css";

const options = {
  margin: 30,
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
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 1,
    },
  },
};

class CarouselMain extends Component {
  render() {
    return (
      <>
        <h3 style={{ color: "rgb(241, 148, 138)", marginBottom: "25px" }}>
          Customers about our parcel services
        </h3>
        <div className="corosel-wrapper">
          <OwlCarousel className="slider-items owl-carousel" {...options}>
            <div className="item">
              <div className="rating-wrapper">
                <span className="star-icon"></span>
                <span className="star-icon"></span>
                <span className="star-icon"></span>
                <span className="star-icon"></span>
                <span className="star-icon"></span>
              </div>
              <p>
                "I moved my bike from Hyderabad to Bangalore. I got the bike as
                early as i expected and the service is very good. Price is very
                good for the service. Thank You Team MoveMyBike."
              </p>
              <p className="testname">-Venkat</p>
            </div>
            <div className="item">
              <div className="rating-wrapper">
                <span className="star-icon"></span>
                <span className="star-icon"></span>
                <span className="star-icon"></span>
                <span className="star-icon"></span>
                <span className="star-icon"></span>
              </div>
              <p>
                "I moved my bike from Ananthapur to Ramagundam it was a very
                good experiance with MoveMyBike.in . Excellent follow up in ensuring safe
                delivery
                <br /> Thank You Team MoveMyBike.in"
              </p>
              <p className="testname">-Harish</p>
            </div>
            <div className="item">
              <div className="rating-wrapper">
                <span className="star-icon"></span>
                <span className="star-icon"></span>
                <span className="star-icon"></span>
                <span className="star-icon"></span>
                <span className="star-icon"></span>
              </div>
              <p>"Fastest delivery compared to any other service providers"</p>
              <p className="testname">-Pooja</p>
            </div>
            <div className="item">
              <div className="rating-wrapper">
                <span className="star-icon"></span>
                <span className="star-icon"></span>
                <span className="star-icon"></span>
                <span className="star-icon"></span>
              </div>
              <p>" Door pickup and Door Delivery option is very good with respect to the Price of the service"</p>
              <p className="testname">-Shankar</p>
            </div>
          </OwlCarousel>
        </div>
      </>
    );
  }
}

export default CarouselMain;
