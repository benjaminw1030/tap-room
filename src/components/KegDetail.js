import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, closeDetail, onDeletingKeg } = props;

  return (
    <>
      <h3>Keg Details</h3>
      <h4>{keg.name}</h4>
      <p>Brand: {keg.brand}</p>
      <p>Flavor:{keg.flavor}</p>
      <p>Alcohol Content: {keg.alcohol}%</p>
      <p>Pints left: {keg.pints}</p>
      <p>Price Per Pint: ${keg.brand}</p>
      <button className="btn btn-dark" onClick={() => onDeletingKeg(keg.id)}>
        Delete Keg
      </button>
      <button className="btn btn-dark" onClick={() => closeDetail()}>
        Close Keg Details
      </button>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  closeDetail: PropTypes.func,
  onDeletingKeg: PropTypes.func,
};

export default KegDetail;
