import React from 'react'
import MyContext from '../../MyContext'
import './referente.css'

export default function Referente() {

    const contesto = React.useContext(MyContext);
    const iconaAzienda = "https://media-cdn.tripadvisor.com/media/photo-s/19/5e/9c/2c/this-is-our-business.jpg"
    return (
        <div className="reference-card shadow p-4 mb-4">
            <div className="row align-items-center">
                <div className='col-5'>
                    <div className="row align-items-center justify-content-end">
                        <div className="col-4">
                            <img className="tiny-img" src={contesto.operator.image}></img>
                        </div>
                        <div className="col-4">
                            <p className="little">Il tuo referente è <span className="h6 orange-color">{contesto.operator.name}</span>
                            <br/><br/>
                            <span className="little">Tel: {contesto.operator.contact.phone}</span><br/>
                            <span className="little">Email: {contesto.operator.contact.email}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hidden-xs col-1 separatore-card"></div>
                <div className="col-6  info-azienda">
                    <img className="tiny-icon" src={iconaAzienda}></img>
                    <br></br>
                    <p className="little">
                        {contesto.agency.name}<br/>
                        {contesto.agency.contact.address}<br/>
                        {contesto.agency.contact.website}
                    </p>
                </div>
            </div>
        </div>
    )

}