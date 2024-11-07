import React from "react";
import { Link } from "react-router-dom";
import Telangana from '../.././img/telangana.png';

const Features = () => {

  const Heading = [
    {
        heading : "Features of our Transportation Services",
        CTA : "view all"
    }
  ]
const Locations = [
    {
        heading : "Collabrated with",
        CTA : "Official parcel logistics parters with South central railway at Kacheguda"
    }
]
    return (
        <>
        <section className="features-of-transportation">
            <div className="inner-parent">
               <div className=" top parts">
                 <h3>{Heading[0].heading}</h3>
                 <Link to="/" className="view-all">
                 <p className="text-padding">View All</p>
                 </Link>
               </div>
               <div className=" bottom">
               <div className="cards"></div>
                <div className="cards"></div>
                <div className="cards"></div>
                <div className="cards"></div>
                <div className="cards"></div> 

               </div>
            </div>
            <div className="display-flex">
            <img src={Telangana} alt="Telangana" className="telangana"/>
                <div>
                    <h3 className="locations">{Locations[0].heading}</h3>
                    <p className="Lpara">{Locations[0].CTA}</p>
                </div>
            </div>
        </section>
        </>
    )
};
export default Features;