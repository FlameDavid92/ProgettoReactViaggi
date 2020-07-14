import React from 'react';
import LeafletMap from '../Leaflet/Leaflet';
import './mytravel.css';

export default function MyTravel(){
    return(
        <div className="mytravelDiv shadow bg-white m-4">
            <LeafletMap></LeafletMap>
            <div className>
                IL MIO VIAGGIO IN SICILIA
            </div>
        </div>
    )
}