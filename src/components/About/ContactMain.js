import React from "react";
import { delivery } from "../../img/delivery-3.png";
import ContactSub from "./ContactSub";

const ContactPage = () => {
  return (
    <div>
      <section className="contactmain" id="contactmain">
        <h2>Contact Us</h2>
        <div className="contact-container">
          <div className="contact-img">
            <ContactSub />
          </div>
          <div className="contact-form">
            <form>
              <div className="heading">
                <h4>Let's talk</h4>
              </div>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Comment"></textarea>
              <button type="submit">Comment</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
