import React from "react";
import bikedel from "../../img/packed-img.jpg";
import promise from "../../img/Customer-Promise.png";
import furniture from "../../img/furniture-shift.png";
import document from "../../img/dovuments-shift.png";
import electronic from "../../img/electroninc-shift.png";
import biglogo from "../../img/delivery-3.png"

const OurServices = () => {
  return (
    <div>
      <section className="service" id="service">
        <div className="heading">
          <h2>Our Transportation Services</h2>
          <p>We specialise in providing following transportation services for our customer</p>
        </div>
        <div className="services">
          <ul>
            <a href="/whatwedo">
            <li>
              <img src={bikedel} alt="Bike parcel" />
              <h6>Motor Bike Transportation / <br/> Transportation of Two wheelers</h6>
            </li>
            </a>
            <a href="/whatwedo">
            <li>
              <img src={furniture} alt="Furniture Delivery" />
              <h6>Furniture shifting</h6>
            </li></a>
            <a href="/whatwedo">
            <li>
              <img src={electronic} alt="Electronic Items Delivery" />
              <h6>Electronic goods shipping</h6>
            </li>
            </a>
            <a href="/whatwedo">
            <li>
              <img src={document} alt="Document Delivery" />
              <h6>Mailing Documents</h6>
            </li>
            </a>
            <a href="/whatwedo">
            <li>
              <img
                src={biglogo}
                alt="Business Goods Delivery"
              />
              <h6>Courier Goods transportation</h6>
            </li>
            </a>
            <a href="/whatwedo">
            <li>
              <img src={promise} alt="Industrial Goods Delivery" />
              <h6>Industrial Goods transportation</h6>
            </li>
            </a>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
