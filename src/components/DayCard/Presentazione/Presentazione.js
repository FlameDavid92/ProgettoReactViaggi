import React from 'react';
import MyContext from '../../../MyContext';
import {getDayMonth} from '../../../utils';


export default function Presentazione() {
    const contesto = React.useContext(MyContext);
    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='color-orange title p-1'> {contesto.day.name}<span className=' color-grey subTitle p-1'>{"  "+getDayMonth(contesto.data)}</span></h1>
                    <img alt="immagine" className='img-cover' src={`${contesto.day.images[0].image}`} />
                    <div className='div-presentazione'>
                    <p className="text-presentazione color-text-grey my-3">{contesto.day.description}</p>
                    <p className="text-presentazione color-text-grey my-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, odit! Quasi a nobis sed eaque veritatis expedita earum ipsum saepe tempora mollitia, harum obcaecati commodi sit ullam. Magnam, quod facilis.</p>

                    </div>
                </div>
            </div>

        </>
    )
}