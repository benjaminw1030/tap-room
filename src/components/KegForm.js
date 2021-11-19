import React from 'react';
import PropTypes from 'prop-types';

function KegForm(props) {
  return (
    <>
      <form onSubmit={props.handleFormSubmit}>
        <input type="text" name="name" placeholder="Keg Name" />
        <input type="text" name="brand" placeholder="Brand" />
        <input type="text" name="flavor" placeholder="Flavor Description" />
        <input type="number" name="alcohol" placeholder="Alcohol Content" />
        <input type="number" name="pints" placeholder="Pints in Keg" />
        <input type="number" name="price" placeholder="Price per pint" />
        <button className="btn btn-dark" type="submit">{props.buttonText}</button>
      </form>
      <button className="btn btn-dark" onClick={props.onBackButton}>Go Back</button>
    </>
  );
}

KegForm.propTypes = {
  handleFormSubmit: PropTypes.func,
  onbackButton: PropTypes.func,
  buttonText: PropTypes.string,
}

export default KegForm;