import React, { Component } from "react";
import Subnetwork from "./subnetwork";
import OurServices from "./About/OurServices";
import ContactSub from "./About/ContactSub";
import { Helmet } from "react-helmet";

export default class Ournetwork extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>
            Best Bike parcel | bike Transportation services Network | Movemybike
            | Railways
          </title>
        </Helmet>
        <Subnetwork />
        <OurServices />
        <ContactSub />
      </>
    );
  }
}
