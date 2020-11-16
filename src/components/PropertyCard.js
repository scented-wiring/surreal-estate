import React from "react";
import "../styles/PropertyCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faPoundSign,
  faEnvelope,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const PropertyCard = ({
  _id,
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
  userID,
  onSaveProperty,
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
      <div className="button">
        <button className="email-button">
          <a className="button-text" href={"mailto:" + email}>
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </a>
        </button>
      </div>
      {userID && (
        <div className="button">
          <button className="button-text" onClick={() => onSaveProperty(_id)}>
            <FontAwesomeIcon icon={faStar} /> Save
          </button>
        </div>
      )}
    </div>
  );
};

export default PropertyCard;
