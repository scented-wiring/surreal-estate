import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../styles/Properties.css";
import Alert from "../components/Alert";
import PropertyCard from "../components/PropertyCard";
import Sidebar from "../components/Sidebar";

const Properties = ({ userID }) => {
  const [properties, setProperties] = useState([]);

  const [alert, setAlert] = useState({ message: "", isSuccess: false });

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/PropertyListing")
      .then((response) => setProperties(response.data))
      .catch(() => {
        setAlert({
          message: "Could not connect to server",
          isSuccess: false,
        });
      });
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

  return (
    <div className="properties">
      <Sidebar />
      <div className="property-alert">
        <Alert message={alert.message} success={alert.isSuccess} />{" "}
      </div>
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
};

export default Properties;
