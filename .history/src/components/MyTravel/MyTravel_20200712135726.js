import React,{useContext} from 'react';
import LeafletMap from '../Leaflet/Leaflet';
import MyContext from '../../MyContext';
import './mytravel.css';

export default function MyTravel(){
    const contesto = useContext(MyContext);
    return(
        <div className="mytravelDiv shadow bg-white m-4">
            <LeafletMap></LeafletMap>
            <div>
                <p className="h2 color-orange">IL MIO VIAGGIO IN SICILIA</p>
                <p>{contesto.nomiCitta.map((citta, i)=> citta+ (i<citta.length-1) && " > ")}</p>
                {/*-> dal al - -> n persone*/}
            </div>
        </div>
    )
}