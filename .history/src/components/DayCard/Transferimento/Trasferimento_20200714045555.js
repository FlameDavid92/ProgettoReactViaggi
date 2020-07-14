import React,{useState} from 'react'
import MyContext from '../../../MyContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCar, faTaxi, faBus} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import Modale from '../../Modale/Modale';
import * as utils from '../../../utils';
import './trasferimento.css';


const arrayAssociativo = [];
arrayAssociativo ['auto_privata'] = {icon:faCar, classe : 'icon icon-car'}
arrayAssociativo['transfer']= {icon:faTaxi, classe : 'icon icon-taxi'}
arrayAssociativo['bus'] = {icon:faBus, classe : 'icon icon-bus'}

export default function Trasferimento(){
    const contesto = React.useContext(MyContext);
    const [modTrasferimento, setModTrasferimento]= useState(0);
    return( 
        <>
        { contesto.map((transfer,i)=>{
            return(
                <div className='row' key={i}>
                <div className='col-2'>
                <div className='wrappa'>
                <FontAwesomeIcon  className={arrayAssociativo[transfer.typology].classe}  icon={arrayAssociativo[transfer.typology].icon} />
                </div>
                </div>
                <div className='col-10'>
                <p  className='h4'>{transfer.name}</p>
                <p>{transfer.description}..<Link to="" onClick={()=>utils.funzioneApriModale(setModTrasferimento,modTrasferimento)}>Scopri di più</Link></p>
                <Modale click = {modTrasferimento}>
                    {/*MODALE trasferimento???*/}
                </Modale>
                <p>Da <span className=' btn btn-outline-primary disabled br'>{transfer.departure.name}</span></p>
                
                <p>a <span className=' btn btn-outline-primary disabled'>{transfer.arrival.name}</span></p>
                
                </div>
                </div>
                )
                
            }) 
        }
        
        </>
        
        )
        
    }