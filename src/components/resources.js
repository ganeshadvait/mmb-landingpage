import React from "react";
import "../static/resources.css";
import { Helmet } from "react-helmet";

export default function Resources() {
  return (
    <div
      className="resources-content"
      style={{
        color:'white',
        background: 'linear-gradient(rgb(184, 17, 26), #000 50%)',
        filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr=`#fb4368`, endColorstr=`#fd733e`, GradientType=0 )',
        margin: 0,
        padding: '1rem 2rem',
        textAlign:'left'
      }}
    >
      <Helmet>
        <title>
          Choose Movembybike for Bike parcel and tranportaion over Railways | bike transport by train
        </title>
      </Helmet>
      <div className="row" style={{
            padding:"2%"
          }}>
        <h1>
          Difficulties in Transporting a Motorbike 
        </h1>
        <p
          style={{
            color: "white",
            textAlign: "left",
            fontSize: "20px",
            opacity: "0.8",
          }}
        >
          Size and weight: Motorbikes are typically smaller and lighter than
          cars, but they can still be difficult to transport due to their size
          and weight. For example, it can be challenging to load a motorbike
          onto a trailer or into the back of a pickup truck.
          <br />
          <br />
          Fragility: Motorbikes are often more fragile than cars, and they can
          be damaged easily during transport. For example, the handlebars or
          mirrors can be knocked off if the motorbike is not secured properly.
          <br /> <br />
          Loading and unloading: Loading and unloading a motorbike can be
          difficult, especially if you do not have the right equipment. A ramp
          or lift may be required to get the motorbike onto a trailer or into
          the back of a truck.
          <br /> <br />
          Weather: Weather can also be a factor when transporting a motorbike.
          Rain, wind, and extreme temperatures can all cause problems, such as
          rust or wear and tear on the bike.
          <br /> <br />
          Security: Motorbikes are also more vulnerable to theft than cars, so
          it is important to take steps to secure the bike during transport.
          This might include using a lock or cable to secure the bike to the
          trailer or truck, or installing an alarm system.
          <br /> <br />
        </p>
        <h2
          style={{
            textAlign: "left",
            opacity: "0.8",
            color: "burlywood",
          }}
        >
          Options available for transporting your motorbike: 
        </h2>
        <p
          style={{
            color: "white",
            textAlign: "left",
            fontSize: "20px",
            opacity: "0.8",
          }}
        >
          <b>Riding the motorcycle to your destination</b> : This is an option
          if you're physically able to ride the motorcycle and you have the time
          to do so.
          <br /> <br />
          <b>Shipping via bus in road transport</b> : In bus transport first of
          all there is often no specific place for Motorbikes. hence bikes being
          often more fragile than cars and are likely to be damaged in the
          process of transport by road. For example, the handlebars or mirrors
          can be knocked off if the motorbike is not secured properly. Also
          there is no guarenteed availability of space and hence transporting
          immediately.
          <br /> <br />
          <b>Shipping via Indian railways </b>: Bike parcel through indian
          railways in one of the most popular ways to transport bikes in india.
          It is generally accepted that bike parcel through railways in cheaper
          as charges are less. However transportation through railways has its
          own challenges. Indian railways does not provide door pick up and door
          delivery , hence the consigner has to go to the parcel office to book
          and collect the bike. Another challenge is that , the consignee has to
          send the physical copy of the railway reciept through courier to the
          destination and on production of only Original Railway recciept does
          the railway will give the delivery of the bike. Also at the busy
          parcel offices like Hyderabad and Bangalore , there can be long Qs for
          booking which can be time consuming and frustrating. Many a times
          there may not be direct train available hence Railway might not accept
          the booking from their parcel office to some particular destinations.
          <br /> <br />
          <b>Shipping via Movemybike</b>: Bike parcel through Movemybike seeks
          to address the disadvantages of the Road and Railway transport by
          providing the End to End comprehensive Parcel service.
          <br />
          1. Movemybike will provide door pick up and door delivery saves huge
          amount of time which required for you to go to parcel office and book
          / take delivery. <br />
          2. Assured transit time against the delays in the other transport
          modes. <br />
          3. We provide Quality packing which will ensure that your product is
          not damaged during the transit <br />
          4. We are completly digital with booking, making the payments ,
          effecting the delivery and getting feedback. <br />
          <br />
          <b>
             
            Use Movemybike to Parcel / Transport your bike from your door steps,
            Fast, safe and convenient 
          </b>
          <br />
          <div style={{ textAlign: "center" }}>
            <a href="/home" className="btn btn-danger">
              Book now
            </a>
          </div>
        </p>
      </div>
    </div>
  );
}
