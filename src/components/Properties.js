import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import "../styles/Properties.css";
import Alert from "../components/Alert";
import PropertyCard from "../components/PropertyCard";
import Sidebar from "../components/Sidebar";

const Properties = ({ userID }) => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "", isSuccess: false });
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setLoad(true);
    axios
      .get("http://localhost:4000/api/v1/PropertyListing")
      .then((response) => setProperties(response.data))
      .catch(() => {
        setAlert({
          message: "Could not connect to server.",
          isSuccess: false,
        });
      });
    setLoad(false);
  }, []);

  const { search } = useLocation();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch((err) => console.error(err));
  }, [search]);

  const handleSaveProperty = (propertyId) => {
    axios.post("http://localhost:4000/api/v1/Favourite", {
      propertyListing: propertyId,
      fbUserId: userID,
    });
  };

  if (load === true) {
    return (
      <div className="properties">
        <Sidebar />
        <div className="property-cards">
          <div className="alert-success">Loading...</div>
        </div>
      </div>
    );
  } else if (alert.message === "Could not connect to server.") {
    return (
      <div className="properties">
        <Sidebar />
        <div className="property-cards">
          <Alert message={alert.message} success={alert.isSuccess} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="properties">
        <Sidebar />
        <div className="property-cards">
          {properties.map((property) => (
            <div key={property._id} className="property-card">
              <PropertyCard
                key={property._id}
                {...property}
                userID={userID}
                onSaveProperty={handleSaveProperty}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
};

Properties.propTypes = {
  userID: PropTypes.string,
};

export default Properties;
