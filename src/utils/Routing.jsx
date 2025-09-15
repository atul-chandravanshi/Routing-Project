import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "../Component/Home";
import User from "../Component/User";
import About from "../Component/About";

const Routing = () =>{
    return (
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/about" element={<About />} />
        </Routes>

    );
}

export default Routing;