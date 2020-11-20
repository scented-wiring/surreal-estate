import React, { useState } from "react";
import "../styles/Favourites.css";
import PropTypes from "prop-types";
import Alert from "./Alert";
import axios from "axios";
import FavouriteCard from "./FavouriteCard";
import { useEffect } from "react";

const Favourites = ({ userID }) => {
  const [favourites, setFavourites] = useState([]);
  const [alert, setAlert] = useState({ message: "", isSuccess: false });

  useEffect(() => {
    let isMounted = true;
    axios
      .get("http://localhost:4000/api/v1/Favourite")
      .then((response) => {
        if (isMounted) setFavourites(response.data);
      })
      .catch(() => {
        setAlert({
          message: "Could not connect to server.",
          isSuccess: false,
        });
      });
    return () => {
      isMounted = false;
    };
  }, []);

  const handleRemoveFavourite = (_id) => {
    axios
      .delete(`http://localhost:4000/api/v1/Favourite/${_id}`)
      .then(() => {
        setAlert({
          message: "Favourite removed",
          isSuccess: true,
        });
      })
      .then(() => setFavourites(favourites.filter((fav) => fav._id !== _id)))
      .then(() => {
        setTimeout(() => setAlert({ message: "", isSuccess: false }), 2000);
      })
      .catch(() => {
        setAlert({
          message: "Server error",
          isSuccess: false,
        });
      });
  };

  if (alert.message === "Could not connect to server.") {
    return (
      <div className="favourites">
        <Alert message={alert.message} success={alert.isSuccess} />
      </div>
    );
  } else if (!userID || favourites.length === 0) {
    return (
      <div className="favourites">
        <Alert message={alert.message} success={alert.isSuccess} />
        <div className="no-favourites">
          No favourites found. Log in with Facebook to select and view
          favourites.
        </div>
      </div>
    );
  } else {
    return (
      <div className="favourites">
        <Alert message={alert.message} success={alert.isSuccess} />
        {favourites.map((favourite) => (
          <div key={favourite._id}>
            <FavouriteCard
              propertyListing={favourite.propertyListing}
              _id={favourite._id}
              removeFavourite={handleRemoveFavourite}
            />
          </div>
        ))}
      </div>
    );
  }
};

Favourites.propTypes = {
  userID: PropTypes.string.isRequired,
};

export default Favourites;
