import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import KegForm from "./KegForm";

function NewKegForm(props) {
  function handleNewKegForm(event) {
    event.preventDefault();
    let inputPints = parseInt(event.target.pints.value)
    if (isNaN(inputPints) || inputPints === 0) {
      inputPints = 124;
    }
    console.log(inputPints)
    props.onNewKeg({
      name: event.target.name.value,
      brand: event.target.brand.value,
      flavor: event.target.flavor.value,
      alcohol: parseInt(event.target.alcohol.value),
      pints: inputPints,
      price: parseInt(event.target.price.value),
      id: v4(),
    });
  }

  return (
    <>
    <h2>Creating a New Keg</h2>
      <KegForm handleFormSubmit={handleNewKegForm} onBackButton= {props.onBackButton} buttonText="Add this keg" />
    </>
  );
}

NewKegForm.propTypes = {
  onNewKeg: PropTypes.func,
}

export default NewKegForm;
