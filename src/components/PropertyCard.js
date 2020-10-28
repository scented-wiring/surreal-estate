import React from "react";
import "../styles/PropertyCard.css";

const PropertyCard = ({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
}) => {
  return (
    <div className="property-card">
      <div className="property-title">{title}</div>
      <div className="property-type">
        {type}, {city}
      </div>
      <div className="property-bathrooms">{bathrooms} bathrooms</div>
      <div className="property-bedrooms">{bedrooms} bedrooms</div>
      <div className="property-price">£{price}</div>
      <div className="property-email">
        <a href={"mailto:" + email}>email</a>
      </div>
    </div>
  );
};

export default PropertyCard;
