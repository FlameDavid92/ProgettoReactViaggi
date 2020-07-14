import React from 'react'
import MyContext from '../../../../MyContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCar, faTaxi, faBus} from '@fortawesome/free-solid-svg-icons'
import './trasferimento.css'


const arrayAssociativo = [];
arrayAssociativo ['auto_privata']= {icon:faCar, classe : 'icon icon-car'}
arrayAssociativo['transfer']= {icon:faTaxi, classe : 'icon icon-taxi'}
arrayAssociativo['bus'] = {icon:faBus, classe : 'icon icon-bus'}
//console.log(arrayAssociativo)


export default function Trasferimento(){
    const contesto = React.useContext(MyContext);
    console.log('ciao sono trasferimento  ', contesto)
    console.log(arrayAssociativo)
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
                <p>{transfer.description}</p>
                <p>Da <span className=' btn btn-outline-primary br'>{transfer.departure.name}</span></p>
                
                <p>a <span className=' btn btn-outline-primary'>{transfer.arrival.name}</span></p>
                
                </div>
                </div>
                )
                
            }) 
        }
        
        </>
        
        )
        
    }