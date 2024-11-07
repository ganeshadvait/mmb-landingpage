import React, { useEffect } from "react";
import "../static/charges.css";
import thankq from '../img/movemybike packing enquiry.png'

export const Enquiry = () => {
  // const userDetails = React.useContext(UserContext);
  // const setUserDetails = useContext(UserDispatchContext);
  
  // const navigate = useNavigate();
  // const API_URL = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);
  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };
  
  return(
   <div style={{height:"500px",'padding': '6%'}}>
      <img src={thankq} alt="movemybike-packing-enquiry" height="200px"/>
      <h3 style={{marginTop:"32px",fontSize:"32px"}}>Thank you for contacting us.</h3>
          <h4>
            We will review your details and
            We'll get back to you very soon.
          </h4>
          <h6>To contact us immediantly call us at +91 9014044900 / 9063506008</h6>
    </div>
  )
};
