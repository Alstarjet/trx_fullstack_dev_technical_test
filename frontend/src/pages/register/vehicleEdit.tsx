import React, { useEffect, useState } from 'react'
import type { VehicleData } from '../../interfaces/vehicle'
import './vehicleRegister.css'
import { IoCloseCircleSharp } from "react-icons/io5";
import {Link,useParams} from "react-router-dom";
import putVehicle from '../../scripts/putVehicle';
import getOneVehicle from '../../scripts/getOneVehicle';
import { redirect } from "react-router-dom";

function VehicleEdit() {
    let { id } = useParams();
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
    useEffect(()=>{
        const getVehicle=async()=>{
            if(id){
                try{
                    const vehicle =await getOneVehicle(id)
                    setFormData(vehicle)
                }catch(error){
                    console.log(error)
                }
            }
        }
        getVehicle()
    },[id])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        if(name=="asientos"||name=="YEAR"){
            setFormData({ ...formData, [name]: parseInt(value) })
        }else{
            setFormData({ ...formData, [name]: value })
        }
    }

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(id){
            try{
                await putVehicle(formData,id)
                alert("Vehiclulo Actualizado")
                return redirect("/list")            
            }catch(error){
                alert("ERROR:"+error)
            }
        }
    }

    return (
        <div className='viewCenterFloat'>
            <div className='titlex'>
                <h2>Edit Vehiculo</h2>
                <Link to="/" className="nav-link"><IoCloseCircleSharp /></Link>
            </div>
            <form onSubmit={(e)=>{handleSubmit(e)}} id='vehicleFormNew'>
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
                <button type='submit' className="btn btn-primary" >Actualizar</button>
            </form>

        </div>

    )
}




export default VehicleEdit