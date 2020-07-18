import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faCar, faTaxi, faBus } from '@fortawesome/free-solid-svg-icons'
import { arrayAssociativo } from '../../../utils';
import './dayline.css'


export default function Dayline({ giorno, attivita, transports, end }) {
    return (
        <>
            <div className="row h-100 justify-content-center">
                <div className="col-12 text-center">
                    <div className="row flex-column justify-content-center text-center">
                        <div className="col-2">
                            <div className="day-circle text-white tinyText">DAY <span className="largeText">{giorno}</span></div>
                        </div>


                        {Array(attivita).fill(null).map(att => {
                            return <div className='col-2 text-center'>
                                <div className="activity-circle"><FontAwesomeIcon icon={faMapMarker} /></div></div>
                        })}
                        {transports.map(tr => {
                            return <div className='col-2 text-center'>
                                <div className="div-transport">
                                    <FontAwesomeIcon className={arrayAssociativo[tr.typology].classe + " transport-circle"} icon={arrayAssociativo[tr.typology].icon} />
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                {(!end) && (<div className='col-1 h-100 p-0 pl-1'><div className="coda-timeline" /></div>)}
            </div>
        </>
    )
}