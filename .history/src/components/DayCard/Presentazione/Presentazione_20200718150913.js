import React from 'react';
import MyContext from '../../../MyContext';
import {getDayMonth} from '../../../utils';


export default function Presentazione() {
    const contesto = React.useContext(MyContext);
    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='color-orange title p-1'> {contesto.day.name}<span className=' color-grey subTitle p-1'>{getDayMonth(contesto.data)}</span></h1>
                    <img alt="immagine" className='img-cover' src={`${contesto.day.images[0].image}`} />
                    <p>{contesto.day.description}</p>
                </div>
            </div>

        </>
    )
}