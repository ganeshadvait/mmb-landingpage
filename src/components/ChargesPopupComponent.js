import React, { useEffect, useState } from "react";
import Moment from "moment";
import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap";
import { UserContext, UserDispatchContext } from "../Context/MyContext";
import { useContext } from "react";
import "../static/charges.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import loaderImg from "../img/loader-red.gif";

const ChargesPupup = () => {
  const userDetails = React.useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);
  const navigate = useNavigate();
  const [modal, setModal] = React.useState(false);
  const [alertmodal, setAlertmodal] = React.useState(false);
  const [validationmodal, setValidationmodal] = React.useState(false);
  const [validationPickMsg, setValidatioPicknMsg] = React.useState("");
  const [validationDelMsg, setValidationDelMsg] = React.useState("");
  const [loader, setLoader] = React.useState(false);
  const [isActive, setIsActive] = React.useState(true);

  const [dateval, setDateval] = useState();
  const API_URL = process.env.REACT_APP_BACKEND_URL;

  // Toggle for Modal
  const toggle = () => setModal(!modal);
  const shouldModal = () => {
    let pickerr = 0;
    let delerr = 0;
    if (userDetails.pickupType === 2) {
      if (
        userDetails.fromAdress.streetDoorpick === undefined ||
        userDetails.fromAdress.cityDoorpick === undefined ||
        userDetails.fromAdress.stateDoorpick === undefined ||
        userDetails.fromAdress.zipDoorpick === undefined ||
        userDetails.fromAdress.streetDoorpick === "" ||
        userDetails.fromAdress.cityDoorpick === "" ||
        userDetails.fromAdress.stateDoorpick === "" ||
        userDetails.fromAdress.zipDoorpick === ""
      ) {
        pickerr = 1;
        setValidatioPicknMsg("Please Enter Pickup Details");
      } else {
        pickerr = 0;
        setValidatioPicknMsg("");
      }
    } else {
      setValidatioPicknMsg("");
    }
    if (userDetails.deliveryType === 2) {
      if (
        userDetails.toAdress.streetDoordel === undefined ||
        userDetails.toAdress.cityDoordel === undefined ||
        userDetails.toAdress.stateDoordel === undefined ||
        userDetails.toAdress.zipDoordel === undefined ||
        userDetails.toAdress.streetDoordel === "" ||
        userDetails.toAdress.cityDoordel === "" ||
        userDetails.toAdress.stateDoordel === "" ||
        userDetails.toAdress.zipDoordel === ""
      ) {
        delerr = 1;
        setValidationDelMsg("Please Enter Delivery Details");
      } else {
        delerr = 0;
        setValidationDelMsg("");
      }
    } else {
      setValidationDelMsg("");
    }
    if (pickerr === 0 && delerr === 0) {
      setValidationmodal(false);
      toggle();
    } else {
      setValidationmodal(true);
    }
  };
  useEffect(() => {
    let date = new Date(userDetails.bookingDate);
    let formatDate = Moment(date).format("DD-MM-YYYY");
    setDateval(formatDate);
  }, [userDetails.bookingDate]);
  const url = API_URL + "/v1/cus/createorder";
  const submitorder = () => {
    setLoader(true);
    setIsActive(false);
    var booForm = userDetails;

    axios.post(url, booForm).then((res) => {
      setModal(false);
      setAlertmodal(true);
    });
  };
  const closeAlert = () => {
    const updateItem = {
      bookingDate: new Date(),
      pickupType: 1,
      deliveryType: 1,
      damageScheme: "N",
      bookingType: 1,
      toAdress: {
        streetDoordel: "",
        cityDoordel: "",
        stateDoordel: "",
        zipDoordel: "",
      },
      fromAdress: {
        streetDoorpick: "",
        cityDoorpick: "",
        stateDoorpick: "",
        zipDoorpick: "",
      },
      assureScheme: "N",
      priceDetails: {
        totalCharges: 0,
        frieghtCharges: 1800,
        taxamt: 0,
        deliveryCharge: 0,
        pickupCharge: 0,
        doordelCharge: 0,
        damageCharge: 0,
      },
    };
    setUserDetails(updateItem);
    navigate("/home");
  };
  return (
    <>
      <Button color="danger" onClick={shouldModal}>
        Review
      </Button>

      <Modal
        isOpen={modal}
        toggle={toggle}
        className="review-modal"
        backdrop="static"
      >
        <ModalHeader toggle={toggle}>Review Details</ModalHeader>
        <ModalBody>
          <div className="head-details">
            <h4 className="text-right">
              Total: Rs.
              <span id="totalAmount">
                {userDetails.priceDetails.totalCharges}
              </span>
              /-
            </h4>
          </div>

          <div className="review-wrapper row p-3 pt-0">
            <div className="col-md-4 mb-2 p-0">
              <div className="">
                From<span className="text-right">:</span>
              </div>
              <div className="">
                <b>
                  <span id="from-place2">{userDetails.fromLocation}</span>
                </b>
              </div>
            </div>
            <div className="col-md-4 mb-2 p-0">
              <div className="">
                To<span className="text-right">:</span>
              </div>
              <div className="">
                <b>
                  <span id="to-place2">{userDetails.toLocation}</span>
                </b>
              </div>
            </div>
            <div className="col-md-4 mb-2 p-0">
              <div className="">
                Pickup Date<span className="text-right">:</span>
              </div>
              <div className="">
                <b>
                  <span id="date-book2">{dateval}</span>
                </b>
              </div>
            </div>
            <div className="col-md-4 mb-2 p-0">
              <div className="">
                Name<span className="text-right">:</span>
              </div>
              <div className="">
                <b>
                  <span id="sender-name">{userDetails.senderName}</span>
                </b>
              </div>
            </div>
            <div className="col-md-4 mb-2 p-0">
              <div className="">
                Mobile No<span className="text-right">:</span>
              </div>
              <div className="">
                <b>
                  <span id="sender-mobile">
                    {userDetails.senderMobileNumber}
                  </span>
                </b>
              </div>
            </div>
            <div className="col-md-4 mb-2 p-0">
              <div className="">
                E-mail<span className="text-right">:</span>
              </div>
              <div className="" style={{ wordBreak: "break-all" }}>
                <b>
                  <span id="sender-mail">{userDetails.senderEmail}</span>
                </b>
              </div>
            </div>
            <div className="col-md-4 mb-2 p-0">
              <div className="">
                Booking Type<span className="text-right">:</span>
              </div>
              <div className="">
                <b>
                  <span id="deliveryMode1">
                    {userDetails.pickupType === 1 ? "Hub" : "Door"} - 
                    {userDetails.deliveryType === 1 ? "Hub" : "Door"}
                  </span>
                </b>
              </div>
            </div>
            <div className="col-md-4 mb-2 p-0">
              <div className="">
                Delivery Speed<span className="text-right">:</span>
              </div>
              <div className="">
                <b>
                  <span id="deliverySpeed">
                    {userDetails.bookingType === 2 ? "Express" : "Standard"}
                  </span>
                </b>
              </div>
            </div>
          </div>

          {userDetails.pickupType === 2 ? (
            <div className="review-wrapper Address-wrapper">
              <div className="col-md-12 mb-2 p-0" id="pickupaddress">
                <div className="">
                  PickUp Address<span className="text-right">:</span>
                </div>
                <div className="">
                  <b>
                    {userDetails.fromAdress.streetDoorpick},
                    {userDetails.fromAdress.cityDoorpick},
                    {userDetails.fromAdress.stateDoorpick},
                    {userDetails.fromAdress.zipDoorpick}
                    <span id="finalPickup"></span>
                  </b>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {userDetails.deliveryType === 2 ? (
            <div className="review-wrapper Address-wrapper">
              <div className="col-md-12 mb-2 pt-3 " id="deliveryaddress">
                <div className="">
                  Delivery Address<span className="text-right">:</span>
                </div>
                <div className="">
                  <b>
                    {userDetails.toAdress.streetDoordel},
                    {userDetails.toAdress.cityDoordel},
                    {userDetails.toAdress.stateDoordel},
                    {userDetails.toAdress.zipDoordel}
                    <span id="finalDelivery"></span>
                  </b>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {loader ? (
            <img src={loaderImg} alt="Loader" className="loader-cls" />
          ) : null}
          <div className="row d-none">
            <div className="mt-3 col-md-6">
              <label for="govtID">
                <h5>Upload GOVT ID:</h5>
              </label>
              <input
                type="file"
                className="form-control"
                id="govtID"
                name="govtID"
                accept="image/*"
              />
            </div>
            <div className="mt-3 col-md-6">
              <label for="rcID">
                <h5>Upload RC:</h5>
              </label>
              <input
                type="file"
                className="form-control"
                id="rcID"
                name="rcID"
                accept="image/*"
              />
            </div>
          </div>
          <div className="btn-footer">
            <Button
              color="btn btn-danger"
              onClick={submitorder}
              disabled={!isActive}
            >
              Book
            </Button>
          </div>
        </ModalBody>
        {/* <ModalFooter>
          <Button color="btn btn-danger" onClick={submitorder}>
            Book
          </Button>
        </ModalFooter> */}
      </Modal>
      <Modal isOpen={alertmodal} className="alert-modal centered">
        <ModalHeader onClick={closeAlert}>Booking Status</ModalHeader>
        <ModalBody>
          <h5>Booking SucessFull !!</h5>
          <h6>
            Thank you for your booking. we will review your booking details and
            contact you soon
          </h6>
        </ModalBody>
        <ModalFooter>
          <Button
            color="btn btn-danger"
            to={{ pathname: "/" }}
            onClick={closeAlert}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={validationmodal} className="alert-modal centered">
        <ModalHeader onClick={() => setValidationmodal(!validationmodal)}>
          Booking Status
        </ModalHeader>
        <ModalBody>
          <h6>Please enter your booking details</h6>
          <p
            style={{ fontSize: "18px", fontWeight: "500", textAlign: "center" }}
          >
            {validationPickMsg}
            <br />
            {validationDelMsg}
          </p>
        </ModalBody>
        <ModalFooter>
          <Button
            color="btn btn-danger"
            onClick={() => setValidationmodal(!validationmodal)}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ChargesPupup;
