import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <>
      {props.kegList.map((keg) => 
        <Keg
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          id={keg.id}
          key={keg.id}
          kegSelect={props.onSelectKeg}
        />
      )}
    </>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelect: PropTypes.func,
}

export default KegList;