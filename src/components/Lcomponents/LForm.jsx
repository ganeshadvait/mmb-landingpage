import React, { useState } from "react";

const LForm = () => {
    const [fromLocation, setFromLocation] = useState("");
    const [toLocation, setToLocation] = useState("");
    const [date, setDate] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ fromLocation, toLocation, date, name, phone });
    };

    return (
        <div className="form-container normal-form">
        <form onSubmit={handleSubmit}>
            {/* First Row: From and To Locations */}
                <div className="form-group">
                    <label htmlFor="fromLocation">From Location</label>
                    <select
                        id="fromLocation"
                        value={fromLocation}
                        onChange={(e) => setFromLocation(e.target.value)}
                        required
                    >
                        <option value="">From Location</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Pune">Pune</option>
                        {/* Add more locations as needed */}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="toLocation">To Location</label>
                    <select
                        id="toLocation"
                        value={toLocation}
                        onChange={(e) => setToLocation(e.target.value)}
                        required
                    >
                        <option value="">To Location</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Pune">Pune</option>
                        {/* Add more locations as needed */}
                    </select>
                </div>
    
            {/* Second Row: Date Picker */}
            <div className="form-group">
                <label htmlFor="date">Select Date</label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>
    
            {/* Third Row: Name */}
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    className="LPName"
                    placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
    
            {/* Fourth Row: Phone Number */}
            <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    placeholder="phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </div>
    
            {/* Submit Button */}
            <button type="submit">Submit</button>
        </form>
    </div>
    
    );
};

export default LForm;
