import React,{useContext} from 'react';
import LeafletMap from '../Leaflet/Leaflet';
import MyContext from '../../MyContext';
import './mytravel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

export default function MyTravel(){
    const contesto = useContext(MyContext);
    let giornoPartenza = new Date(contesto.dateFrom);
    let giornoArrivo = new Date(contesto.dateTo);
    return(
        <div className="mytravelDiv shadow bg-white m-4">
            <LeafletMap></LeafletMap>
            <div>
                <p className="h2 color-orange">IL MIO VIAGGIO IN SICILIA</p>
                <p>{contesto.nomiCitta.map( (citta, i) => citta + " > ") } {contesto.nomiCitta[0]}</p>
                <p>&#129106; dal {} al {}</p>
                <p>&#129106;</p>
                {/*-> dal al - -> n persone*/}
            </div>
        </div>
    )
}