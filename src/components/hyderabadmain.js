import React from "react";
import axios from "axios";
import Hyderabad from "./hyderabad";
import { Helmet } from "react-helmet";

const Hyderabadmain = () => {
  const [fdata, setFdata] = React.useState(null);
  const [tdata, setTdata] = React.useState(null);
  const API_URL = process.env.REACT_APP_BACKEND_URL;
  const url = API_URL + "/v1/cus/home";

  React.useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setFdata(response.data.fromCities);
        setTdata(response.data.toCities);
      })
      .catch((e) => {});
    window.dispatchEvent(new CustomEvent("navigationhandler"));
  }, []);

  return (
    <div>
      <Helmet>
        <title>hyderabad</title>
      </Helmet>

      {fdata != null && tdata != null ? (
        <Hyderabad fdata={fdata} tdata={tdata} />
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default Hyderabadmain;
