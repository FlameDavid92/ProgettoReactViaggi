import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './accordion.css'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import MyContext from '../MyContext'

function getDateDalAlNoYear(dateFrom,dateTo){
    const nomiMesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
    "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
    let dataPartenza = new Date(dateFrom);
    let dataArrivo = new Date(dateTo);
    let mesePartenza = (dataPartenza.getMonth() !== dataArrivo.getMonth()) ? " "+nomiMesi[dataPartenza.getMonth()] : "";
    return `dal ${dataPartenza.getDate()}${mesePartenza} al ${dataArrivo.getDate()} ${nomiMesi[dataArrivo.getMonth()]}`;
}

export default function Accordion({date, children}) {
    const contesto = React.useContext(MyContext);
    const [opened, setOpened] = useState(false)

    const toggleAccordion = () => {

        setOpened(!opened)
    }

    console.log("Ciao sono il contesto dell'accordion",contesto);

    return (
        <>
            {<div className="accordion m-4">
                <div className="title-accordion row">
                    <div className="d-flex align-items-center justify-content-between col-12 col-md-10 offset-md-1">
                        <p className="title m-0">{contesto.nome} {getDateDalAlNoYear(contesto.giorni[0].data, contesto.giorni[contesto.giorni.length-1].data)}</p>
                        <FontAwesomeIcon onClick={toggleAccordion} className="icon-arrow" rotation={(opened ? 180 : 0)} icon={faAngleDown} />
                    </div>
                </div>
                
                <>

                    <div className='separatore'> </div>
                    <div className="row">
                        <div className={`col-12 col-md-10 offset-md-1 body-accordion m-auto  ${opened ? 'open' : 'close'}  `}>
                            {(opened ? (
                                <div className="body-props">
                                    {
                                        children
                                    }
                                </div>
                            ) : '')}

                        </div>
                    </div>

                </>
            </div>

            }


        </>
    )
}