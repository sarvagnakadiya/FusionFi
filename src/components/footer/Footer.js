import React from "react";

function Footer() {
  return (
    <div>
      <div
        style={{
          padding: "15px 0px",
          boxShadow: "0 2px 10px #465b63c7",
          fontSize: "15px",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "5px",
        }}
        className="m-footer-main"
      >
        Powered by{" "}
        <img
          src="FusionFi.png"
          style={{ width: "100px" }}
          className="footer-logo"
        />
      </div>
    </div>
  );
}

export default Footer;
