import React, { Component } from "react";
import LoginForm from "./LoginForm";
import "../../static/admin.css";

class Admin extends Component {
  render() {
    return (
      <div className="LoginPage">
        <div className="row">
          {/* <div className="col-md-6">
            <LeftContent />
          </div> */}
          <div className="col-md-12 p-0">
            <LoginForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
