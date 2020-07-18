import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faCar, faTaxi, faBus } from '@fortawesome/free-solid-svg-icons'
import { arrayAssociativo } from '../../../utils';
import './dayline.css'


export default function Dayline({ giorno, attivita, transports, end }) {
    return (
        <>
            <div className="row h-100">
                <div className='col-12 text-center'>
                    <div className="day-circle text-white tinyText">DAY <span className="largeText">{giorno}</span></div>
                </div>
                {Array(attivita).fill(null).map(att => {
                    return <div className='col-12 text-center'>
                        <div className="activity-circle"><FontAwesomeIcon icon={faMapMarker} /></div></div>
                })}
                {transports.map(tr => {
                    return <div className='col-12 text-center'>
                        <div className="div-transport">
                            <FontAwesomeIcon className={arrayAssociativo[tr.typology].classe + " transport-circle"} icon={arrayAssociativo[tr.typology].icon} />
                        </div>
                    </div>
                })}
                {(!end) && (<div className='col-10 coda-timeline'>

                </div>)}
            </div>
        </>
    )
}