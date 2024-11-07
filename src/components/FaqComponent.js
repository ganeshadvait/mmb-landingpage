import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import "../static/faq.css";

function FaqContent(props) {
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
      <h3 style={{ color: "rgb(241, 148, 138)", marginBottom: "25px" }}>
        Frequently Asked Questions
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
            Do you have home pickup and delivery?
          </AccordionHeader>
          <AccordionBody accordionId="2">
            <strong>We do door pick up and delivery at Major locations.</strong>
            At other places , we will specificy the location where you can drop
            your bike for booking or you can collect your bike for delvery.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">
            What is the general transportation time?
          </AccordionHeader>
          <AccordionBody accordionId="3">
            <strong>Generally we will try to deliver with in 24 hours.</strong>
            however for distances more than 1000 KM , we will take 24-48 hours
            time.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">
            What safety measures are being taken for damage proof
            transportation?
          </AccordionHeader>
          <AccordionBody accordionId="4">
            We will do complete Covered packing to protect from any sort of
            scratches. Utmost care will be taken during loading and unloading of
            the bikes. Pictures of packed bikes can be found in the website.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5">
            What are the tracking facility you provide?
          </AccordionHeader>
          <AccordionBody accordionId="5">
            we will update the Booking , loading , Unloading through messages.
            Also you can call at the numbers given.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="6">
            What documents do we need to give?
          </AccordionHeader>
          <AccordionBody accordionId="6">
            We need xerox copy of RC of the Motor bike to be transported and
            Govt ID proof(Adhar) of the sender.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="7">
            How many places will you deliver?
          </AccordionHeader>
          <AccordionBody accordionId="7">
            We can arrange to send the bike to almost all the major locations.
            However door pick and delivery is available only at specific major
            locations only.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="8">
            What if the bike is damaged/lost ?
          </AccordionHeader>
          <AccordionBody accordionId="8">
            We will assess the damages and pay compensation to the party ,
            keeping the customer satisifaction as the prime motive.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="9">
            What are the prices for different destination?
          </AccordionHeader>
          <AccordionBody accordionId="9">
            price can be found by entering the orgin and destination in the
            above prescribed form of the home page. Or price can be found out
            from following table. These are the lowest prices being offered in
            the entire industry.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="10">
            How do you transport bikes?
          </AccordionHeader>
          <AccordionBody accordionId="10">
            We transport bikes by Road and Rail based on availablity of
            connectivity , Cost and time effectiveness.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default FaqContent;
