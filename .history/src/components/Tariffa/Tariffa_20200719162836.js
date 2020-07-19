import React from 'react';
import './tariffa.css';

export default function Tariffa({ dati }) {
    return (
        <div className="container-content">
            <div className="accordion__body mr-5">
                <div className="accordion__price black">
                    <div className="single__price">
                        <p className="mb-0">Prezzo a persona</p>
                        <p className="primary-color">1780,00 €</p>
                    </div>
                    <hr>
                        <div className="first__price d-flex">
                            <span>Persona 1 </span><span className="ml-auto secondary-color">1780,00 €</span>
                        </div>
                        <div className="second__price d-flex my-2">
                            <span>Persona 2 </span><span className="ml-auto secondary-color">1780,00 €</span>
                        </div>
                        <hr/>
                            <div className="total__price text-right">
                                <p className="mb-0">Totale</p>
                                <p className="primary-color">3560,00 €</p>
                            </div>
                            <div className="price__included secondary-color">
                                <p className="primary-color">Cosa Comprende il prezzo</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <p className="mb-0">Dolor sit orem ipsum dolor amet conseurem ipsum dolor adipisicing elit:</p>
                                <p className="mb-0">Dolor sit orem ipsum dolor amet conseurem ipsum olor sit orem ipsum dolor amet conseurem ipsum olor sit orem</p>
                                <p className="mb-0">Dolor sit orem ipsum dolor amet conseurem ipsum olor sit orem ipsum dolor amet conseurem ipsum olor sit orem</p>
                                <p>Dolor sit orem ipsum dolor amet conseurem ipsum olor sit orem ipsum dolor amet conseurem ipsum olor sit orem</p>
                            </div>
                            <div className="price__included secondary-color">
                                <p className="primary-color">Cosa Non Comprende il prezzo</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <p className="mb-0">Dolor sit orem ipsum dolor amet conseurem ipsum dolor adipisicing elit:</p>
                                <p className="mb-0">Dolor sit orem ipsum dolor amet conseurem ipsum olor sit orem ipsum dolor amet conseurem ipsum olor sit orem</p>
                                <p className="mb-0">Dolor sit orem ipsum dolor amet conseurem ipsum olor sit orem ipsum dolor amet conseurem ipsum olor sit orem</p>
                                <p>Dolor sit orem ipsum dolor amet conseurem ipsum olor sit orem ipsum dolor amet conseurem ipsum olor sit orem</p>
                            </div>
                </div>
            </div>
        </div>
    )
}




{/*<div className="row">
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
            </div>*/}