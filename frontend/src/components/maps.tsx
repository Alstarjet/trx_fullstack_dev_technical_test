import { useEffect } from 'react'
import { Loader } from "@googlemaps/js-api-loader"

interface Maps{
    geoJson:object
    getLtLng:(lat:number,lng:number)=>void
}


function Maps({geoJson,getLtLng}:Maps) {
    useEffect(() => {
        const loader = new Loader({
            apiKey: import.meta.env.VITE_KEY_API_MAPS,
            version: "weekly",
        });

        loader.importLibrary("core").then(async () => {
            let map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
                center: { lat: 19.4072, lng: -99.14435 },
                zoom: 15,
            });

            map.data.addGeoJson( geoJson)
            map.addListener('click', (event: any) => {
                getLtLng(event.latLng.lat(),event.latLng.lng())
            })

        });
    })
    return (
        <div id='map'></div>
    )
}

export default Maps

