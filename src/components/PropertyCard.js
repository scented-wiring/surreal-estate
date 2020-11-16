import React from "react";
import "../styles/PropertyCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faPoundSign,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

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
      <div className="property-type-city">
        {type}, {city}
      </div>
      <div className="property-bathrooms">
        <FontAwesomeIcon icon={faBath} /> {bathrooms}
      </div>
      <div className="property-bedrooms">
        <FontAwesomeIcon icon={faBed} /> {bedrooms}
      </div>
      <div className="property-price">
        <FontAwesomeIcon icon={faPoundSign} />
        {price}
      </div>
      <div className="property-email">
        <button className="email-button">
          <FontAwesomeIcon icon={faEnvelope} />
          <a className="email-text" href={"mailto:" + email}>
            Email
          </a>
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
