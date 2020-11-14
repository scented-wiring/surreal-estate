import React from "react";
import "../styles/NavBar.css";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo, faPoo } from "@fortawesome/free-solid-svg-icons";

const NavBar = (onLogin, onLogout, userID) => {
  return (
    <div className="display">
      <div className="title">
        <FontAwesomeIcon icon={faIgloo} /> Surreal Estate
      </div>
      <div className="navbar">
        <div className="navbar-item">
          <Link to="/">View Properties</Link>
        </div>
        <div className="navbar-item">
          <Link to="/add-property">Add a Property</Link>
        </div>
        <div className="navbar-item">
          {userID ? (
            <button className="login" onClick={onLogout}>
              Sign out from Facebook
            </button>
          ) : (
            <FacebookLogin
              appId="506497520308627"
              callback={onLogin}
              render={(renderProps) => (
                <button className="login" onClick={renderProps.onClick}>
                  Login with Facebook <FontAwesomeIcon icon={faPoo} />
                </button>
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
