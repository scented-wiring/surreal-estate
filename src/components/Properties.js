import React, { useState, useEffect } from "react";
import Alert from "../components/Alert";
import axios from "axios";
import "../styles/Properties.css";
import PropertyCard from "../components/PropertyCard";

const Properties = () => {
  const [properties, setProperties] = useState([]);

  const [alert, setAlert] = useState({ message: "", isSuccess: false });

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/PropertyListing")
      .then((response) => setProperties(response.data))
      .catch(() => {
        setAlert({
          message: "Could not retrieve properties",
          isSuccess: false,
        });
      });
  }, []);

  return (
    <div className="properties">
      <Alert message={alert.message} success={alert.isSuccess} />
      {properties.map((property) => (
        <div key={property.id} className="col">
          <PropertyCard key={property._id} {...property} />
        </div>
      ))}
    </div>
  );
};

export default Properties;
