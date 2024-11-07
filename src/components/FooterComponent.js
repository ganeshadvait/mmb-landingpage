import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
          <h3>Bike shifting availablity</h3>
          <div className="col-md-6 col-sm-12 text-left mb-5">
              <ul>
                <li>Bike Transport from Bangalore to Hyderabad</li>
                <li>Bike Transport from Bangalore to Vijayawada</li>
                <li>Bike Transport from Hyderabad to Bangalore</li>
                <li>Bike Transport from Hyderabad to Vishakapatnam</li>
                <li>Bike Transport from Hyderabad to Chennai</li>
                <li>Bike Transport from Bangalore to Chennai</li>
                <li>Bike Transport from Bangalore to Vijayawada</li>
                <li>Bike Transport from Hyderabad to Vijayawada</li>
                <li>Bike Transport from Nellore to Bangalore</li>
                <li>Bike Transport from Nellore to Hyderabad</li>
                <li>Bike Transport from Hyderabad to Pune</li>
                <li>Bike Transport from Vishakapatnam to Chennai</li>
                <li>Bike Transport from Pune to Delhi</li>
                <li>Bike Transport from Pune to Hyderabad</li>
              </ul>

            </div>
            <div className="col-md-6 col-sm-12 text-left">
            <ul>
                <li>Bike Transport from Hyderabad to Delhi</li>
                <li>Bike Transport from Hyderabad to Tirupati</li>
                <li>Bike Transport from Bangalore to Delhi</li>
                <li>Bike Transport from Bangalore to Tirupati</li>
                <li>Bike Transport from Tirupati to Chennai</li>
                <li>Bike Transport from Tirupati to Bangalore</li>
                <li>Bike Transport from Tirupati to Hyderabad</li>
                <li>Bike Transport from Tirupati to Vijayawada</li>
                <li>Bike Transport from Tirupati to Vishakapatnam</li>
                <li>Bike Transport from Vishakapatnam to hyderabad</li>
                <li>Bike Transport from Vishakapatnam to Bangalore</li>
                <li>Bike Transport from Vishakapatnam to Delhi</li>
                <li>Bike Transport from Pune to Bangalore</li>
                <li>Bike Transport from pune to Chennai</li>
              </ul>

            </div>
            <div className="col-md-4 col-sm-6 col-sm-6 text-left">
              <h4>Move My Bike</h4>
              <address>
                Hyderabad,
                <br />
                Telangana,
                <br />
                India
                <br />
                <span>
                  <strong>Phone : </strong>
                </span>
                +91 9014044900 / 9063506008
                <br />
                <span>
                  <strong>Email : </strong>
                </span> 
                <a href="mailto:movemybike.customer@gmail.com">
                  movemybike.customer@gmail.com
                </a>
              </address>
            </div>
            <div className="col-4 col-sm-4 text-left">
              <h5>Userful Links</h5>
              <ul className="list-unstyled text-left">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/home">Menu</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="col-4 col-sm-4 text-left">
              <h5>Operating In</h5>
              <ul className="list-unstyled text-left">
                <li>Hyderabad</li>
                <li>Chennai</li>
                <li>Banglore</li>
                <li>Delhi</li>
                <li>Mumbai</li>
                <li>Howrah</li>
              </ul>
            </div>
            <div className="col-12 col-sm-4 text-left">
              <div className="social-links">
                <a
                  className="btn btn-social-icon btn-google"
                  href="https://www.instagram.com/movemybike.in/"
                >
                  <i className="fa fa-instagram"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-facebook"
                  href="https://www.facebook.com/profile.php?id=100087409239964"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-linkedin"
                  href="http://www.linkedin.com/in/"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-twitter"
                  href="http://twitter.com/"
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-google"
                  href="https://www.youtube.com/@movemybike"
                >
                  <i className="fa fa-youtube"></i>
                </a>
                <a className="btn btn-social-icon" href="mailto:">
                  <i className="fa fa-envelope-o"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto">
              <p>© Copyright Intelizen Infa & Logistics - MoveMyBike</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
