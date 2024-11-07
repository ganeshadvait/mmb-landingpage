import React from "react";
import axios from "axios";
import Delhi from "./delhi";

const Delhimain = () => {
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
        <Delhi fdata={fdata} tdata={tdata} />
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default Delhimain;