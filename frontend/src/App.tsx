import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import VehicleRegister from './pages/register/vehicleRegister'
import Maps from './components/maps'
import VehicleList from './pages/list&search/listVehicles';
import VehicleEdit from './pages/register/vehicleEdit';
import type { markeVehicle } from './interfaces/vehicle'
function App() {
  const getLtLng = (lat: number, lng: number) => {
    console.log(lat + " & " + lng)
  }
  let marker: markeVehicle = {
    marker: null,
    coordinates: [],
    VehicleData: null,
    info: null
  }



  return (
    <BrowserRouter >
      <nav className='navbar navbar-expand-lg bg-primary' data-bs-theme="dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><Link to="/list" className="nav-link active"><button className="btn btn-primary me-2" type="button">Lista de Vehiculos</button></Link></li>
              <li className="nav-item"><Link to="/new" className="nav-link"><button className="btn btn-primary me-2" type="button">Nuevo Vehiculo</button></Link></li>
              <li className="nav-item"><Link to="/" className="nav-link"><button className="btn btn-primary me-2" type="button">Mapa</button></Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <main >
      <Routes>
        <Route path="/new" element={<VehicleRegister />} />
        <Route path="/edit/:id" element={<VehicleEdit />} />
        <Route path="/list" element={<VehicleList marker={marker} />} />
      </Routes>
      <Maps getLtLng={getLtLng} marker={marker}></Maps>
      </main>
    </BrowserRouter>
  )
}

export default App
