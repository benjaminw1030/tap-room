import React from 'react';
import PropTypes from 'prop-types';

function KegForm(props) {
  return (
    <>
      <form onSubmit={props.handleFormSubmit}>
        <div className="form-group">
        <input type="text" className="form-control" name="name" placeholder="Keg Name" required />
        </div>
        <div className="form-group">
        <input type="text" className="form-control" name="brand" placeholder="Brand" required />
        </div>
        <div className="form-group">
        <input type="text" className="form-control" name="flavor" placeholder="Flavor Description" required />
        </div>
        <div className="form-group">
        <input type="number" className="form-control" name="alcohol" placeholder="% Alcohol Content" min="0" max="100" required />
        </div>
        <div className="form-group">
        <input type="number" className="form-control" name="pints" placeholder="Pints in Keg" min="0" />
        <small id="pints" className="form-text text-muted">Leave blank to start with standard 124 pints.</small>
        </div>
        <div className="form-group">
        <input type="number" className="form-control" name="price" placeholder="Price per pint" min="0" required />
        </div>
        <div className="btn-group w-100">
          <button className="btn btn-dark" type="submit">{props.buttonText}</button>
          <button className="btn btn-dark" onClick={props.onBackButton}>Go Back</button>
        </div>
      </form>
    </>
  );
}

KegForm.propTypes = {
  handleFormSubmit: PropTypes.func,
  onbackButton: PropTypes.func,
  buttonText: PropTypes.string,
}

export default KegForm;