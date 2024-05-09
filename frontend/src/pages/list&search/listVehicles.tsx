import  { useState } from 'react';
import itemVehicle from '../../components/vehicleIteamList';

function VehicleList(){
  const [filterTipo, setFilterTipo] = useState<string>('')
  const [filterAño, setFilterAño] = useState<number | null>(null)



  return (
    <div>
      <h2>Lista de Vehículos</h2>
      <div>
        <label>
          Tipo:
          <input
            type="text"
            value={filterTipo}
            onChange={(e) => setFilterTipo(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Año:
          <input
            type="number"
            value={filterAño || ''}
            onChange={(e) =>
              setFilterAño(e.target.value ? parseInt(e.target.value) : null)
            }
          />
        </label>
      </div>
      <div className="accordion" id="accordionExample">
      {dataTest.map((vehicle, index) => (
  itemVehicle(vehicle, index)
))}
      </div>
    </div>
  );
};

export default VehicleList;

const dataTest=[
    {
      "placa": "6157184027",
      "numero economico": "7686239403",
      "vim": "1C3BC8EG8BN532515",
      "asientos": 40,
      "seguro": "Considine, Hirthe and Schmitt",
      "segure numebr": "3582601633",
      "BRAND": "Lincoln",
      "MODEL": "MKT",
      "YEAR": 2012,
      "COLOR": "Red"
    },
    {
      "placa": "2433676568",
      "numero economico": "4026699048",
      "vim": "WAUSF78E38A691446",
      "asientos": 39,
      "seguro": "Baumbach-Bernhard",
      "segure numebr": "9647531435",
      "BRAND": "Isuzu",
      "MODEL": "Hombre Space",
      "YEAR": 2000,
      "COLOR": "Fuscia"
    },
    {
      "placa": "9341257069",
      "numero economico": "2789026386",
      "vim": "WBSWL93578P813375",
      "asientos": 34,
      "seguro": "Wisoky, Hand and Ruecker",
      "segure numebr": "8239188583",
      "BRAND": "Acura",
      "MODEL": "Legend",
      "YEAR": 1990,
      "COLOR": "Khaki"
    },
    {
      "placa": "9455540878",
      "numero economico": "8920085757",
      "vim": "2HNYD28838H710377",
      "asientos": 16,
      "seguro": "Tromp LLC",
      "segure numebr": "4679726814",
      "BRAND": "Mitsubishi",
      "MODEL": "Diamante",
      "YEAR": 1997,
      "COLOR": "Aquamarine"
    },
    {
      "placa": "1773899511",
      "numero economico": "8325446153",
      "vim": "1G6KD57Y58U867522",
      "asientos": 31,
      "seguro": "Crist-Olson",
      "segure numebr": "8433655744",
      "BRAND": "Subaru",
      "MODEL": "XT",
      "YEAR": 1988,
      "COLOR": "Crimson"
    },
    {
      "placa": "5857961637",
      "numero economico": "2980058238",
      "vim": "1GYS4KEF0BR611905",
      "asientos": 40,
      "seguro": "Ondricka, Koelpin and Larkin",
      "segure numebr": "5925658388",
      "BRAND": "Chevrolet",
      "MODEL": "Suburban 2500",
      "YEAR": 2012,
      "COLOR": "Mauv"
    },
    {
      "placa": "3771695627",
      "numero economico": "6980379542",
      "vim": "WBA8Z5C5XFG644485",
      "asientos": 39,
      "seguro": "Fisher-Rice",
      "segure numebr": "3238367366",
      "BRAND": "Volvo",
      "MODEL": "960",
      "YEAR": 1994,
      "COLOR": "Teal"
    },
    {
      "placa": "1626052174",
      "numero economico": "1134797354",
      "vim": "WBAAN37431N354936",
      "asientos": 19,
      "seguro": "Effertz-Toy",
      "segure numebr": "8430555234",
      "BRAND": "Bentley",
      "MODEL": "Brooklands",
      "YEAR": 2009,
      "COLOR": "Crimson"
    },
    {
      "placa": "7400346636",
      "numero economico": "5530308996",
      "vim": "1G6KE54Y74U628212",
      "asientos": 15,
      "seguro": "Satterfield LLC",
      "segure numebr": "2956874047",
      "BRAND": "Toyota",
      "MODEL": "Corolla",
      "YEAR": 2000,
      "COLOR": "Turquoise"
    },
    {
      "placa": "3424987972",
      "numero economico": "6218625621",
      "vim": "1G4GB5GR1FF371986",
      "asientos": 33,
      "seguro": "Senger, Halvorson and Osinski",
      "segure numebr": "0473658291",
      "BRAND": "Volkswagen",
      "MODEL": "New Beetle",
      "YEAR": 2006,
      "COLOR": "Purple"
    },
    {
      "placa": "4288630894",
      "numero economico": "3835112163",
      "vim": "WAULK98K59A115022",
      "asientos": 36,
      "seguro": "Mohr, Kshlerin and Jacobs",
      "segure numebr": "2059195268",
      "BRAND": "Mercedes-Benz",
      "MODEL": "600SEL",
      "YEAR": 1993,
      "COLOR": "Crimson"
    },
    {
      "placa": "1612394655",
      "numero economico": "7628288529",
      "vim": "1GYEK63N25R033573",
      "asientos": 18,
      "seguro": "Macejkovic-Balistreri",
      "segure numebr": "0533933145",
      "BRAND": "Ford",
      "MODEL": "Ranger",
      "YEAR": 2006,
      "COLOR": "Puce"
    },
    {
      "placa": "9288593616",
      "numero economico": "0848208285",
      "vim": "KMHGH4JHXCU653513",
      "asientos": 26,
      "seguro": "Gorczany LLC",
      "segure numebr": "4109023823",
      "BRAND": "Jaguar",
      "MODEL": "X-Type",
      "YEAR": 2007,
      "COLOR": "Mauv"
    },
    {
      "placa": "0305716832",
      "numero economico": "8823779618",
      "vim": "2G4WC562851002190",
      "asientos": 32,
      "seguro": "Dicki, Brakus and Ondricka",
      "segure numebr": "8819802384",
      "BRAND": "Pontiac",
      "MODEL": "Trans Sport",
      "YEAR": 1991,
      "COLOR": "Puce"
    },
    {
      "placa": "2716983097",
      "numero economico": "6069335007",
      "vim": "4A31K5DF7CE515477",
      "asientos": 25,
      "seguro": "Wehner, Ward and Cassin",
      "segure numebr": "5361375497",
      "BRAND": "Chrysler",
      "MODEL": "Pacifica",
      "YEAR": 2006,
      "COLOR": "Turquoise"
    },
    {
      "placa": "7009114021",
      "numero economico": "3124184556",
      "vim": "5FNRL5H20EB043313",
      "asientos": 26,
      "seguro": "Schroeder Inc",
      "segure numebr": "1158190492",
      "BRAND": "Pontiac",
      "MODEL": "Grand Prix",
      "YEAR": 1962,
      "COLOR": "Puce"
    },
    {
      "placa": "5652645024",
      "numero economico": "6106702195",
      "vim": "WAUDH98E36A194439",
      "asientos": 32,
      "seguro": "Conn-Kuhic",
      "segure numebr": "2562257057",
      "BRAND": "Kia",
      "MODEL": "Rio",
      "YEAR": 2005,
      "COLOR": "Orange"
    },
    {
      "placa": "2493826256",
      "numero economico": "6024627750",
      "vim": "4T1BK1EB0EU637503",
      "asientos": 40,
      "seguro": "Buckridge-Larkin",
      "segure numebr": "9226007217",
      "BRAND": "Mitsubishi",
      "MODEL": "Truck",
      "YEAR": 1988,
      "COLOR": "Green"
    },
    {
      "placa": "7428051053",
      "numero economico": "7840363792",
      "vim": "5UXFG2C59CL160503",
      "asientos": 23,
      "seguro": "Johns LLC",
      "segure numebr": "3477130707",
      "BRAND": "Mitsubishi",
      "MODEL": "Truck",
      "YEAR": 1997,
      "COLOR": "Teal"
    },
    {
      "placa": "9823356246",
      "numero economico": "1646821246",
      "vim": "WBA5B1C56FG104650",
      "asientos": 16,
      "seguro": "Hermiston, Jenkins and Ward",
      "segure numebr": "9268858991",
      "BRAND": "Mitsubishi",
      "MODEL": "Truck",
      "YEAR": 2008,
      "COLOR": "Purple"
    },
    {
      "placa": "5912930289",
      "numero economico": "3875466136",
      "vim": "JTDZN3EU3E3906655",
      "asientos": 22,
      "seguro": "Brekke-Mraz",
      "segure numebr": "4056945527",
      "BRAND": "Toyota",
      "MODEL": "Prius",
      "YEAR": 2004,
      "COLOR": "Puce"
    },
    {
      "placa": "2319158685",
      "numero economico": "5167801583",
      "vim": "1G6AY5S39E0416673",
      "asientos": 20,
      "seguro": "Goodwin, Collins and Towne",
      "segure numebr": "8378518485",
      "BRAND": "Chevrolet",
      "MODEL": "2500",
      "YEAR": 1999,
      "COLOR": "Teal"
    },
    {
      "placa": "6184356623",
      "numero economico": "9218742000",
      "vim": "JM1DE1HY6B0532360",
      "asientos": 32,
      "seguro": "Kulas, Wuckert and Volkman",
      "segure numebr": "1061054357",
      "BRAND": "Dodge",
      "MODEL": "Nitro",
      "YEAR": 2010,
      "COLOR": "Crimson"
    },
    {
      "placa": "0647254530",
      "numero economico": "0402819241",
      "vim": "1G6DA1E38D0470390",
      "asientos": 25,
      "seguro": "Hauck-Ward",
      "segure numebr": "3388658153",
      "BRAND": "Chevrolet",
      "MODEL": "Cobalt",
      "YEAR": 2008,
      "COLOR": "Purple"
    },
    {
      "placa": "4441463065",
      "numero economico": "2351831101",
      "vim": "WBAEV53494K310979",
      "asientos": 31,
      "seguro": "Oberbrunner-Sipes",
      "segure numebr": "3043306074",
      "BRAND": "Mazda",
      "MODEL": "CX-9",
      "YEAR": 2010,
      "COLOR": "Green"
    }
  ]