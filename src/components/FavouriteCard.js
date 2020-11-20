import React, { useState, useEffect } from "react";
import "../styles/FavouriteCard.css";
import PropTypes from "prop-types";
import axios from "axios";
import Alert from "./Alert";

const FavouriteCard = ({ propertyListing, _id, removeFavourite }) => {
  const [data, setData] = useState([]);
  const [alert, setAlert] = useState([{ message: "", isSuccess: false }]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing/${propertyListing}`)
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {
        setAlert({
          message: "Could not retrieve property data",
          isSuccess: false,
        });
      });
  }, [propertyListing]);

  return (
    <div className="favourite-card">
      <Alert message={alert.message} success={alert.isSuccess} />
      <div className="favourite-card-text">
        {data.title}, {data.city}
      </div>
      <button className="favourite-remove" onClick={() => removeFavourite(_id)}>
        Remove
      </button>
    </div>
  );
};

FavouriteCard.propTypes = {
  propertyListing: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  removeFavourite: PropTypes.func.isRequired,
};

export default FavouriteCard;
