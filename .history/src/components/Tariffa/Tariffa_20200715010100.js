import React from 'react';

export default function Tariffa({dati}) {
    return (
        <div className="row">
            <div className="col-12 my-4">
                <h4>Prezzo a persona</h4>
                <span className='title orange-color '>{((dati.partecipants[0].price)).toFixed(2) + ' €'}</span>
                <div className='separatore mb-1'></div>


                {
                    dati.partecipants.map((ele, i) => {
                        return <div key={i} className='row justify-content-between'><div className="col-2"><p>{'Persona ' + (i + 1)}</p> </div>
                            <div className="col-2"><p>{(ele.price).toFixed(2) + '€'}</p></div></div>
                    })
                }
                <div className='separatore mb-1'></div>
                <div className="row justify-content-end">
                    <div className="col-2 p-0 mr-3 text-right">
                        <h4> Totale </h4>
                        <span className='title orange-color '>{((dati.priceTotal) / 100).toFixed(2) + '€'}</span>
                    </div>
                </div>
                <h4 className='title color-orange my-3'>COSA COMPRENDE IL PREZZO</h4>
                <p>{dati.included}</p>
                <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eos impedit sunt repudiandae dolorem. Quaerat, pariatur adipisci placeat vitae dolor explicabo enim in deserunt. Aperiam ipsa explicabo accusamus quis voluptatem.</p>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore asperiores voluptas temporibus dolores tempora impedit architecto fugiat aspernatur, maiores libero obcaecati nobis at consectetur accusamus reprehenderit dicta modi officiis consequatur.</p>
                <h4 className='title color-orange'>COSA NON COMPRENDE IL PREZZO</h4>
                <p>{dati.notIncluded}</p>
                <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eos impedit sunt repudiandae dolorem. Quaerat, pariatur adipisci placeat vitae dolor explicabo enim in deserunt. Aperiam ipsa explicabo accusamus quis voluptatem.</p>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore asperiores voluptas temporibus dolores tempora impedit architecto fugiat aspernatur, maiores libero obcaecati nobis at consectetur accusamus reprehenderit dicta modi officiis consequatur.</p>
            </div>
        </div>
    )
}