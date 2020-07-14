import React,{useContext} from 'react';
import LeafletMap from '../Leaflet/Leaflet';
import MyContext from '../../MyContext';
import './mytravel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

export default function MyTravel(){
    const nomiMesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
    "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
    const contesto = useContext(MyContext);
    let dataPartenza = new Date(contesto.dateFrom);
    let dataArrivo = new Date(contesto.dateTo);
    let annoPartenza = (dataPartenza.getFullYear() !== dataArrivo.getFullYear()) ? dataPartenza.getFullYear() : "";
    let mesePartenza = (dataPartenza.getMonth() !== dataArrivo.getMonth()) ? nomiMesi[dataPartenza.getMonth()] : "";

    return(
        <div className="mytravelDiv shadow bg-white m-4">
            <LeafletMap></LeafletMap>
            <div>
                <p className="h2 color-orange">IL MIO VIAGGIO IN SICILIA</p>
                <p>{contesto.nomiCitta.map( (citta, i) => citta + " > ") } {contesto.nomiCitta[0]}</p>
                <p>&#129106; dal {dataPartenza.getDate() + } al {}</p>
                <p>&#129106;</p>
                {/*-> dal al - -> n persone*/}
            </div>
        </div>
    )
}