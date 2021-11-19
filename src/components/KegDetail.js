import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, closeDetail, onDeletingKeg, onSellPint } = props;

  let sellPintButton = (
    <button className="btn btn-dark" onClick={() => onSellPint(keg.id)}>
      Sell a Pint
    </button>
  );
  if (keg.pints <= 0) {
    sellPintButton = <p>This keg is tapped out!</p>;
  }

  return (
    <>
      <h3>Keg Details</h3>
      <h4>{keg.name}</h4>
      <p>Brand: {keg.brand}</p>
      <p>Flavor:{keg.flavor}</p>
      <p>Alcohol Content: {keg.alcohol}%</p>
      <p>Pints left: {keg.pints}</p>
      <p>Price Per Pint: ${keg.brand}</p>
      {sellPintButton}
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
  onSellPint: PropTypes.func,
};

export default KegDetail;
