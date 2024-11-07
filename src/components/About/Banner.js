import React from "react";
import image from "../../img/Logistics-Companies.jpg";
import carbike from "../../img/carbike.png";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const navigate = useNavigate();
  const handleBook = () => {
    navigate("/home");
  };
  return (
    <div
      className="main-component about-wrapper"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="main-content row">
        <div className="col-md-8">
          <h1 style={{ fontSize: 30, color: "burlywood" }}>
             
            Why to choose Movemybike for bike parcel service..? 
          </h1>
          <p>
            Move my bike is a New age logistic company providing seamless End to
            End transportation services with prime focus on providing Fast and
            low cost transportation of goods specially TWO WHEELER MOTOR BIKES ,
            better than any of its competitors existing in the market currently.
          </p>
          <br />
          <h4>We specialise in the transportation of</h4>
          <div className="bullet-wrapper">
            <ul className="list-unstyled text-left bullet-features">
              <li>Two wheeler motor bikes</li>
              <li>Household goods</li>
              <li>Courier goods</li>
            </ul>
          </div>
          <p>
            We have our presence at
            <b style={{margin:'0 4px'}}>
              Hyderabad, Bangalore, Delhi , Chennai , Mumbai, Pune, Howrah and
              further expanding to more cities.
            </b> 
            Further We can transport goods from any place to any place on demand
            from the Customers.
          </p>
          <button className="btn btn-danger mt-2 mb-2" onClick={handleBook}>
            Book Now
          </button>
        </div>
        <div className="col-md-4">
          <img
            src={carbike}
            width="450"
            alt="bike Transport"
            style={{ paddingLeft: "70px", paddingTop: "120px" }}
          />
        </div>
      </div>
      <div className="feapoints-wrapper">
        <div className="box-1">
          <div className="">
            <span className="indexnum">01</span>
            <span>
              <b>Affordable Price</b>
            </span>
          </div>
          <p>
            We use a mix of rail and road transport to optimise the cost of
            transportation and thus offer lowest serivice at possible cost for
            our customers.
          </p>
        </div>
        <div className="box-2">
          <div className="">
            <span className="indexnum">02</span>
            <span>
              <b>Seamless end to end service</b>
            </span>
          </div>
          <p>
            We provide door pick up and door delivery at most places and we plan
            to extend the same to all places to take our services to door steps.
          </p>
        </div>
        <div className="box-3">
          <div className="">
            <span className="indexnum">03</span>
            <span>
              <b>Fast and Safe Delivery</b>
            </span>
          </div>
          <p>
            We target to deliver goods within 24 to 48 hours from any place to
            any place in India . We do quality packing to ensure that the goods
            are transported safe and secure during transit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
