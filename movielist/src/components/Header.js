import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        height: "72px",
        backgroundColor: " #2b2e30",
        padding: "0px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
      className="header"
    >
      <Link to="/">
        <div style={{color:" #ffff", fontSize:"20px", fontWeight:600}} className="logo">Movie App</div>
      </Link>
      <div className="userImage">
        <img
          style={{ height: "38px", width:"38px" }}
          src="https://cdn1.vectorstock.com/i/1000x1000/82/55/anonymous-user-circle-icon-vector-18958255.jpg"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
