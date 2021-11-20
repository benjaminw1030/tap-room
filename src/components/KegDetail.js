import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, closeDetail, onDeletingKeg, onSellPint, onEditClick } = props;

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
      <h3 className="text-center subheading">Keg Details</h3>
      <div className="d-flex justify-content-center">
        <div className="w-75">
          <p>Name: {keg.name}</p>
          <p>Brand: {keg.brand}</p>
          <p>Flavor: {keg.flavor}</p>
          <p>Alcohol Content: {keg.alcohol}%</p>
          <p>Pints left: {keg.pints}</p>
          <p>Price Per Pint: ${keg.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="btn-group w-100">
        {sellPintButton}
        <button className="btn btn-dark" onClick={() => onEditClick()}>
          Edit Keg
        </button>
        <button className="btn btn-dark" onClick={() => onDeletingKeg(keg.id)}>
          Delete Keg
        </button>
        <button className="btn btn-dark" onClick={() => closeDetail()}>
          Close Keg Details
        </button>
      </div>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  closeDetail: PropTypes.func,
  onDeletingKeg: PropTypes.func,
  onSellPint: PropTypes.func,
  onEditClick: PropTypes.func,
};

export default KegDetail;
