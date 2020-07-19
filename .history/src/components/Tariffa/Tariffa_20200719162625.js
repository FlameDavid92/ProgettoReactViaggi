import React from 'react';
import './tariffa.css';

export default function Tariffa({dati}) {
    return (
        <div class="container-content">
            <div class="accordion__body mr-5">
                <div class="accordion__price black">
                    <div class="single__price">
                        <p class="mb-0">Prezzo a persona</p>
                        <p class="primary-color">1780,00 €</p>
                    </div>
                    <hr>
                    <div class="first__price d-flex">
                        <span>Persona 1 </span><span class="ml-auto secondary-color">1780,00 €</span>
                    </div>
                    <div class="second__price d-flex my-2">
                        <span>Persona 2 </span><span class="ml-auto secondary-color">1780,00 €</span>
                    </div>
                    <hr>
                    <div class="total__price text-right">
                        <p class="mb-0">Totale</p>
                        <p class="primary-color">3560,00 €</p>
                    </div>
                    <div class="price__included secondary-color">
                        <p class="primary-color">Cosa Comprende il prezzo</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p class="mb-0">Dolor sit orem ipsum dolor amet conseurem ipsum dolor adipisicing elit:</p>
                        <p class="mb-0">Dolor sit orem ipsum dolor amet conseurem ipsum olor sit orem ipsum dolor amet conseurem ipsum olor sit orem</p>
                        <p class="mb-0">Dolor sit orem ipsum dolor amet conseurem ipsum olor sit orem ipsum dolor amet conseurem ipsum olor sit orem</p>
                        <p>Dolor sit orem ipsum dolor amet conseurem ipsum olor sit orem ipsum dolor amet conseurem ipsum olor sit orem</p>
                    </div>
                    <div class="price__included secondary-color">
                        <p class="primary-color">Cosa Non Comprende il prezzo</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p class="mb-0">Dolor sit orem ipsum dolor amet conseurem ipsum dolor adipisicing elit:</p>
                        <p class="mb-0">Dolor sit orem ipsum dolor amet conseurem ipsum olor sit orem ipsum dolor amet conseurem ipsum olor sit orem</p>
                        <p class="mb-0">Dolor sit orem ipsum dolor amet conseurem ipsum olor sit orem ipsum dolor amet conseurem ipsum olor sit orem</p>
                        <p>Dolor sit orem ipsum dolor amet conseurem ipsum olor sit orem ipsum dolor amet conseurem ipsum olor sit orem</p>
                    </div>
                </div>
            </div>
        </div>
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