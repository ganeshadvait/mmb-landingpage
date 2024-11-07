import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import "../static/faq.css";

function FaqContentHome(props) {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div className="FaqContent-wrapper">
      <div className="shipping-process">
      <h3 style={{ color: "rgb(241, 148, 138)", marginBottom: "25px" }}>
        Step-By-Step guide of our bike shifting process
      </h3>
      <ul className="text-left">
        <li><b style={{ color: "rgb(241, 148, 138)"}}>Schedule Your Door Pick-Up:</b> The first step is to schedule a pickup time that is convenient for you. We will send one of our experienced team members to pick up your bike from your given location.</li>
        <li><b style={{ color: "rgb(241, 148, 138)"}}>Prepare Your Bike For Shipment:</b> Once we have picked up your bike, we will thoroughly inspect it and take care of any necessary preparation required for shipment. This includes disassembling the bike if needed and packing it securely in our specially designed shipping containers. Pictures of packed bike will be made available with customer</li>
        <li><b style={{ color: "rgb(241, 148, 138)"}}>Shipping Your Bike:</b> We use only the safest and most reliable shipping methods to ensure that your bike reaches its destination safely. </li>
        <li><b style={{ color: "rgb(241, 148, 138)"}}>Door Delivery:</b> Once your bike has reached its destination, we will notify you and arrange for a safe delivery. We will also unpack and reassemble the bike for you so that it is ready to ride.</li>
      </ul>
      <h6 className="text-left mb-5">At Bike Transport, we strive to provide our customers with the best possible service at all times. Our team of experienced professionals are available 24/7 to assist you with any queries or concerns that you may have. We will provide the tracking of bike time to time. So don’t hesitate to get in touch with us if you need assistance regarding bike shifting.</h6>
      </div>
      <h3 style={{ color: "rgb(241, 148, 138)", marginBottom: "25px" }}>
        FAQ's about our transport services
      </h3>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">
            What is the procedure to Book bike for shipping?
          </AccordionHeader>
          <AccordionBody accordionId="1">
            <ul className="text-left">
              <li>
                You can directly call us at 
                <strong>9014044900 / 9063506008</strong>
              </li>
              <li>
                You can book the transport through this website by filling the
                required details above.
              </li>
            </ul>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">
            How Much time Does a Bike take to Reach the Destination
          </AccordionHeader>
          <AccordionBody accordionId="2">
            It will largely depend upon the distance The distance is the prime cost and time affecting factor. Pickup and delivery locations will also affect the Timings. The standard delivery time most bike transportation commit is 4-5 days.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">
            Can bike be transported with petrol in fuel tank?
          </AccordionHeader>
          <AccordionBody accordionId="3">
            No, before packing transporters always empty the fuel tank.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">
            Is my bike safe during transportation?
          </AccordionHeader>
          <AccordionBody accordionId="4">
          Yes, we prioritize the safety of your bike during transportation. Additionally, we provide transit insurance coverage to safeguard against any unforeseen incidents that may occur during transportation.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5">
            What documents are required to transport Bike?
          </AccordionHeader>
          <AccordionBody accordionId="5">
            Important Documents Required for Bike Transport Service
            <ul>
              <li>Government-issued ID proof.</li>
              <li>Registration Certification of the bike. RC must bear the same name as the ID proof.</li>
              <li>Photocopy of bike insurance paper</li>
            </ul>

          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="6">
            Do Bike transport company offer bike packing service also?
          </AccordionHeader>
          <AccordionBody accordionId="6">
          Yes, bike transport company offer good bike packing service, they use good quality packaging material like bubble wrap, thermocole and corrugated sheet for complete protection to avoid the damages to bike during bike relocation.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="7">
            Is bike transportation done door to door basis?
          </AccordionHeader>
          <AccordionBody accordionId="7">
            Yes, most bike transportation company will provide you with door pick and door delivery after safe packing for your bike.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="8">
            What is the positive point of hiring the providers of bike transport services from Movemybike?
          </AccordionHeader>
          <AccordionBody accordionId="8">
            One of the biggest positives of booking the bike movers with Movemybike is that we make sure to verify the two wheeler relocation service providers offering the best quality services near your area to ensure your vehicle is transported to the new location damage free.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="9">
            What kind of bikes can I shift?
          </AccordionHeader>
          <AccordionBody accordionId="9">
            The bike shifting service providers associated with Movemybike are efficient in moving any kind of the two wheeler like the luxury, sports, regular bikes and so on. However, if you have any special requirement with regard to the shifting of the bike, then ensure you discuss with the service providers in advance to avoid any inconvenience.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default FaqContentHome;
