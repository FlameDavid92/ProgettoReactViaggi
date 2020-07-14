import React, { useContext } from 'react';
import LeafletMap from './LeafletMap/LeafletMap';
import MyContext from '../../MyContext';
import * as utils from '../../utils';

export default function MyTravel() {
    const contesto = useContext(MyContext);
    //il numPartecipants nel json non ci dice se sono adulti o bambini quindi è meglio usare le info nell'array partecipants.
    const [numeroAdulti, numeroBambini] = utils.calcolaNumAdultiBambini(contesto.partecipanti);
    return (
        <div className="border-radius-10 shadow bg-white m-4">
            <LeafletMap></LeafletMap>
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col">
                        <p className="mediumTitle mycolor-orange mb-0">IL MIO VIAGGIO IN SICILIA</p>
                        <p className="tinyText">{contesto.citta.map((citta, i) => {return <> {citta.nome} <span className="mycolor-grey">{">"}</span></>})} {contesto.citta[0].nome}</p>
                        <p>&#129106; {utils.getDateDalAl(contesto.dateFrom, contesto.dateTo)}</p>
                        <p>&#129106; {`${numeroAdulti} adult${(numeroAdulti > 1) ? "i" : "o"}`} {(numeroBambini !== 0) && (`${numeroBambini} bambin${(numeroBambini > 1) ? "i" : "o"}`)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}