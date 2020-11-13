import React from "react";
import "../styles/Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="item">Filter by city</div>
      <div className="item">
        <Link to={`/?query={"city": "Manchester"}`}>Manchester</Link>
      </div>
      <div className="item">
        <Link to={`/?query={"city": "Leeds"}`}>Leeds</Link>
      </div>
      <div className="item">
        <Link to={`/?query={"city": "Sheffield"}`}>Sheffield</Link>
      </div>
      <div className="item">
        <Link to={`/?query={"city": "Liverpool"}`}>Liverpool</Link>
      </div>
    </div>
  );
};

export default Sidebar;
