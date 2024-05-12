import React, { useState, ChangeEvent, FormEvent } from 'react';
import type { VehicleQueryParams } from '../interfaces/consut';

interface Props {
    queryParams: VehicleQueryParams
    setQueryParams: React.Dispatch<React.SetStateAction<VehicleQueryParams>>}

const VehicleQueryForm: React.FC<Props> = ({ queryParams,setQueryParams }) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setQueryParams({
      ...queryParams,
      [name]: value === '' ? undefined : value,
    });
  };


  return (
    <form >
      <label>
        Min Year:
        <input type="number" name="min_year" value={queryParams.min_year || ''} onChange={handleChange} />
      </label>
      <label>
        Max Year:
        <input type="number" name="max_year" value={queryParams.max_year || ''} onChange={handleChange} />
      </label>
      <label>
        Color:
        <input type="text" name="color" value={queryParams.color} onChange={handleChange} />
      </label>
      <label>
        Model:
        <input type="text" name="model" value={queryParams.model} onChange={handleChange} />
      </label>
      <label>
        Min Seats:
        <input type="number" name="min_seats" value={queryParams.min_seats || ''} onChange={handleChange} />
      </label>
      <label>
        Max Seats:
        <input type="number" name="max_seats" value={queryParams.max_seats || ''} onChange={handleChange} />
      </label>
    </form>
  );
};

export default VehicleQueryForm;
