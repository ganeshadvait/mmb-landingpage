import React from "react";

const AboutContent = () => {
  return (
    <div className="AboutContent-wrapper">
      <h1 style={{ color: "rgb(241, 148, 138)" }}>About Us</h1>
      <br />
      <h5>
        Move my bike is a New age logistic company providing seamless End to End
        transportation services with prime focus on providing Fast and low cost
        services compared to any of its competitors.
      </h5>
      <h4>We specialise in the transportation of</h4>
      <div className="bullet-wrapper" style={{ display: "flex" }}>
        <ul className="list-unstyled text-left bullet-features">
          <li>Two wheeler motor bikes </li>
          <li>Household goods</li>
        </ul>
        <ul className="list-unstyled text-left bullet-features">
          <li>Courier goods </li>
          <li>Industrial products etc </li>
        </ul>
      </div>
      <p>
        We have our presence at Hyderabad, Bangalore, Delhi , Chennai , Mumbai,
        Pune , Howrah and expanding to more cities .We can transport goods from
        any place to any place on demand.
      </p>
      <p>
        Parcel service through Railways requires fulfilment of certain
        obligations related to Packing and Submission of Forwarding note. We
        MOVEMYBIKE ensure that we follow all the Railway parcel rules and
        regulations, in addition to providing the Door pickup and delivery.
      </p>
      <p>
        Currently we are operating majorly From Hyderabad to major destinations
        such as
        <b> Chennai ,Delhi, Mumbai, Howrah etc</b>
      </p>
    </div>
  );
};

export default AboutContent;
