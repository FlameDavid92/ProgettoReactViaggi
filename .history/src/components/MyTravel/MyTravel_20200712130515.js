import React from 'react';
import LeafletMap from '../Leaflet/Leaflet';
import './mytravel.css';

export default function MyTravel(){
    return(
        <div className="mytravelDiv shadow bg-white">
            <LeafletMap></LeafletMap>
            <div>
                IL MIO VIAGGIO IN SICILIA
            </div>
        </div>
    )
}