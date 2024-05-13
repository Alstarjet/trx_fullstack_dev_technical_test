import { useEffect } from 'react'
import { Loader } from "@googlemaps/js-api-loader"
import type { markeVehicle } from '../interfaces/vehicle'
import type { FeatureCollection } from '../interfaces/consut'
import car from '../assets/car.png'
import consultGeoJson from '../scripts/consultGeoJson'
import './maps.css'
interface Maps {
    geoJson: FeatureCollection
    getLtLng: (lat: number, lng: number) => void
    marker: markeVehicle
}
interface FarthestPair {
    Firstlat: number
    Firstlng: number
    Secondlat: number
    Secondlng: number
}

function Maps({ geoJson, getLtLng, marker }: Maps) {
    let map: google.maps.Map
    useEffect(() => {
        const loader = new Loader({
            apiKey: import.meta.env.VITE_KEY_API_MAPS,
            version: "weekly",
        })

        loader.importLibrary("core").then(async () => {
            map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
                center: { lat: 19.410831522107316, lng: -99.13676996826173 },
                zoom: 11,
                styles: styleMap
            })
            map.addListener('click', (event: any) => {
                getLtLng(event.latLng.lat(), event.latLng.lng())
            })

            marker.marker = new google.maps.Marker({
                position: { lat: 19.46303, lng: -99.13049 },
                map: map,
                icon: car,
                visible: false
            });
            marker.info = new google.maps.InfoWindow({
                content: "contentString",
            });
            marker.marker.setZIndex(1000)

            marker.marker.addListener("click", () => {
                if (marker.info != null) {
                    marker.info.open({
                        anchor: marker.marker,
                        map,
                    });
                }
            });


        })
    })
    const ChangeZoom = (more: boolean) => {
        const currentZoom = map.getZoom()
        if (currentZoom) {
            if (more) {
                map.setZoom(currentZoom + 1)
            } else {
                map.setZoom(currentZoom - 1)
            }
        }
    }
    const loadGeoJson = async () => {
        try {
            const route = await consultGeoJson()
            const coordinate = extractCoordinates(route[0].geojson)
            const Farthest = findFarthestPairs(coordinate)
            map.data.addGeoJson(route[0].geojson)
            map.setCenter({ lat: ((Farthest.Firstlat + Farthest.Secondlat) / 2), lng: ((Farthest.Firstlng + Farthest.Secondlng) / 2) })
            let zoomCorrect = new google.maps.LatLngBounds()
            zoomCorrect.extend(new google.maps.LatLng(Farthest.Firstlat, Farthest.Firstlng))
            zoomCorrect.extend(new google.maps.LatLng(Farthest.Secondlat, Farthest.Secondlng))
            map.fitBounds(zoomCorrect)
            marker.coordinates = coordinate


        } catch (error) {
            alert("Problema al cargar la ruta")
            console.log(error)
        }
    }
    return (
        <div className='mapsView'>
            <div className='mapsButtons'>
                <button onClick={() => { loadGeoJson() }}>Cargar Ruta</button>
                <button onClick={() => { ChangeZoom(true) }}>Acercar</button>
                <button onClick={() => { ChangeZoom(false) }}>Alejar</button>
            </div>

            <div id='map'></div>

        </div>
    )
}

function extractCoordinates(featureCollection: FeatureCollection): [number, number][] {
    const coordinates: [number, number][] = []

    featureCollection.features.forEach(feature => {
        const coordinate = feature.geometry.coordinates
        if (Array.isArray(coordinate[0])) {
            coordinate.forEach(coordinatePair => {
                // @ts-ignore
                coordinates.push(coordinatePair)
            })
        } else {
            // @ts-ignore
            coordinates.push(coordinate)
        }
    })

    return coordinates
}



function findFarthestPairs(coordinates: number[][]): FarthestPair {
    let farthestPair: FarthestPair = {
        Firstlat: 0,
        Firstlng: 0,
        Secondlat: 0,
        Secondlng: 0,
    }
    let maxDistanceSquared = 0;

    for (let i = 0; i < coordinates.length; i++) {
        const [longitude1, latitude1] = coordinates[i];
        for (let j = i + 1; j < coordinates.length; j++) {
            const [longitude2, latitude2] = coordinates[j];
            // Calculate squared distance between two coordinates
            const distanceSquared = Math.pow(longitude2 - longitude1, 2) + Math.pow(latitude2 - latitude1, 2);
            // Update farthest pair if necessary
            if (distanceSquared > maxDistanceSquared) {
                maxDistanceSquared = distanceSquared;
                farthestPair = { Firstlng: longitude1, Firstlat: latitude1, Secondlng: longitude2, Secondlat: latitude2 };
            }
        }
    }
    return farthestPair;
}

const styleMap = [
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#9aafd0"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#86e4bb"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#e0feff"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]

export default Maps
