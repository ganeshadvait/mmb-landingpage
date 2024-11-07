import React, { useState } from "react";

// First Step: From Location
const Step1 = ({ formData, handleChange }) => {
  return (
    <div>
      {/* <h2>Step 1: Select From Location</h2> */}
      <label>
        <select name="fromLocation" value={formData.fromLocation} onChange={handleChange}>
          <option value="">Select from location</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Chennai">Chennai</option>
        </select>
      </label>
      <label>
        <select name="toLocation" value={formData.toLocation} onChange={handleChange}>
          <option value="">Select to location</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Chennai">Chennai</option>
        </select>
      </label>
    </div>
  );
};

// Second Step: To Location
const Step2 = ({ formData, handleChange }) => {
  return (
    <div>
      {/* <h2>Step 2: </h2> */}
      <label>
      <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

// Third Step: Date Picker
const Step3 = ({ formData, handleChange }) => {
  return (
    <div>
      {/* <h2>Step 3: Select Date</h2> */}
      <label>
      <input
          type="time"
          name="time" // Change name if you'd like to differentiate date and time in formData
          value={formData.time} // Assuming time is a separate property in formData
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

// Fourth Step: Name
const Step4 = ({ formData, handleChange }) => {
  return (
    <div>
      {/* <h2>Step 4: Enter Name</h2> */}
      <label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

// Fifth Step: Phone Number
const Step5 = ({ formData, handleChange }) => {
  return (
    <div>
      {/* <h2>Step 5: Enter Phone Number</h2> */}
      <label>
        <input
          type="tel"
          name="phone"
          placeholder="Number"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

// Multi-step Form Component (Lstepform)
const Lstepform = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fromLocation: "",
    toLocation: "",
    date: "",
    name: "",
    phone: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Render the current step
  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 formData={formData} handleChange={handleChange} />;
      case 2:
        return <Step2 formData={formData} handleChange={handleChange} />;
      case 3:
        return <Step3 formData={formData} handleChange={handleChange} />;
      case 4:
        return <Step4 formData={formData} handleChange={handleChange} />;
      case 5:
        return <Step5 formData={formData} handleChange={handleChange} />;
      default:
        return null;
    }
  };

  return (
    <>
    <div className="form-container">
      {renderStep()}

      <div className="button-container">
        {step > 1 && <button className="prev " onClick={() => setStep(step - 1)}>Previous</button>}
        {step < 5 && <button className="next"  onClick={() => setStep(step + 1)}>Next</button>}
        {step === 5 && <button type="submit">Submit</button>}
      </div>

      {/* Add your progress bar here */}
      <div className="progress-bar">
  <div
    className="progress-bar-fill"
    style={{ width: `${(step / 5) * 100}%` }}
  ></div>
  <span>
    Step {step} of 5
  </span>
</div>
    </div>
    </>
  );
};

export default Lstepform;
