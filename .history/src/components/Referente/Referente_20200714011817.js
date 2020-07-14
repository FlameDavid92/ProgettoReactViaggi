import React from 'react'
import MyContext from '../../MyContext'
import './referente.css'

const icona_azienda = "https://media-cdn.tripadvisor.com/media/photo-s/19/5e/9c/2c/this-is-our-business.jpg"

export default function Referente() {

    const contesto = React.useContext(MyContext);

    return (
        <div className="reference-card p-2">
            <div className="row">
                <div className='col-6'>
                    <div className="row">
                        <div className="col-6">
                            {/*<img className="icon-scheda" src={contesto.operator.image}></img>*/}
                        </div>
                        <div className="col-6 info-ref">
                            <p className="little">Il tuo referente è <span className="h6 orange-color">{contesto.operator.name}</span></p>
                            <br></br><br></br>
                            <p className="little">Tel: {contesto.operator.contact.phone}</p>
                            <p className="little">Email: {contesto.operator.contact.email}</p>
                        </div>
                    </div>
                    <div className="col-7 info-azienda">
                        <img className="icon-azienda" src={icona_azienda}></img>
                        <br></br>
                        <p className="little">{contesto.agency.name}</p>
                        <p className="little">{contesto.agency.contact.addres}</p>
                        <p className="little">{contesto.agency.contact.website}</p>
                    </div>

                </div>
            </div>
        </div>
    )

}