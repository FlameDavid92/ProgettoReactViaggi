import React,{useContext} from 'react';
import LeafletMap from '../Leaflet/Leaflet';
import MyContext from '../../MyContext';
import './mytravel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

function getDateDalAl(dateFrom,dateTo){
    const nomiMesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
    "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
    let dataPartenza = new Date(dateFrom);
    let dataArrivo = new Date(dateTo);
    let annoPartenza = (dataPartenza.getFullYear() !== dataArrivo.getFullYear()) ? dataPartenza.getFullYear() : "";
    let mesePartenza = (dataPartenza.getMonth() !== dataArrivo.getMonth()) ? nomiMesi[dataPartenza.getMonth()] : "";
    return `dal ${dataPartenza.getDate()} ${mesePartenza} ${annoPartenza} al ${dataArrivo.getDate()} ${nomiMesi[dataArrivo.getMonth()]} ${dataArrivo.getFullYear()}`;
}

function calcolaNumAdultiBambini(partecipanti){
    const numeroAdulti = 0
    const numeroBambini = 0
    partecipanti.forEach( p => {
        p.type==="adulto" && (numeroAdulti++);
        p.type==="bambino" && (numeroBambini++);
    });
    return [numeroAdulti,numeroBambini];
}

export default function MyTravel(){
    const contesto = useContext(MyContext);
    //il numPartecipants nel json non ci dice se sono adulti o bambini quindi è meglio usare le info nell'array partecipants.
    const [numeroAdulti,numeroBambini] = calcolaNumAdultiBambini(contesto.partecipanti);
    return(
        <div className="mytravelDiv shadow bg-white m-4">
            <LeafletMap></LeafletMap>
            <div>
                <p className="h2 color-orange">IL MIO VIAGGIO IN SICILIA</p>
                <p>{contesto.nomiCitta.map( (citta, i) => citta + " > ") } {contesto.nomiCitta[0]}</p>
                <p>&#129106; {getDateDalAl(contesto.dateFrom,contesto.dateTo)}</p>
                <p>&#129106; {numeroAdulti} {numeroBambini}</p>
                {/*-> dal al - -> n persone*/}
            </div>
        </div>
    )
}