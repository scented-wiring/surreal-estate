import React, { useState } from "react";
import "../styles/Favourites.css";
import Alert from "./Alert";
import axios from "axios";
import FavouriteCard from "./FavouriteCard";
import { useEffect } from "react";

const Favourites = (userID) => {
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
          message: "Could not retrieve favourites",
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
        setTimeout(() => setAlert({ message: "", isSuccess: false }), 3000);
      })
      .catch(() => {
        setAlert({
          message: "Server error",
          isSuccess: false,
        });
      });
  };

  if (favourites.length === 0 || !userID) {
    return (
      <div className="favourites-display">
        <Alert message={alert.message} success={alert.isSuccess} />
        No favourites found. Log in with Facebook to select and view favourites.
      </div>
    );
  } else {
    return (
      <div className="favourites-display">
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

export default Favourites;
