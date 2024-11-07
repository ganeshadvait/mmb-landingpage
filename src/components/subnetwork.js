import React from "react";
import "../static/subnetwork.css";
import image from "../img/bike-parcel-services.jpeg";

class Subnetwork extends React.Component {
  render() {
    return (
      <div
        
      >
        <div className="row" style={{
          color:'white',
          background: 'linear-gradient(rgb(184, 17, 26), #000)',
          filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr=`#fb4368`, endColorstr=`#fd733e`, GradientType=0 )',
          margin: 0,
          padding: '1rem 2rem',
          textAlign:'left'
        }}>
          <div className="col-md-8 text-left" >
            <h1 className="pb-3" style={{fontSize:'30px'}}>
              Bike parcel service available locations/Routes : 
            </h1>
            <p style={{fontSize: '18px',fontWeight: '400'}}>
              Move my bike seeks to provide bike parcel services across india
              over the period of time. Ultimately we seek to Bike parcel
              services from any where to anywhere in India on demand from
              customer. We have integerated ourselves with the indian railway
              network and various road transport serivice providers making our
              presense wide spread across india. However we have currenlty door
              pick up and door delivery facility along popular routes and
              locations only. These are the locations and routes where we have
              strong presence and offer door pick up and delivery at cheaper
              cost.
            </p>
            <div className="bullet-wrapper">
              <ul className="list-unstyled text-left bullet-features">
                <li>
                  Hyderabad to Bangalore, Vijayawada, Vishakapatnam, Delhi,
                  Chennai, Bhuwaneshar, Tirupati, Hubli, Howrah etc . To Book
                  your bike for parcel from hyderabad 
                  <a href="/hyderabad" class="btn btn-danger">
                    Book Now
                  </a>
                </li>

                <li>
                  Bangalore to Hyderabad , Vijayawada, Vishakapatnam, Delhi,
                  Mumbai, Chennai, Bhuwaneshar,Tirupati etc. To Book your bike
                  for parcel from Bangalore 
                  <a href="/bangalore" class="btn btn-danger">
                    Book Now
                  </a>
                </li>

                <li>
                  Tirupati to Hyderabad, Bangalore, Vijayawada, Vishakapatnam,
                  Delhi, Bhuwaneshar, Howrah, Chennai etc.
                  To Book your bike for parcel from Tirupati
                  <a href="/tirupati" class="btn btn-danger">
                    Book Now
                  </a>
                </li>

                <li>
                  Vishakapatnam to Hyderabad, Bangalore, Vijayawada, Tirupati,
                  Delhi, Chennai, Bhuwaneshar, Nellore etc.To Book your
                  bike for parcel from vizag
                  <a href="/vizag" class="btn btn-danger">
                    Book Now
                  </a>
                </li>
                <li>
                  Vijayawada to Bangalore, Hyderabad, Tirupati,
                  Delhi, Chennai, Bhuwaneshar, Nellore etc. To Book your
                  bike for parcel from Vijayawada
                  <a href="/vijayawada" class="btn btn-danger">
                    Book Now
                  </a>
                </li>
                <li>
                  Pune to Hyderabad,Pune to  Bangalore, Vijayawada, Tirupati,
                  Delhi, Chennai, Bhuwaneshar, Nellore etc. To Book your
                  bike for parcel from Pune
                  <a href="/pune" class="btn btn-danger">
                    Book Now
                  </a>
                </li>
                <li>
                  Chennai to Hyderabad, chennai to Bangalore, chennai to Vijayawada, Tirupati,
                  Delhi, Bhuwaneshar, Nellore etc. To Book your
                  bike for parcel from chennai
                  <a href="/chennai" class="btn btn-danger">
                    Book Now
                  </a>
                </li>
                <li>
                  Delhi to Hyderabad, chennai to Bangalore, chennai to Vijayawada, Tirupati, Bhuwaneshar, Nellore, Chennai etc. To Book your
                  bike for parcel from Delhi
                  <a href="/chennai" class="btn btn-danger">
                    Book Now
                  </a>
                </li>
                <li>
                  Goa to Hyderabad, chennai to Bangalore, chennai to Vijayawada, Tirupati, Bhuwaneshar, Nellore, Chennai etc. To Book your
                  bike for parcel from Delhi
                  <a href="/chennai" class="btn btn-danger">
                    Book Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4" style={{margin:'auto'}}>
            <img src={image} alt="Parcel sevices"width={450} />
          </div>
          <p style={{fontSize: '18px',fontWeight: '400'}}>
              We have strong integeration with indian railway and various road
              transport agencies. We choose mix of road and railways to transport
              goods such that we provide parcel services at low cost and
              delivery within 24 hours. Our charges are less than the bike
              tranport charges through railways and we provide additional
              services such as Door pick up and door delivery.
            </p>
        </div>
      </div>
    );
  }
}

export default Subnetwork;
