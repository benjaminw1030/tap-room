import React from "react";
import Keg from "./Keg";
import PropTypes from "./prop-types";

function KegList(props) {
  return (
    <>
      {props.kegList.map((keg) => (
        <Keg
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          id={keg.id}
          key={keg.id}
        />
      ))}
    </>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
}

export default KegList;

//name
//brand
//flavor
//price
//alcoholContent
//pints