import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: " #2b2e30",
        height: "72px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "#ffff",
      }}
      className="footer"
    >
      <div>Movie App</div>
      <div>02022, Movie, Inc. or its affiliates</div>
    </div>
  );
};

export default Footer;
