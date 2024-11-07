import React from "react";
import axios from "axios";
import Tirupati from "./tirupati";

const Tirupatimain = () => {
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
      {fdata != null && tdata != null ? (
        <Tirupati fdata={fdata} tdata={tdata} />
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default Tirupatimain;