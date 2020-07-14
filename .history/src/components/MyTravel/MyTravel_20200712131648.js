import React from 'react';
import LeafletMap from '../Leaflet/Leaflet';
import './mytravel.css';

export default function MyTravel(){
    return(
        <div className="mytravelDiv shadow bg-white m-4">
            <LeafletMap></LeafletMap>
            <div>
                IL MIO VIAGGIO IN SICILIA
                {/*tappe - -> dal al - -> n persone*/}
            </div>
        </div>
    )
}