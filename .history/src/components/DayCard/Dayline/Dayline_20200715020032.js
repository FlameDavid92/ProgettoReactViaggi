import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import './dayline.css'
export default function Dayline({ bordo }) {

    return (
        <>
            <div className="row">
                <div className='col-12 day-circle '><FontAwesomeIcon icon={faMapMarker}></FontAwesomeIcon></div>
                <div className='col-12 activity-circle '><FontAwesomeIcon icon={faMapMarker}></FontAwesomeIcon></div>
                <div className='col-12 trasport-circle '><FontAwesomeIcon icon={faMapMarker}></FontAwesomeIcon></div>
                {
                    bordo &&
                    (<div className='col-12 coda-timeline '></div>)
                }
            </div>
        </>
    )
}