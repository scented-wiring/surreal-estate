import React, { useState } from "react";
import "../styles/Sidebar.css";
import { Link, useLocation, useHistory } from "react-router-dom";
import qs from "qs";

const Sidebar = () => {
  const { search } = useLocation();
  const history = useHistory();

  const [query, setQuery] = useState("");

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const newQueryString = buildQueryString("query", {
      title: { $regex: query, $options: "i" },
    });

    history.push(newQueryString);
  };

  return (
    <div className="sidebar">
      <form onSubmit={handleSearch}>
        <input
          className="search-input"
          type="text"
          value={query}
          id="input"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      <div className="item-title">Filter by city</div>
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

      <div className="item-title">Sort by</div>
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
