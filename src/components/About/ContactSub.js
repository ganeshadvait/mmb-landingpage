import React from "react";
import axios from "axios";
const API_URL = process.env.REACT_APP_BACKEND_URL;
const url = API_URL + "/v1/cus/contact";
class ContactSub extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "",
        toemail: "",
        msgBody: "",
        mobilenum: "",
        contactmethod :"",
      },

      error: "",
    };
    this.validatecon = this.validatecon.bind(this);
  }

  handleSubmit(e) {
    const valid = this.validatecon();
    e.preventDefault();
    if (valid === 0) {
      axios({
        method: "POST",
        url: url,
        data: this.state.formData,
      }).then((response) => {
        if (response.data) {
          alert("Thank you for contacting us. We will contact you soon");
          this.resetForm();
        } else if (!response.data) {
          alert("Something Went Wrong. Please try again");
        }
      });
    }
  }
  validatecon = () => {
    let err;
    if (
      this.state.formData.name === "" ||
      this.state.formData.toemail === "" ||
      this.state.formData.msgBody === "" ||
      this.state.formData.contactMethod === ""
    ) {
      this.setState({
        formData: {
          name: this.state.formData.name,
          toemail: this.state.formData.toemail,
          msgBody: this.state.formData.msgBody,
          mobilenum :this.state.formData.mobilenum,
          contactmethod : this.state.formData.contactmethod,
        },
        error: "please enter all the required fields.",
      });
      err = 1;
    } else {
      this.setState({
        formData: {
          name: this.state.formData.name,
          toemail: this.state.formData.toemail,
          msgBody: this.state.formData.msgBody,
          mobilenum : this.state.formData.mobilenum,
          contactmethod : this.state.formData.contactmethod,
        },
        error: "",
      });
      err = 0;
    }
    return err;
  };
  resetForm() {
    this.setState({
      formData: { name: "", toemail: "", msgBody: "",mobilenum:"", contactmethod:"" },
      error: "",
    });
  }
  render() {
    return (
      <div>
        <section className="contactmain" id="contactmain">
          <h2>Get in Touch</h2>
          <div className="contact-container">
            <div className="contact-info p-5" width="50%">
              <h3>Contact Details</h3>
              <br />
              <h6>
                Fill up the Form and Our Team will get back to you with in 24
                hours
              </h6>
              <br />
              <div className="contact-det-wrapper">
                <p>
                  Phone :<br /> +91 9014044900/9063506008
                </p>
                <p>
                  E-mail :<br />
                  <a
                    href="mailto:movemybike.customer@gmail.com"
                    style={{ color: "white" }}
                  >
                    movemybike.customer@gmail.com
                  </a>
                </p>
                <p>Address : Hyderabad,Telangana,India</p>
              </div>
            </div>
            <div className="contact-form" width="50%">
              <span className="danger-text">{this.state.error}</span>
              <form
                id="contactform"
                onSubmit={this.handleSubmit.bind(this)}
                method="POST"
              >
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                  id="name"
                  value={this.state.formData.name}
                  onChange={this.onNameChange.bind(this)}
                />
  
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  value={this.state.formData.toemail}
                  onChange={this.onEmailChange.bind(this)}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="form-control"
                  id="mobilenum"
                  pattern="[0-9]{10}"
                  value={this.state.formData.mobilenum}
                  onChange={this.onPhoneNumChange.bind(this)}
                />
                <select
                  id="contactmethod"
                  name="contactmethod"
                  className="form-control"
                  value={this.state.formData.contactmethod}
                  onChange={this.onContactChange.bind(this)}
                >
                  <option  value="" disabled selected>Preferred Contact Method</option>
                  <option value="Email">Email</option>
                  <option value="Phone">Phone</option>
                </select>
                <br></br>
                <textarea
                  placeholder="message"
                  className="form-control"
                  rows="5"
                  id="message"
                  value={this.state.formData.msgBody}
                  onChange={this.onMessageChange.bind(this)}
                ></textarea>
                <button type="submit">submit</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
  onNameChange(event) {
    // this.setState({ name: event.target.value });
    this.setState({
      formData: {
        name: event.target.value,
        toemail: this.state.formData.toemail,
        mobilenum :this.state.formData.mobilenum,
        contactmethod:this.state.formData.contactmethod,
        msgBody: this.state.formData.msgBody,
      },
    });
  }
  onEmailChange(event) {
    // this.setState({ toemail: event.target.value });
    this.setState({
      formData: {
        name: this.state.formData.name,
        toemail: event.target.value,
        mobilenum :this.state.formData.mobilenum,
        contactmethod:this.state.formData.contactmethod,
        msgBody: this.state.formData.msgBody,
       
      },
    });
  }
  onPhoneNumChange(event) {
    this.setState({
      formData: {
        name: this.state.formData.name,
        toemail: this.state.formData.toemail,
        mobilenum : event.target.value,
        contactmethod:this.state.formData.contactmethod,
        msgBody: this.state.formData.msgBody,
      },
    });
  }
  onMessageChange(event) {
    // this.setState({ msgBody: event.target.value });
    this.setState({
      formData: {
        name: this.state.formData.name,
        toemail: this.state.formData.toemail,
        mobilenum :this.state.formData.mobilenum,
        contactmethod:this.state.formData.contactmethod,
        msgBody: event.target.value,
      },
    });
  }
  onContactChange(event) {
    // this.setState({ msgBody: event.target.value });
    this.setState({
      formData: {
        name: this.state.formData.name,
        toemail: this.state.formData.toemail,
        mobilenum :this.state.formData.mobilenum,
        contactmethod : event.target.value,
        msgBody: this.state.formData.msgBody,
       
       
       
      },
    });
  }
  
 
}
export default ContactSub;
