import React from 'react'
import MyContext from '../../../MyContext'


export default function Presentazione() {
    const contesto = React.useContext(MyContext);
    console.log("Ciao sono il contesto di Presentazione", contesto);
    return ( //contesto.images.image[0]
        <>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='color-orange title p-1'> {contesto.day.name}<span className=' color-grey subTitle p-1'>{contesto.data}</span></h1>
                    <img className='img-cover' src={`${contesto.day.images[0].image}`} />
                    <p>{contesto.day.description}</p>
                </div>
            </div>

        </>
    )
}