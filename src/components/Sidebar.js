import React from "react";
import "../styles/Sidebar.css";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";

const Sidebar = () => {
  const { search } = useLocation();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  return (
    <div className="sidebar">
      <div className="item">Filter by city</div>
      <div className="item">
        <Link to={buildQueryString("query", { city: "Manchester" })}>
          Manchester
        </Link>
      </div>
      <div className="item">
        <Link to={buildQueryString("query", { city: "Leeds" })}>Leeds</Link>
      </div>
      <div className="item">
        <Link to={buildQueryString("query", { city: "Sheffield" })}>
          Sheffield
        </Link>
      </div>
      <div className="item">
        <Link to={buildQueryString("query", { city: "Liverpool" })}>
          Liverpool
        </Link>
      </div>
      <div className="item">Sort by</div>
      <div className="item">
        <Link to={buildQueryString("sort", { price: -1 })}>
          Price - Descending
        </Link>
      </div>
      <div className="item">
        <Link to={buildQueryString("sort", { price: 1 })}>
          Price - Ascending
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
