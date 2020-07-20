import React, { useState } from 'react';
import MyContext from '../../../MyContext';
import './attivita.css';
import Modale from '../../Modale/Modale';
import {Link} from 'react-router-dom';
import * as utils from '../../../utils';


export default function Attivita(){
    const [modAttivita, setModAttivita]= useState(0);
    const contesto = React.useContext(MyContext);
    return(
        <>
        { contesto.map((act, i )=>{
            return (         
            <div key = {"activity"-i} className='row'>
            <div className="col-2">
            <img alt="immagine" className='icon-attivita' src={act.images[0].image}></img>
            </div>
            <div className="col-10">
                <div className="row">
                    <div className="col-12">
                       <p className='title'>{act.name} </p> 
                    </div>
                    <div className="col-12">
                       <p><span className='taglia-testo color-text-grey text-small'> {act.description}...</span>                       <Link to="" onClick={()=>utils.funzioneApriModale(setModAttivita,modAttivita)}>Scopri di più</Link></p>
                       
                       <Modale click = {modAttivita}>
                       <div className="row">
                           {act.images.map((ele,i)=>{
                               return( <div className="col-4 ">
                                    <img className="img-modale-attivita p-3 " key={i} alt='imgxD' src ={ele.image}></img>
                               </div>
                                   )
                           })}
                       </div>
                          <div className="row">
                              <div className="col-12">

                            <p className='text-center  m-2 color-text-grey text-small '>{act.description}</p>
                              </div>
                          </div>
                       </Modale>
                    </div>
                </div>
            
            </div>
            </div>
            )
        }) }
        </>
        )
    }
    
    
    
    /* 
    
    contact: {id: 45, phone: "095-1234567", email: "attività@info.com", address: "via uno, 123456", website: "www.attività.it", …}
    description: "L’Opera dei Pupi è la rappresentazione del teatro di figura, tipica della Sicilia. I pupi sono le marionette del teatro epico-popolare. Non perdetevi questo momento tipicamente siciliano! Lo spettacolo è alle ore 18 presso la casa comunale, l'ingresso costa 30 euro"
    id: 5
    images: Array(1)
    0: {id: 141, image: "http://51.77.82.133:86/api/images/141/images/e0sTzCusGe4Q8ZL7.jpeg", image_name: null}
    length: 1
    __proto__: Array(0)
    language: {id: 2, code: "it", name: "italiano", created_at: "2020-03-02 19:44:53", updated_at: "2020-03-02 19:44:53"}
    name: "Opera dei pupi siciliani"
    places: [{…}]
    tags: [{…}]
    __proto__: Object
    length: 1
    __proto__: Array(0)
    
    
    */