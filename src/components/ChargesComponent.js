import React, { useEffect, useState } from "react";
import {
  UserContext,
  UserDispatchContext,
} from "../Context/MyContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "../static/charges.css";
import ChargesPupup from "./ChargesPopupComponent";
import Moment from "moment";
import axios from "axios";
import { Tooltip , UncontrolledTooltip } from 'reactstrap';

export const Charges = () => {
  const userDetails = React.useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);
  const [dateval, setDateval] = useState();
  const fromid = userDetails.fromCityId;
  const toid = userDetails.toCityId;
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);
  // const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_BACKEND_URL;

  const radioHandler = (type, field, val,oldval) => {
    // console.log(oldval);
    // console.log(val);
    
    if(oldval !== val){
      const updateItem = {
        ...userDetails,
        [type]: val,
      };
      setUserDetails(updateItem);
      priceCal(type, field, val);
    }
    // const updateItem = {
    //       ...userDetails,
    //       [type]: val,
    //     };
    //     setUserDetails(updateItem);
    //     priceCal(type, field, val);
  };
  const priceCal = (type, field, val) => {
    let valprice;
    if (field === "damage") {
      valprice = 100;
    } else if (field === "delivery") {
      valprice = 200;
    }
    else {
      valprice = 500;
    }
    if (val === 2 || val === "Y") {
      let fieldtype = field + "Charge";
      let tValue = userDetails.priceDetails.totalCharges + valprice;
      let taxamt = parseInt(tValue) * 0.18;
      setUserDetails((prevState) => ({
        ...prevState,
        priceDetails: {
          ...prevState.priceDetails,
          [fieldtype]: valprice,
          totalCharges: tValue,
          taxamt: taxamt,
        },
      }));
    } else {
      let fieldtype = field + "Charge";
      let tValue = userDetails.priceDetails.totalCharges - valprice;
      let taxamt = parseInt(tValue) * 0.18;
      setUserDetails((prevState) => ({
        ...prevState,
        priceDetails: {
          ...prevState.priceDetails,
          [fieldtype]: 0,
          totalCharges: tValue,
          taxamt: taxamt,
        },
      }));
    }
  };
  const handleChange = (e) => {
    if (e.target.attributes.id.value === "pickAddr") {
      setUserDetails((prevState) => ({
        ...prevState,
        fromAdress: {
          ...prevState.fromAdress,
          cityDoorpick: userDetails.fromLocation,
          [e.target.name]: e.target.value,
        },
      }));
    } else if (e.target.attributes.id.value === "delAddr") {
      setUserDetails((prevState) => ({
        ...prevState,
        toAdress: {
          ...prevState.toAdress,
          cityDoordel: userDetails.toLocation,
          [e.target.name]: e.target.value,
        },
      }));
    } else {
      const updateItem = {
        ...userDetails,
        [e.target.name]: e.target.value,
      };
      setUserDetails(updateItem);
    }
  };

  useEffect(() => {
    let date = new Date(userDetails.bookingDate);
    let formatDate = Moment(date).format("DD/MM/YYYY");
    setDateval(formatDate);
    const updateItem = {
      ...userDetails,
      fromAdress: {
        cityDoorpick: userDetails.fromLocation,
      },
      toAdress: {
        cityDoordel: userDetails.toLocation,
      },
    };
    setUserDetails(updateItem);
    setPriceDetails(userDetails.priceDetails.frieghtCharges);
  }, [userDetails.bookingDate]);

  const url =
    API_URL +
    "/v1/cus/fromtoprice?tocityId=" +
    toid +
    "&fromcityid=" +
    fromid;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setPriceDetails(response.data);
        window.dispatchEvent(new CustomEvent("navigationhandler"));
      })
      .catch((e) => {
        console.log(e);
      });
  }, [userDetails.fromLocation, userDetails.toLocation]);
  const setPriceDetails = (frieghtval) => {
    let totalCharges =
      parseInt(frieghtval) +
      parseInt(userDetails.priceDetails.deliveryCharge) +
      parseInt(userDetails.priceDetails.pickupCharge) +
      parseInt(userDetails.priceDetails.doordelCharge) +
      parseInt(userDetails.priceDetails.damageCharge);
    let taxamt = parseInt(totalCharges) * 0.18;
    setUserDetails((prevState) => ({
      ...prevState,
      priceDetails: {
        ...prevState.priceDetails,
        frieghtCharges: frieghtval,
        totalCharges: totalCharges + taxamt,
        taxamt: taxamt,
      },
    }));
  };
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
  return (
    <>
      <div id="fixer" className="fixer">
        <section className="">
          <div className="bread-wrapper">
            <div className="bread-item">
              <div className="">FROM</div>
              <div className="">
                <label className="pl-0">
                  <span id="from-place" />
                  {userDetails.fromLocation}
                </label>
              </div>
            </div>
            <div className="bread-item">
              <div className="">To</div>
              <div className="">
                <label className="dest-cls pl-0">
                  <span id="to-place" />
                  {userDetails.toLocation}
                </label>
              </div>
            </div>
            <div className="bread-item">
              <div className="top-lbl">DATE</div>
              <label className="date-cls pl-0">
                <span id="date-book" />
                {dateval}
              </label>
            </div>
            <div className="bread-item btn-wrap">
              <Link to="/home">
                <input
                  type="button"
                  className="btn btn-danger"
                  value="Change"
                  onClick="goBack()"
                />
              </Link>
            </div>
          </div>
        </section>
      </div>
      <form className="form-container mb-5 pt-4" id="chargesForm">
        <fieldset className="table  pt-0 m-0">
          <div className="some-class row">
            <div className="col-md-5 pr-0 form-group">
              <label className="text-lab">Delivery Speed</label>
            </div>
            <div className="col-md-3 col-sm-4 pr-0 radio-container">
              <input
                type="radio"
                className="radio1 mt-1"
                name="booking"
                value="2"
                id="Express"
                checked={userDetails.bookingType === 2}
                onClick={(e) => radioHandler("bookingType", "delivery", 2,userDetails.bookingType)}
              />
              <label for="z">Express</label>
            </div>
            <div className="col-md-4 col-sm-4 pr-0 radio-container">
              <input
                type="radio"
                className="radio1 mt-1"
                name="bookingType"
                value="1"
                id="standard"
                checked={userDetails.bookingType === 1}
                onClick={(e) => radioHandler("bookingType", "delivery", 1,userDetails.bookingType)}
              />
              <label for="standard">Standard</label>
            </div>
          </div>
        </fieldset>
        <fieldset className="table  pt-0 m-0">
          <div className="checkboxwithlable row">
            <div className="col-md-5 pr-0 form-group">
              <label className="text-lab">PickUp Type</label>
            </div>
            <div className="col-md-3 col-sm-4 pr-0 radio-container">
              <input
                type="radio"
                className="radio1 mt-1"
                name="pickup_type"
                value="2"
                id="pickupType"
                checked={userDetails.pickupType === 2}
                onClick={(e) => radioHandler("pickupType", "pickup", 2,userDetails.pickupType)}
              />
              <label for="pickupType">Door Pick Up</label>
            </div>
            <div className="col-md-4 col-sm-4 pr-0 radio-container">
              <input
                type="radio"
                className="radio1 mt-1"
                name="pickup_type"
                value="1"
                id="store_del"
                checked={userDetails.pickupType === 1}
                onClick={(e) => radioHandler("pickupType", "pickup", 1,userDetails.pickupType)}
              />
              <label for="store_del" id="storetxt">Hub Pickup</label>
              <UncontrolledTooltip
                placement="right"
                target="storetxt"
              >
                Customer needs to drop the bike at our HUB
              </UncontrolledTooltip>
            </div>
            {userDetails.pickupType === 2 && (
              <div className="row main-row-container">
                <h6 className="col-md-12">Please Enter PickUp Address:</h6>
                <input
                  type="text"
                  className="form-group"
                  id="pickAddr"
                  name="streetDoorpick"
                  placeholder="Flat/Street/Building"
                  autoComplete="off"
                  onChange={handleChange}
                />
                <div className="addrval p-0 pt-2 row">
                  <input
                    type="number"
                    className="form-group col-md-4 col-xs-12 col-sm-12 mb-3"
                    id="pickAddr"
                    name="zipDoorpick"
                    placeholder="Zip"
                    autoComplete="off"
                    onChange={handleChange}
                  />
                  <input
                    readOnly
                    type="text"
                    className="form-group col-md-4 col-xs-12 col-sm-12 mb-3"
                    id="pickAddr"
                    name="cityDoorpick"
                    placeholder="City"
                    autoComplete="off"
                    onChange={handleChange}
                    value={userDetails.fromLocation}
                  />
                  <input
                    type="text"
                    className="form-group col-md-4 col-xs-12 col-sm-12 mb-3"
                    id="pickAddr"
                    name="stateDoorpick"
                    placeholder="State"
                    autoComplete="off"
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}
          </div>
        </fieldset>
        <fieldset className="table  pt-0 m-0">
          <div className="checkboxwithlable row">
            <div className="col-md-5 pr-0 form-group">
              <label className="text-lab">Delivery Type</label>
            </div>
            <div className="col-md-3 col-sm-4 pr-0 radio-container">
              <input
                type="radio"
                className="radio1 mt-1"
                name="del_type"
                value="2"
                id="door_del"
                checked={userDetails.deliveryType === 2}
                onClick={(e) => radioHandler("deliveryType", "doordel", 2,userDetails.deliveryType)}
              />
              <label for="door_del">Door Delivery</label>
            </div>
            <div className="col-md-4 col-sm-4 pr-0 radio-container">
              <input
                type="radio"
                className="radio1 mt-1"
                name="del_type"
                value="1"
                id="store_pick"
                checked={userDetails.deliveryType === 1}
                onClick={(e) => radioHandler("deliveryType", "doordel", 1,userDetails.deliveryType)}
              />
              <label for="store_pick" id='deltxt'>Hub Delivery</label>
              <UncontrolledTooltip
                placement="right"
                target="deltxt"
              >
                Customer needs to pickup bike from HUB
              </UncontrolledTooltip>
            </div>
            {userDetails.deliveryType === 2 && (
              <div className="row main-row-container">
                <h6>Please Enter Delivery Address:</h6>
                <input
                  type="text"
                  className="form-group col-md-12"
                  id="delAddr"
                  name="streetDoordel"
                  placeholder="Flat/Street/Building"
                  autoComplete="off"
                  onChange={handleChange}
                />
                <div className="addrval col-md-12 p-0 pt-2 row">
                  <input
                    type="number"
                    className="form-group col-md-4 col-xs-12 col-sm-12 mb-3"
                    id="delAddr"
                    name="zipDoordel"
                    placeholder="Zip"
                    autoComplete="off"
                    onChange={handleChange}
                  />
                  <input
                    readOnly
                    type="text"
                    className="form-group col-md-4 col-xs-12 col-sm-12 mb-3"
                    id="delAddr"
                    name="cityDoordel"
                    placeholder="City"
                    autoComplete="off"
                    onChange={handleChange}
                    value={userDetails.toLocation}
                  />
                  <input
                    type="text"
                    className="form-group col-md-4 col-xs-12 col-sm-12 mb-3"
                    id="delAddr"
                    name="stateDoordel"
                    placeholder="State"
                    autoComplete="off"
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}
          </div>
        </fieldset>
        <fieldset className="table  pt-0 m-0">
          <div className="some-class row">
            <div className="col-md-5 pr-0 form-group">
              <label className="text-lab">
                Damage Insurance Scheme
                <br />
                <span
                  className="lermorecl"
                  id="DisabledAutoHideExample"
                >
                   
                  (Learn More)
                </span>
              </label>
              <Tooltip
                placement="left"
                isOpen={tooltipOpen}
                autohide={false}
                target="DisabledAutoHideExample"
                toggle={toggle}
              >
                In case the Insurance Scheme is opted, any damages to the bike during transit, 70% of the repair amount will be reimbursed by <a href="https://movemybike.in/" alt="damage-insurance-txt" target="_blank">MMB</a>
              </Tooltip>
            </div>
            <div className="col-md-3 col-sm-4 pr-0 radio-container">
              <input
                type="radio"
                className="radio1 mt-1"
                name="damage_scheme"
                value="N"
                id="o_out"
                checked={userDetails.damageScheme === "N"}
                onClick={(e) => radioHandler("damageScheme", "damage", "N",userDetails.damageScheme)}
              />
              <label for="z">Opt Out</label>
            </div>
            <div className="col-md-3 col-sm-4 pr-0 radio-container">
              <input
                type="radio"
                className="radio1 mt-1"
                name="damage_scheme"
                value="Y"
                id="o_in"
                checked={userDetails.damageScheme === "Y"}
                onClick={(e) => radioHandler("damageScheme", "damage", "Y",userDetails.damageScheme)}
              />
              <label for="y">Opt In</label>
            </div>
          </div>
        </fieldset>
        <fieldset className="table  pt-0 m-0 d-none">
          <div className="some-class row">
            <div className="col-md-5 pr-0 form-group">
              <label className="text-lab">
                Assured Delivery Scheme 
                <br />
                <span
                  
                  className="lermorecl"
                >
                  (Learn More)
                </span>
              </label>
            </div>
            <div className="col-md-3 col-sm-4 pr-0 radio-container">
              <input
                type="radio"
                className="radio1 mt-1"
                name="assure_scheme"
                value="1"
                id="o_out"
                checked
              />
              <label for="z">Opt Out</label>
            </div>
            <div className="col-md-3 col-sm-4 pr-0 radio-container">
              <input
                type="radio"
                className="radio1 mt-1"
                name="assure_scheme"
                value="2"
                id="o_in"
              />
              <label for="y">Opt In</label>
            </div>
          </div>
        </fieldset>
        <div className="form-row freight-container">
          <div className="form-group col-md-12">
            <table className="charges-tab table  text-center">
              <tr>
                <th rowspan="8" className="notehr">
                  Freight charges
                  <p className="notecls">(Inclusive of all taxes with GST)</p>
                </th>
              </tr>
              <tr>
                <td className="biketrcls">Bike Transportation</td>
                <td className="frcls">
                  &#8377; 
                  <span id="frieghtCharges">
                    {userDetails.priceDetails.frieghtCharges.toFixed(2)}
                  </span>
                </td>
              </tr>
              <tr>
                <td>Fastrack Delivery Charges</td>
                <td>
                  &#8377; 
                  <span id="deliveryCharge">
                    {userDetails.priceDetails.deliveryCharge.toFixed(2)}
                  </span>
                </td>
              </tr>
              <tr>
                <td>Pickup Charges</td>
                <td>
                  &#8377; 
                  <span type="number" id="pickupCharge">
                    {userDetails.priceDetails.pickupCharge.toFixed(2)}
                  </span>
                </td>
              </tr>
              <tr>
                <td>Door Delivery Charges</td>
                <td>
                  &#8377; 
                  <span id="doordelCharge">
                    {userDetails.priceDetails.doordelCharge.toFixed(2)}
                  </span>
                </td>
              </tr>
              <tr>
                <td>Bike Insurance Charges</td>
                <td>
                  &#8377; 
                  <span id="damageCharge">
                    {userDetails.priceDetails.damageCharge.toFixed(2)}
                  </span>
                </td>
              </tr>
              <tr>
                <td>Total TAX (GST)</td>
                <td>
                  &#8377; 
                  <span id="taxamt">
                    {userDetails.priceDetails.taxamt.toFixed(2)}
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 style={{padding:'0'}}>GRAND TOTAL</h3>
                </td>
                <td>
                  &#8377; 
                  <span id="totalCharges">
                    {userDetails.priceDetails.totalCharges.toFixed(2)}
                  </span>
                </td>
              </tr>
            </table>
          </div>
        </div>
        {/* <button type="button" className="btn btn-danger" id="booking-sub" onClick="reviewOrder()">Book</button> */}
        <ChargesPupup />
      </form>
    </>
  );
};
