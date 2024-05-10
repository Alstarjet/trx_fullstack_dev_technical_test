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
import type {FeatureCollection} from './interfaces/vehicle'
function App() {
  const getLtLng = (lat: number, lng: number) => {
    console.log(lat + " & " + lng)
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
            <li className="nav-item"><Link to="/hol" className="nav-link"><button className="btn btn-primary me-2" type="button">Main button</button></Link></li>
            <li className="nav-item"><Link to="/new" className="nav-link"><button className="btn btn-primary me-2" type="button">Nuevo Vehiculo</button></Link></li>

          </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/new" element={<VehicleRegister />} />
        <Route path="/list" element={<VehicleList />} />
      </Routes>
      <Maps geoJson={geoccc} getLtLng={getLtLng}></Maps>
    </BrowserRouter>
  )
}

export default App
const geoccc:FeatureCollection =
{
  "features": [
    {
      "geometry": {
        "coordinates": [
          -99.14946,
          19.50047
        ],
        "type": "Point"
      },
      "type": "Feature",
      "properties": {
        "address": "",
        "name": "Politecnico",
        "type": "in"
      }
    },
    {
      "geometry": {
        "coordinates": [
          -99.13781,
          19.47101
        ],
        "type": "Point"
      },
      "type": "Feature",
      "properties": {
        "address": "",
        "name": "LaRaza",
        "type": "out"
      }
    },
    {
      "geometry": {
        "coordinates": [
          -99.13049,
          19.46303
        ],
        "type": "Point"
      },
      "type": "Feature",
      "properties": {
        "address": "",
        "name": "Misterios",
        "type": "out"
      }
    },
    {
      "geometry": {
        "coordinates": [
          -99.11953,
          19.45862
        ],
        "type": "Point"
      },
      "type": "Feature",
      "properties": {
        "address": "",
        "name": "ValleGomez",
        "type": "out"
      }
    },
    {
      "geometry": {
        "coordinates": [
          -99.122,
          19.4536
        ],
        "type": "Point"
      },
      "type": "Feature",
      "properties": {
        "address": "",
        "name": "Canal Norte",
        "type": "out"
      }
    },
    {
      "geometry": {
        "coordinates": [
          [
            -99.1495,
            19.50046
          ],
          [
            -99.14787,
            19.49631
          ],
          [
            -99.14764,
            19.49574
          ],
          [
            -99.14756,
            19.49553
          ],
          [
            -99.14753,
            19.49552
          ],
          [
            -99.14748,
            19.4955
          ],
          [
            -99.14738,
            19.49526
          ],
          [
            -99.14687,
            19.49401
          ],
          [
            -99.1464,
            19.49283
          ],
          [
            -99.14601,
            19.49186
          ],
          [
            -99.14568,
            19.49104
          ],
          [
            -99.14566,
            19.49094
          ],
          [
            -99.14566,
            19.49081
          ],
          [
            -99.14563,
            19.49074
          ],
          [
            -99.14548,
            19.49033
          ],
          [
            -99.14541,
            19.49015
          ],
          [
            -99.14496,
            19.48901
          ],
          [
            -99.14445,
            19.48773
          ],
          [
            -99.14422,
            19.48709
          ],
          [
            -99.1439,
            19.48628
          ],
          [
            -99.14353,
            19.48535
          ],
          [
            -99.14223,
            19.48207
          ],
          [
            -99.14176,
            19.48087
          ],
          [
            -99.14111,
            19.47932
          ],
          [
            -99.14057,
            19.47796
          ],
          [
            -99.14014,
            19.47684
          ],
          [
            -99.13955,
            19.47534
          ],
          [
            -99.13903,
            19.47399
          ],
          [
            -99.1385,
            19.47271
          ],
          [
            -99.13839,
            19.47251
          ],
          [
            -99.13799,
            19.47189
          ],
          [
            -99.13792,
            19.47174
          ],
          [
            -99.13787,
            19.47162
          ],
          [
            -99.13783,
            19.47155
          ],
          [
            -99.13782,
            19.47146
          ],
          [
            -99.13772,
            19.47107
          ],
          [
            -99.13754,
            19.47077
          ],
          [
            -99.13743,
            19.47059
          ],
          [
            -99.13733,
            19.47049
          ],
          [
            -99.13721,
            19.4704
          ],
          [
            -99.13649,
            19.46933
          ],
          [
            -99.13623,
            19.46895
          ],
          [
            -99.13607,
            19.46877
          ],
          [
            -99.13601,
            19.46869
          ],
          [
            -99.1358,
            19.46844
          ],
          [
            -99.13452,
            19.46679
          ],
          [
            -99.13407,
            19.46618
          ],
          [
            -99.13326,
            19.46509
          ],
          [
            -99.13321,
            19.46499
          ],
          [
            -99.13329,
            19.46502
          ],
          [
            -99.13349,
            19.46507
          ],
          [
            -99.13399,
            19.46513
          ],
          [
            -99.1353,
            19.46519
          ],
          [
            -99.13691,
            19.46525
          ],
          [
            -99.13706,
            19.46524
          ],
          [
            -99.13711,
            19.46514
          ],
          [
            -99.13709,
            19.465
          ],
          [
            -99.13707,
            19.46494
          ],
          [
            -99.13586,
            19.46489
          ],
          [
            -99.13458,
            19.46483
          ],
          [
            -99.1339,
            19.46481
          ],
          [
            -99.13357,
            19.46477
          ],
          [
            -99.13325,
            19.46466
          ],
          [
            -99.13285,
            19.46445
          ],
          [
            -99.13163,
            19.46372
          ],
          [
            -99.13118,
            19.46345
          ],
          [
            -99.13068,
            19.46315
          ],
          [
            -99.1285,
            19.46184
          ],
          [
            -99.12802,
            19.46157
          ],
          [
            -99.12767,
            19.4614
          ],
          [
            -99.12703,
            19.46117
          ],
          [
            -99.12627,
            19.46091
          ],
          [
            -99.12548,
            19.46065
          ],
          [
            -99.12409,
            19.46018
          ],
          [
            -99.12227,
            19.45959
          ],
          [
            -99.11996,
            19.45884
          ],
          [
            -99.11906,
            19.45854
          ],
          [
            -99.11894,
            19.45851
          ],
          [
            -99.11887,
            19.45852
          ],
          [
            -99.11855,
            19.45842
          ],
          [
            -99.11873,
            19.45797
          ],
          [
            -99.11907,
            19.45712
          ],
          [
            -99.11923,
            19.45667
          ],
          [
            -99.1193,
            19.4567
          ],
          [
            -99.11987,
            19.45529
          ],
          [
            -99.12168,
            19.45583
          ],
          [
            -99.12191,
            19.45444
          ],
          [
            -99.12197,
            19.45404
          ],
          [
            -99.122,
            19.45385
          ],
          [
            -99.12201,
            19.4537
          ],
          [
            -99.12198,
            19.45359
          ]
        ],
        "type": "LineString"
      },
      "type": "Feature",
      "properties": {
        "address": null,
        "name": null,
        "type": "LineString"
      }
    }
  ],
  "type": "FeatureCollection"
}
