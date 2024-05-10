import React, { useState } from 'react'
import type { VehicleData } from '../../interfaces/vehicle'
import './vehicleRegister.css'
import { IoCloseCircleSharp } from "react-icons/io5";
import {Link} from "react-router-dom";


function VehicleRegister() {
    const [formData, setFormData] = useState<VehicleData>({
        placa: '',
        numero_economico: '',
        vim: '',
        asientos: 0,
        seguro: '',
        seguro_numero: '',
        BRAND: '',
        MODEL: '',
        YEAR: 0,
        COLOR: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("enviamos")
    }

    return (
        <div className='viewCenterFloat'>
            <div className='titlex'>
                <h2>Nuevo Vehiculo</h2>
                <Link to="/" className="nav-link"><IoCloseCircleSharp /></Link>
            </div>
            <form onSubmit={handleSubmit} id='vehicleFormNew'>
                <div className="form-floating mb-3">
                    <input type="text" name="placa" id="placa" className="form-control form-control-sm" value={formData.placa} onChange={handleChange} required />
                    <label htmlFor="placa" className="form-label">Placa:</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" name="numero_economico" id="numero_economico" className="form-control form-control-sm" value={formData.numero_economico} onChange={handleChange} required />
                    <label htmlFor="numero_economico" className="form-label">Número económico:</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" name="vim" id="vim" className="form-control form-control-sm" value={formData.vim} onChange={handleChange} required />

                    <label htmlFor="vim" className="form-label">VIN:</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" name="asientos" id="asientos" className="form-control form-control-sm" value={formData.asientos} onChange={handleChange} required />

                    <label htmlFor="asientos" className="form-label">Asientos:</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" name="seguro" id="seguro" className="form-control form-control-sm" value={formData.seguro} onChange={handleChange} required />

                    <label htmlFor="seguro" className="form-label">Seguro:</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" name="seguro_numero" id="seguro_numero" className="form-control form-control-sm" value={formData.seguro_numero} onChange={handleChange} required />

                    <label htmlFor="seguro_numero" className="form-label">Número de seguro:</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" name="BRAND" id="BRAND" className="form-control form-control-sm" value={formData.BRAND} onChange={handleChange} required />

                    <label htmlFor="BRAND" className="form-label">Marca:</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" name="MODEL" id="MODEL" className="form-control form-control-sm" value={formData.MODEL} onChange={handleChange} required />

                    <label htmlFor="MODEL" className="form-label">Modelo:</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" name="YEAR" id="YEAR" className="form-control form-control-sm" value={formData.YEAR} onChange={handleChange} required />

                    <label htmlFor="YEAR" className="form-label">Año:</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" name="COLOR" id="COLOR" className="form-control form-control-sm" value={formData.COLOR} onChange={handleChange} required />

                    <label htmlFor="COLOR" className="form-label">Color:</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>

    )
}




export default VehicleRegister