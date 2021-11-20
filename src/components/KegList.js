import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <>
      <div className="text-center">
        <h3 className="subheading">Available Drinks</h3>
        <h6>Click on a beverage to see details and sell pints.</h6>
        <br />
        {props.kegList.map((keg) => (
          <Keg
            name={keg.name}
            price={keg.price}
            id={keg.id}
            key={keg.id}
            kegSelect={props.onSelectKeg}
          />
        ))}
        <br />
      </div>
    </>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelect: PropTypes.func,
};

export default KegList;
