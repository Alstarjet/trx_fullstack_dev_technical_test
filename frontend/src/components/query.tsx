import React, { ChangeEvent } from 'react';
import type { VehicleQueryParams } from '../interfaces/consut';
import './query.css'
interface Props {
  queryParams: VehicleQueryParams
  setQueryParams: React.Dispatch<React.SetStateAction<VehicleQueryParams>>
}

const VehicleQueryForm: React.FC<Props> = ({ queryParams, setQueryParams }) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setQueryParams({
      ...queryParams,
      [name]: value === '' ? undefined : value,
    });
  };


  return (
    <form className='queryForm'>
      <label>
        Min Año-
        <input type="number" name="min_year" value={queryParams.min_year || ''} onChange={handleChange} />
      </label>
      <label>
        <input type="number" name="max_year" value={queryParams.max_year || ''} onChange={handleChange} />
        -Max Año
      </label>
      <label>
        Min Asientos-
        <input type="number" name="min_seats" value={queryParams.min_seats || ''} onChange={handleChange} />
      </label>
      <label>
      <input type="number" name="max_seats" value={queryParams.max_seats || ''} onChange={handleChange} />
        -Max Asientos
      </label>
      <div>
      <label>
        Color:
        <input type="text" name="color" value={queryParams.color} onChange={handleChange} />
      </label>
      <label>
        Model:
        <input type="text" name="model" value={queryParams.model} onChange={handleChange} />
      </label>
      </div>
    </form>
  );
};

export default VehicleQueryForm;
