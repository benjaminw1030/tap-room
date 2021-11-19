import React from "react";
import PropTypes from "prop-types";
import KegForm from "./KegForm";

function EditKegForm(props) {
  const { keg } = props;
  function handleEditKegForm(event) {
    event.preventDefault();
    props.onEditKeg({
      name: event.target.name.value,
      brand: event.target.brand.value,
      flavor: event.target.flavor.vwalue,
      alcohol: parseInt(event.target.alcohol.value),
      pints: parseInt(event.target.pints.value),
      price: parseInt(event.target.price.value),
      id: keg.id,
    });
  }

  return (
    <>
      <h2>Editing {keg.name}</h2>
      <KegForm handleFormSubmit={handleEditKegForm} onBackButton = {props.onBackButton} buttonText="Edit Keg" />
    </>
  );
}

EditKegForm.propTypes = {
  onEditKeg: PropTypes.func,
  keg: PropTypes.object,
}

export default EditKegForm;