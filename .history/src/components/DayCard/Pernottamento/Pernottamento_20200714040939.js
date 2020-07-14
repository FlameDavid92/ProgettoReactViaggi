import React, { useState } from 'react';
import MyContext from '../../../MyContext';
import Slider from '../Slider/Slider';
import Modale from '../../Modale/Modale';
import { Link } from 'react-router-dom';
import * as utils from '../../../utils';

export default function Pernottamento({ numeroGiorni, boleano }) {
    const contesto = React.useContext(MyContext);
    const [modPernottamento, setModPernottamento] = useState(0);
    let numeroNotti = numeroGiorni - 1;
    let titoloAccomodation = contesto[0].name + ' ' + contesto[0].stars;
    return (
        <>

            {boleano && contesto.map((acc, i) => {

                return (
                    <div className='row' key={i}>
                        <div className='col-12'>
                            <h2 >Pernottamento {numeroNotti} {((numeroNotti) > 1) ? 'notti' : 'notte'} </h2>
                        </div>
                        <div className='col-7'>
                            <div className='contain-image'>
                                <Slider images={acc.images}></Slider>
                            </div>
                        </div>
                        <div className='col-5'>
                            <p>{acc.name} {(acc.stars.includes('Luxury') ? acc.stars : acc.stars + '*')}</p>
                            <button className='btn btn-outline-primary'>{acc.places[0].name}</button>
                            <p>{acc.description}..<Link onClick={() => utils.funzioneApriModale(setModPernottamento, modPernottamento)}>Scopri di più</Link></p>
                            <Modale click={modPernottamento}>
                                <Slider images={acc.images}></Slider>
                                <p>{acc.description}</p>
                            </Modale>
                        </div>
                    </div>
                )
            })}
            {!boleano && <div><p className='h3'>Ricordati che pernotti al {titoloAccomodation}</p></div>}
        </>
    )
}
