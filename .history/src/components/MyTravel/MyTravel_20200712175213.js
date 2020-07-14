import React,{useContext} from 'react';
import LeafletMap from './LeafletMap/LeafletMap';
import MyContext from '../../MyContext';
import './mytravel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

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
                <p>&#129106; {`${numeroAdulti} adult${(numeroAdulti > 1) ? "i" : "o"}`} {(numeroBambini !== 0) &&(`${numeroBambini} bambin${(numeroBambini > 1) ? "i" : "o"}`)}</p>
            </div>
        </div>
    )
}