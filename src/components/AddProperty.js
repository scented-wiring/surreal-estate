import React, { useState } from 'react';
import "../styles/AddProperty.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: '',
      city: 'Manchester',
      type: 'Flat',
      bedrooms: '',
      bathroomss: '',
      price: '',
      email: ''
    }
  }

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  }

  const handleFieldChange = (event) => {
    setFields({...fields, [event.target.name]: event.target.value });
  }

  return (
    <div className="AddProperty">
      <form onSubmit={handleAddProperty}>
        <label htmlFor='title'>
          Title
          <input id="title" name="title" value={fields.title} onChange={handleFieldChange} placeholder="2 bed flat" className="input-title" />
        </label>
        <label htmlFor="city">
          City
          <select id="city" name="city" value={fields.city} onChange={handleFieldChange} className="input-city">
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <label htmlFor="type">
          Type
          <select id="type" name="type" value={fields.type} onChange={handleFieldChange} className="select-type">
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
        <label htmlFor="bedrooms">
          Bedrooms
          <select id="bedrooms" name="bedrooms" value={fields.bedrooms} onChange={handleFieldChange} className="select-bedrooms">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <label htmlFor="bathrooms">
          Bathrooms
          <select id="bathrooms" name="bathrooms" value={fields.bathrooms} onChange={handleFieldChange} type="number" className="select-bathrooms" >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <label htmlFor="price">
          Price £
          <input id="price" name="price" value={fields.price} onChange={handleFieldChange} type="number" className="input-price" placeholder="25000" min="1" max="999999" />
        </label>
        <label htmlFor="email">
          Email
          <input id="email" name="email" value={fields.email} onChange={handleFieldChange} type="email" placeholder="example@email.com" className="input-email" />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddProperty;