import React from 'react'
import MyContext from '../../MyContext'
import Presentazione from './Presentazione/Presentazione'
import './daycard.css'
import Trasferimento from './Transferimento/Trasferimento';
import Pernottamento from './Pernottamento/Pernottamento';
import Attivita from './Attivita/Attivita';


export default function DayCard({boleano}) {

    const contesto = React.useContext(MyContext);
    console.log("Ciao sono il contesto della card", contesto);
    return (
        <>
            <MyContext.Provider value={{day:contesto.giorno.day, data: contesto.giorno.data}}>
            <Presentazione></Presentazione>
            </MyContext.Provider>
            <MyContext.Provider value={contesto.giorno.activities}>
                <Attivita>
                    
                </Attivita>
            </MyContext.Provider>
            <MyContext.Provider value ={contesto.giorno.transports}>
            {contesto.giorno.transports.length >0 && <Trasferimento></Trasferimento>}
            {/* se è vera la condizione a sx renderizza cio che a destra  */}
            </MyContext.Provider>
            <MyContext.Provider value={contesto.giorno.accomodations}>
               {(contesto.giorno.accomodations.length>0 && <Pernottamento boleano ={boleano} numeroGiorni = {contesto.numeroGiorni}></Pernottamento>) }
            </MyContext.Provider>
            
            
            
        </>
        
    )

}