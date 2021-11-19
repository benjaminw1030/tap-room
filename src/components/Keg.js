import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <>
      <div onClick={() => props.kegSelect(props.id)}>
        <p>
          {props.name} - {props.brand}: ${props.price}/pint {props.pints}
        </p>
      </div>
    </>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  onTicketSelect: PropTypes.func,
};

export default Keg;
