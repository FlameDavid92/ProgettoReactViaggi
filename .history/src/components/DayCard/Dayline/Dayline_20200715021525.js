import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faCar, faTaxi, faBus } from '@fortawesome/free-solid-svg-icons'
import './dayline.css'

const arrayAssociativo = [];
arrayAssociativo['auto_privata'] = {icon:faCar, classe : 'icon icon-car'}
arrayAssociativo['transfer'] = {icon:faTaxi, classe : 'icon icon-taxi'}
arrayAssociativo['bus'] = {icon:faBus, classe : 'icon icon-bus'}

export default function Dayline({giorno,attivita,transports,end}) {
    return (
        <>
            <div className="row">
                <div className='col-12 day-circle text-white'>Day</div>
                {Array(attivita).fill(null).map(att=>{
                    return <div className='col-12 activity-circle '><FontAwesomeIcon icon={faMapMarker}></FontAwesomeIcon></div>
                })}
                {Array(transports).fill(null).map(att=>{
                    return <div className='col-12 trasport-circle '><FontAwesomeIcon icon={faMapMarker}></FontAwesomeIcon></div>
                })}
                {(!end) && (<div className='col-12 coda-timeline '></div>)}
            </div>
        </>
    )
}