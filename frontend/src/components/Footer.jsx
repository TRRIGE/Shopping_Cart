import React from "react";

const Footer = () => {
  return (
    <div className="footer" style={{ color: "white" }}>
      CopyRight &copy; {new Date().getFullYear()} Made with
      <i
        className="bi bi-heart-fill"
        style={{ color: "red", marginLeft: "5px", marginRight: "5px" }}
      ></i>
      By Pratik Samarth
    </div>
  );
};

export default Footer;
