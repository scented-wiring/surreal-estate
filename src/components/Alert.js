import React from "react";
import "../styles/Alert.css";
import PropTypes from "prop-types";

const Alert = ({ message, success }) => {
  if (!message) return null;

  return (
    <div className={`Alert alert-${success ? "success" : "error"}`}>
      {message}
    </div>
  );
};

Alert.defaultProps = {
  success: false,
};

Alert.propTypes = {
  message: PropTypes.string,
  success: PropTypes.bool.isRequired,
};

export default Alert;
