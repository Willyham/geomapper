import React from 'react'
import {Field, reduxForm} from 'redux-form'

const GeoAddForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="hashes">Add hashes</label>
        <Field name="hashes" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="geojson">Add GeoJSON</label>
        <Field name="geojson" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default reduxForm({
  form: 'hash-add'
})(GeoAddForm)
