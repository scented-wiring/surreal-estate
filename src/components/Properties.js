import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../styles/Properties.css";
import Alert from "../components/Alert";
import PropertyCard from "../components/PropertyCard";
import Sidebar from "../components/Sidebar";

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

  const { search } = useLocation();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch((err) => console.error(err));
  }, [search]);

  return (
    <div className="properties">
      <Sidebar />
      <Alert message={alert.message} success={alert.isSuccess} />
      {properties.map((property) => (
        <div key={property.id} className="card">
          <PropertyCard key={property._id} {...property} />
        </div>
      ))}
    </div>
  );
};

export default Properties;
