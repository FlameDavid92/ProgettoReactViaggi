import React,{useState} from 'react';
import MyContext from '../../../MyContext';
import Slider from '../Slider/Slider';
import Modale from '../../Modale/Modale';
import * as utils from '../../../utils';

export default function Pernottamento({numeroGiorni, boleano }){
    const contesto = React.useContext(MyContext);
    const [modPernottamento, setModPernottamento]= useState(0);
    let numeroNotti = numeroGiorni-1;
    let titoloAccomodation = contesto[0].name +' '+contesto[0].stars;
    return(
        <>

        {boleano &&  contesto.map((acc,i)=>{

            return (
            <div className='row' key={i}>
                <div className='col-12'>
                <h2 >Pernottamento {numeroNotti } {((numeroNotti) >1)?'notti':'notte'} </h2>
                </div>
                <div className='col-7'>
                <div className='contain-image'>
                    <Slider images={acc.images}></Slider>
                </div>
                </div>
                <div className='col-5'>
                    <p>{acc.name} { (acc.stars.includes('Luxury')? acc.stars : acc.stars+'*')}</p>
                    <button className='btn btn-outline-primary'>{acc.places[0].name}</button>
                    <p>{acc.description}...<Link onClick={()=>utils.funzioneApriModale(setModPernottamento,modPernottamento)}>Scopri di più</Link></p>
                    <Modale click = {modPernottamento}></Modale>
                    <button onClick={()=>utils.funzioneApriModale(setModPernottamento,modPernottamento)} className='btn-outline-primary'>Click modale</button> 
                </div>
            </div>
            )
        } )}
        {!boleano && <div><p className='h3'>Ricordati che pernotti al {titoloAccomodation}</p></div>}
        </>
    )
}



/* 

0:
contact: {id: 42, phone: "095-1234567", email: "hotel@info.com", address: "Viale Kennedy 28, 95121 Catania", website: "www.hotel.it", …}
description: "Il Romano Palace Luxury Hotel offre un tranquillo giardino, un ristorante gastronomico, un'ampia piscina e camere eleganti."
descriptionRestaurant: "Il ristorante Coriandolo propone specialità classiche nazionali e siciliane, come pesce spada fresco, frutti di mare allo zafferano e caratteristici cannoli come dessert. Imperdibile la prima colazione, servita su una terrazza all'ultimo piano con vista sull'Etna e comprensiva anche di fragole e prosecco di ottima qualità"
descriptionRooms: "Le sistemazioni del Romano Palace sono arredate con vivaci tonalità mediterranee e mobili tradizionali, e sono provviste di connessione WiFi gratuita, balcone e TV LCD con canali Sky."
descriptionServices: "Piscina, Parcheggio, Connessione WiFi gratuita, Fronte spiaggia, Disponibilità di camere familiari, Bar"
id: 7
images: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
language: {id: 2, code: "it", name: "italiano", created_at: "2020-03-02 19:44:53", updated_at: "2020-03-02 19:44:53"}
name: "Romano Palace  Hotel"
places: [{…}]
position: "Sul lungomare a soli 5 minuti in auto dall'Aeroporto di Catania Fontanarossa"
stars: "5_Luxury"
tags: (2) [{…}, {…}]
typology: "Hotel"

*/