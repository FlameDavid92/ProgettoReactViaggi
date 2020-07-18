import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faCar, faTaxi, faBus } from '@fortawesome/free-solid-svg-icons'
import { arrayAssociativo } from '../../../utils';
import './dayline.css'


export default function Dayline({ giorno, attivita, transports, end }) {
    return (
        <>
            <div className="row h-100">
                <div className='col-12 text-white'>
                    <div className="day-circle">Day {giorno}</div>
                </div>
                {Array(attivita).fill(null).map(att => {
                    return <div className='col-12 activity-circle '><FontAwesomeIcon icon={faMapMarker}></FontAwesomeIcon></div>
                })}
                {transports.map(tr => {
                    return <div className='col-12 div-transport'><FontAwesomeIcon className={arrayAssociativo[tr.typology].classe + " transport-circle"} icon={arrayAssociativo[tr.typology].icon} /></div>
                })}
                {(!end) && (<div className='col-12 coda-timeline'></div>)}
            </div>
        </>
    )
}