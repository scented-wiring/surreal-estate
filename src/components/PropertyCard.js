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
    <div className="property-card-display">
      <div className="property-title">{title}</div>
      <div className="property-type-city">
        {type}, {city}
      </div>
      <div>
        <FontAwesomeIcon icon={faBath} /> {bathrooms}
      </div>
      <div>
        <FontAwesomeIcon icon={faBed} /> {bedrooms}
      </div>
      <div>
        <FontAwesomeIcon icon={faPoundSign} />
        {price}
      </div>
      <button className="button">
        <a className="button-text" href={"mailto:" + email}>
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </a>
      </button>
      {userID && (
        <button className="button" onClick={() => onSaveProperty(_id)}>
          <FontAwesomeIcon icon={faStar} /> Save
        </button>
      )}
    </div>
  );
};

export default PropertyCard;
