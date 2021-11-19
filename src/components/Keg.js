import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <>
      <p>
        {props.name} - {props.brand}: ${props.price}/pint
      </p>
    </>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
};

export default Keg;
