import React from "react";
import "../styles/NavBar.css";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ onLogin, onLogout, userID }) => {
  return (
    <div className="navbar">
      <div className="navbar-title">
        <FontAwesomeIcon icon={faIgloo} /> Surreal Estate
      </div>
      <div className="navbar-link">
        <Link to="/">
          <span className="small-screen">View</span>
          <span className="large-screen"> Properties</span>
        </Link>
      </div>
      <div className="navbar-link">
        <Link to="/favourites">Favourites</Link>
      </div>
      <div className="navbar-link">
        <Link to="/add-property">
          <span className="small-screen">Add</span>
          <span className="large-screen"> a Property</span>
        </Link>
      </div>

      <div className="navbar-login">
        {userID ? (
          <button className="navbar-login-button" onClick={onLogout}>
            <span className="small-screen">Sign out</span>
            <span className="large-screen"> from facebook</span>
          </button>
        ) : (
          <FacebookLogin
            appId="506497520308627"
            callback={onLogin}
            render={(renderProps) => (
              <button
                className="navbar-login-button"
                onClick={renderProps.onClick}
              >
                <span className="small-screen">Login</span>
                <span className="large-screen"> with facebook</span>
              </button>
            )}
          />
        )}
      </div>
    </div>
  );
};

NavBar.propTypes = {
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
  userID: PropTypes.string,
};

export default NavBar;
