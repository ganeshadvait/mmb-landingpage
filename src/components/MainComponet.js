import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Menu from "./MenuComponent";
import MobileMenu from "./MobileMenuComponent";
import "../static/responsive.css";
import "../components/Lcomponents/LPstyles.css";
import { Charges } from "./ChargesComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import Footer from "./FooterComponent";
import Track from "./TrackComponent";
import Admin from "./Admin/AdminComponent";
import AdminDashboard from "./Admin/AdminDashboard";
import { UserProvider } from "../Context/MyContext";
import HomeMainComponent from "./HomeMainComponent";
import Ournetwork from "./ournetwork";
import Resources from "./resources";
import Hyderabadmain from "./hyderabadmain";
import Bangaloremain from "./bangaloremain";
import Tirupatimain from "./tirupatimain";
import Vizagmain from "./vizagmain";
import { Enquiry } from "./sucessfulEnquiryComponent";
import Punemain from "./punemain";
import Chennaimain from "./chennaimain";
import Delhimain from "./delhimain";
import Vijayawadamain from "./vijayawadamain";
import Whatwedo from "./whatwedo";
import HyderabadtoBangalore from "./Landing Pages/Hyderabad-Bangalore/HyderabadtoBangalore";


const Main = () => {

  const location = useLocation();
  const normalizedPath = location.pathname.replace(/\/$/, "").toLowerCase();  // Normalize to lowercase
  const isLandingPage = normalizedPath === "/hyderabad-bangalore";

  console.log("Current Path:", normalizedPath); // Log the current path
  console.log("Is Landing Page:", isLandingPage);
  

  return (
    <UserProvider>
    {!isLandingPage && <Menu />}
    {!isLandingPage && <MobileMenu />}
    <Routes>
      <Route exact path="/" element={<HomeMainComponent />} />
      <Route exact path="/home" element={<HomeMainComponent />} />
      <Route exact path="/charges" element={<Charges />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/hyderabad" element={<Hyderabadmain />} />
      <Route exact path="/bangalore" element={<Bangaloremain />} />
      <Route exact path="/tirupathi" element={<Tirupatimain />} />
      <Route exact path="/pune" element={<Punemain />} />
      <Route exact path="/vizag" element={<Vizagmain />} />
      <Route exact path="/chennai" element={<Chennaimain />} />
      <Route exact path="/delhi" element={<Delhimain />} />
      <Route exact path="/vijayawada" element={<Vijayawadamain />} />
      <Route exact path="/track" element={<Track />} />
      <Route exact path="/admin" element={<Admin />} />
      <Route exact path="/dashboard" element={<AdminDashboard />} />
      <Route exact path="/ournetwork" element={<Ournetwork />} />
      <Route exact path="/resources" element={<Resources />} />
      <Route exact path="/enquiry" element={<Enquiry />} />
      <Route exact path="/whatwedo" element={<Whatwedo />} />
      <Route path="*" element={<HomeMainComponent />} />
      <Route path="hyderabad-bangalore" element={<HyderabadtoBangalore />} />

    </Routes>
    {!isLandingPage && <Footer />}
  </UserProvider>
  );
};

export default Main;
