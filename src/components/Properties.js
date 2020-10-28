import React from "react";
import "../styles/Properties.css";
import PropertyCard from "../components/PropertyCard";

const Properties = () => (
  <div className="properties">
    <PropertyCard
      title="2 Bed Flat"
      type="Flat"
      bathrooms={2}
      bedrooms={2}
      price={10000}
      city="Manchester"
      email="hello@test.com"
    />
  </div>
);

export default Properties;
