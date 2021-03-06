import React, { useState } from 'react';
import MyContext from '../../../MyContext';
import Slider from '../Slider/Slider';
import Modale from '../../Modale/Modale';
import { Link } from 'react-router-dom';
import * as utils from '../../../utils';

export default function Pernottamento({ numeroGiorni, booleano }) {
    const contesto = React.useContext(MyContext);
    const [modPernottamento, setModPernottamento] = useState(0);
    let numeroNotti = numeroGiorni - 1;
    let titoloAccomodation = contesto[0].name + ' ' + (contesto[0].stars.includes('Lux') ? contesto[0].stars.split('_')[0] + "*L" : contesto[0].stars + '*');
    return (
        <>
            {booleano && contesto.map((acc, i) => {
                return (
                    <div className='row' key={"accomodation" - i}>
                        <div className='col-12'>
                        <h2 className='title mycolor-grey'>Pernottamento {numeroNotti} {'nott' + ((numeroNotti > 1) ? 'i' : 'e')}</h2>
                        </div>
                        <div className='col-12 col-lg-7'>
                            <Slider apriModale={() => utils.funzioneApriModale(setModPernottamento, modPernottamento)} images={acc.images}></Slider>
                        </div>
                        <div className='col-12 col-lg-5'>
                            <p className="title mb-1">{titoloAccomodation}</p>
                            <button className='btn btn-outline-primary mb-1' disabled>{acc.places[0].name}</button>
                            <p className="text-small mycolor-grey"><span className='taglia-testo' >{acc.description}</span>
                                <Link className="d-inline" to="" onClick={() => utils.funzioneApriModale(setModPernottamento, modPernottamento)}>Scopri di più</Link>
                            </p>
                            <Modale click={modPernottamento}>
                                <div className="row">
                                    <div className="col-lg-8 offset-2">
                                        {/*<Slider images={acc.images}></Slider>/*/}
                                        <p>{acc.description}</p>
                                    </div>
                                </div>
                            </Modale>
                        </div>
                    </div>
                )
            })}
            {!booleano && <p className='title nomobile'><span className="mycolor-grey">Ricordati che pernotti al </span>
                {titoloAccomodation}</p>}
        </>
    )
}



