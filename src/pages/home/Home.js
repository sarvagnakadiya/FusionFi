import React from "react";
import { useEffect, useRef } from "react";
import "../home/Home.css";
import Navbar from "../../components/navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="hm-sec1">
        <h2>Portfolio Value</h2>
      </div>
    </div>
  );
}

export default Home;
