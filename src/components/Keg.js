import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){

  const { keg } = props;

  return (
    <>
      <p>{keg.name} - {keg.brand}: ${keg.price}/pint</p>
    </>
  );
}

Keg.propTypes = {
  keg: PropTypes.object,
}

export default Keg;