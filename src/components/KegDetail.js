import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg } = props;

  return (
    <>
      <h3>Keg Details</h3>
      <h4>{keg.name}</h4>
      <p>Brand: {keg.brand}</p>
      <p>Flavor:{keg.flavor}</p>
      <p>Alcohol Content: {keg.alcohol}%</p>
      <p>Pints left: {keg.pints}</p>
      <p>Price Per Pint: ${keg.brand}</p>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
};

export default KegDetail;
