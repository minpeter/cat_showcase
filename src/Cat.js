import React from "react";
import PropTypes from "prop-types";
import "./Cat.css";

function Cat({ id, imageURL }) {
  return (
    <div className="cat">
      <img src={imageURL} alt={id} />
    </div>
  );
}

Cat.prototype = {
  id: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
};

export default Cat;
