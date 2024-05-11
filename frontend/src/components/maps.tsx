import { useEffect } from 'react'
import { Loader } from "@googlemaps/js-api-loader"
import type { FeatureCollection, markeVehicle } from '../interfaces/vehicle'
import car from '../assets/car.png'

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
        const coordinate = extractCoordinates(geoJson)
        const Farthest = findFarthestPairs(coordinate)
        const loader = new Loader({
            apiKey: import.meta.env.VITE_KEY_API_MAPS,
            version: "weekly",
        })

        loader.importLibrary("core").then(async () => {
            map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
                center: { lat: ((Farthest.Firstlat + Farthest.Secondlat) / 2), lng: ((Farthest.Firstlng + Farthest.Secondlng) / 2) },
                zoom: 8,
                styles: styleMap
            })

            map.data.addGeoJson(geoJson)
            map.addListener('click', (event: any) => {
                getLtLng(event.latLng.lat(), event.latLng.lng())
            })
            let zoomCorrect = new google.maps.LatLngBounds()
            zoomCorrect.extend(new google.maps.LatLng(Farthest.Firstlat, Farthest.Firstlng))
            zoomCorrect.extend(new google.maps.LatLng(Farthest.Secondlat, Farthest.Secondlng))
            map.fitBounds(zoomCorrect)
            marker.marker = new google.maps.Marker({
                position: { lat: 19.46303, lng: -99.13049 },
                map: map,
                icon: car
            });
            marker.coordinates = coordinate
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
    return (
        <div className='fullView'>
            <button onClick={() => { ChangeZoom(true) }}>Acercar</button>
            <button onClick={() => { ChangeZoom(false) }}>Alejar</button>
            <div id='map'></div>

        </div>
    )
}

export default Maps
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
/*
function mapDistance(c:FarthestPair): number {
    console.log(18 Math.exp(0.05435206803793873 / 0.2))
    return Math.sqrt(Math.pow((19.487956289081332 - 19.464368260499977), 2) + Math.pow((-99.1467048704529 - (-99.12189980148317)), 2));

    //return Math.sqrt(Math.pow((c.Firstlat - c.Secondlat), 2) + Math.pow((c.Firstlng - c.Secondlng), 2));
}*/
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

