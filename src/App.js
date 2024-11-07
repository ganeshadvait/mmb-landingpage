import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/MainComponet"; // Ensure this path is correct
import LandingLayout from "./components/LadingagesLayout"; // Ensure this path is correct

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;



