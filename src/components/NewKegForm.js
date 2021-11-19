import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import KegForm from "./KegForm";

function NewKegForm(props) {
  function handleNewKegForm(event) {
    event.preventDefault();
    props.onNewKeg({
      name: event.target.name.value,
      brand: event.target.brand.value,
      flavor: event.target.flavor.value,
      alcohol: event.target.alcohol.value,
      pints: event.target.pints.value,
      price: event.target.price.value,
      id: v4(),
    });
  }

  return (
    <>
      <KegForm handleFormSubmit={handleNewKegForm} buttonText="Add this keg" />
    </>
  );
}

NewKegForm.propTypes = {
  onNewKeg: PropTypes.func,
}

export default NewKegForm;
