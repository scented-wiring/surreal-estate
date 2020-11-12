import React from "react";
import "../styles/Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="city">
        <Link to={`/?query={"city": "Manchester"}`}>Manchester</Link>
      </div>
      <div className="city">
        <Link to={`/?query={"city": "Leeds"}`}>Leeds</Link>
      </div>
      <div className="city">
        <Link to={`/?query={"city": "Sheffield"}`}>Sheffield</Link>
      </div>
      <div className="city">
        <Link to={`/?query={"city": "Liverpool"}`}>Liverpool</Link>
      </div>
    </div>
  );
};

export default Sidebar;
