import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/home";
import AboutUs from "./aboutus/aboutus";
import ContactUs from "./contactus/contactus";

export default function PublicRoute() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/aboutus" element={<AboutUs/>}/>
                <Route path="/contactus" element={<ContactUs/>}/>
            </Routes>
        </Router>
    )
}