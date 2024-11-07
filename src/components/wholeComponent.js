import React, { useState } from "react";
import Picker from "./DatepickerComponent";
import CustomSelect from "./SelectComponent";
import axios from "axios";
import {
  UserContext,
  UserDispatchContext,
} from "../Context/MyContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const WholeComponent = ({ fdata, tdata , sdata}) => {
    const navigate = useNavigate();
    const userDetails = React.useContext(UserContext);
    const setUserDetails = useContext(UserDispatchContext);
    const API_URL = process.env.REACT_APP_BACKEND_URL;
    const [defaultState, setDefaultState] = useState({
        mobileError: null,
        nameError: null,
        emailError: null,
        fromCityError: null,
        toCityError: null,
        otherToCityError:null,
        otherFromCityError:null
    });
    const handleChange = (e) => {
        const updateItem = {
            ...userDetails,
            [e.target.name]: e.target.value,
        };
        setUserDetails(updateItem);
    };
    const url = API_URL + "/v1/cus/p1";
    const handleSubmit = () => {
        validate();
        if (validate()) {
            if(userDetails.fromCityId !== '0' && userDetails.toCityId !== '0'){
                axios.post(url, userDetails).then((res) => {
                    navigate("/charges");
                });
                navigate("/charges");
            }else{
                axios.post(url, userDetails).then((res) => {
                    navigate("/enquiry");
                });
                
            }
        }
    };
    const validate = () => {
        let emailError = "";
        let fromCityError = "";
        let toCityError = "";
        let mobileError = "";
        let nameError = "";
        let otherFromCityError ="";
        let otherToCityError ="";
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
        const pattern = new RegExp(/^[0-9\b]+$/);

        if (
            userDetails.fromLocation === "" ||
            userDetails.fromLocation === undefined ||
            userDetails.fromLocation === "select" ||
            userDetails.fromLocation === userDetails.toLocation
        ) {
            fromCityError = "Please select from location";
        }
        if (
            userDetails.toLocation === "" ||
            userDetails.toLocation === undefined ||
            userDetails.toLocation === "select"
        ) {
            toCityError = "Please select to location";
        }
        if (
            userDetails.fromLocation === "Other" &&  userDetails.fromCityId === '0'
        ) {
            otherFromCityError = "Please enter other location";
        }
        if (
            userDetails.toLocation === "Other" &&  userDetails.toCityId === '0'
        ) {
            otherToCityError = "Please enter other location";
        }
        if (
            userDetails.senderEmail === "" ||
            userDetails.senderEmail === undefined ||
            reg.test(userDetails.senderEmail) === false
        ) {
            emailError = "Please enter Email";
        }
        if (
            userDetails.senderMobileNumber === "" ||
            userDetails.senderMobileNumber === undefined ||
            pattern.test(userDetails.senderMobileNumber) === false ||
            userDetails.senderMobileNumber.length !== 10
        ) {
            mobileError = "Please enter Mobile Number";
        }
        if (userDetails.senderName === "" || userDetails.senderName === undefined) {
            nameError = "Please enter Name";
        }

        if (
            mobileError ||
            emailError ||
            nameError ||
            fromCityError ||
            toCityError ||
            otherFromCityError ||
            otherToCityError
        ) {
            setDefaultState({
                mobileError,
                emailError,
                nameError,
                fromCityError,
                toCityError,
                otherFromCityError,
                otherToCityError
            });
            return false;
        }
        return true;
    };
    
    return (
        <div className="book-wrapper col-md-5 p-0">
            {/* Bike icon animation on booking box border */}
            {/* <div className="pot">
                <img src="https://cdn-icons-png.flaticon.com/512/1768/1768214.png" width='50px' height='50px' alt="transport bike" />
            </div> */}
                <div className="book-wrapper-child">
                    <h3 style={{ color: "white" }}>
                         
                        TRANSPORT YOUR BIKE NOW  
                    </h3>
                    <span
                        className="text-danger-color"
                        style={{ marginLeft: "-140px" }}
                    >
                        {defaultState.citiesError}
                    </span>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="fromCity">FROM</label>
                            <CustomSelect
                                name="fromCityId"
                                options={fdata}
                                inval={userDetails.fromCityId}
                                fieldtype={"fromCityId"}
                                value1={"fromLocation"}
                                sh={"fromCityShortCode"}
                                
                            />
                            <span className="text-danger-color">
                                {defaultState.fromCityError}
                            </span>
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="toCity">TO</label>
                            <CustomSelect
                                name="toCityId"
                                options={tdata}
                                inval={userDetails.toCityId}
                                fieldtype={"toCityId"}
                                value1={"toLocation"}
                                sh={"toCityShortcode"}
                            />
                            <span className="text-danger-color">
                                {defaultState.toCityError}
                            </span>
                        </div>
                        {userDetails.fromCityId === '0' ? 
                            <div className="form-group col-md-6">
                            <label htmlFor="senderName">Enter Other From City</label> 
                            <input
                                type="text"
                                name="fromLocation"
                                value={userDetails.fromLocation !== 'Other' ? userDetails.fromLocation : ''}
                                className="form-control"
                                id="fromLocation"
                                placeholder="Other City"
                                onChange={handleChange}
                                required
                            />
                            <span className="text-danger-color">
                                {defaultState.otherFromCityError}
                            </span>
                        </div>
                        : null}
                        {userDetails.toCityId === '0' ? 
                            <div className="form-group col-md-6">
                            <label htmlFor="senderName">Enter Other To City</label> 
                            <input
                                type="text"
                                name="toLocation"
                                value={userDetails.toLocation !== 'Other' ? userDetails.toLocation : ''}
                                className="form-control"
                                id="toLocation"
                                placeholder="Other City"
                                onChange={handleChange}
                                required
                            />
                            <span className="text-danger-color">
                                {defaultState.otherToCityError}
                            </span>
                        </div>
                        : null}
                        <div className="form-group col-md-6">
                            <label htmlFor="dateBook"> PICKUP DATE </label>
                            <Picker name="bookingDate" fieldtype={"bookingDate"} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="senderName">SENDER NAME</label> 
                            <input
                                type="text"
                                name="senderName"
                                value={userDetails.senderName}
                                className="form-control"
                                id="senderName"
                                placeholder="Name"
                                onChange={handleChange}
                                required
                            />
                            <span className="text-danger-color">
                                {defaultState.nameError}
                            </span>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="senderMobileNumber"> MOBILE NUMBER</label> 
                            <input
                                type="tel"
                                name="senderMobileNumber"
                                value={userDetails.senderMobileNumber}
                                className="form-control"
                                pattern="[6-9]{1}[0-9]{4}[0-9]{5}"
                                id="senderMobile"
                                placeholder="Mobile Number"
                                onChange={handleChange}
                                required
                            />
                            <span className="text-danger-color">
                                {defaultState.mobileError}
                            </span>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="senderEmail">E-MAIL</label> 
                            <input
                                type="email"
                                name="senderEmail"
                                value={userDetails.senderEmail}
                                className="form-control"
                                id="senderEmail"
                                placeholder="Email Address"
                                onChange={handleChange}
                                required
                            />
                            <span className="text-danger-color">
                                {defaultState.emailError}
                            </span>
                        </div>
                        <button
                            onClick={handleSubmit}
                            className="btn btn-danger"
                            style={{ width: "100px", margin: "25px auto" }}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default WholeComponent;