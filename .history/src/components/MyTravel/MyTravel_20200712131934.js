import React from 'react';
import LeafletMap from '../Leaflet/Leaflet';
import './mytravel.css';

export default function MyTravel(){
    return(
        <div className="mytravelDiv shadow bg-white m-4">
            <LeafletMap></LeafletMap>
            <div>
                <p className="h2 color-orange">IL MIO VIAGGIO IN SICILIA</p>
                <p>{/*citta*/}</p>
                {/*tappe - -> dal al - -> n persone*/}
            </div>
        </div>
    )
}