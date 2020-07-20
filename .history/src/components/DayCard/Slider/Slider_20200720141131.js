import React from 'react'
import './slider.css'

export default function Slider({ images }) {
    /*Attenzione se nell'array è presente una sola immagine, due o solo tre*/
    return (
        <div className='row '>
            <div className="col-12 col-lg-5 ">
                <img alt="immagine" className='img-medium' src={images[0].image}></img>
            </div>
            <div className='col-12 col-lg-5   '>
                <img alt="immagine" className='img-medium' src={images[1].image}></img>
            </div>
            <div className='col-6 col-lg-2 d-flex flex-column p-0'>
                <img alt="immagine" className='img-tiny  mb-auto' src={images[2].image}></img>
                <div style={{ backgroundImage: `url('${images[1].image}')` }} className=' img-tiny text-center  cover '>
                    <div className='hoverImg d-flex flex-column '>
                        <span className='my-auto length '>+{images.length - 3}</span>

                    </div>
                </div>
            </div>
        </div>
    )
}




/*


<!-- Accordion Content Gallery-->
                    <div class="row accordion__gallery pl-0">
                        <div class="col-12">
                            <p class="reminder mt-3">
                                Pernottamento 1 notte
                            </p>
                        </div>
                        <div class="col-12 col-md-7">
                            <div class="row">
                                <div class="col-6 col-md-5 mb-2 pm-l ">
                                    <img class="img-fluid" src="https://source.unsplash.com/random/800x800" alt="">
                                </div>
                                <div class="col-6 col-md-5 mb-2 pm-r">
                                    <img class="img-fluid" src="https://source.unsplash.com/random/800x800" alt="">
                                </div>
                                <div class="col-12 col-md-2 d-flex flex-column p-0">
                                    <img class="img-fluid mb-auto" src="https://source.unsplash.com/random/800x800" alt="">
                                    <div class="accordion__gallery__pics text-center my-2">
                                        <div class="accordion__gallery__pics__filter filter d-flex flex-column">
                                            <span class="text-white my-auto">+10</span>
                                        </div>
                                        <img class="img-fluid" src="https://source.unsplash.com/random/800x800" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col accordion__gallery__description mx-2">
                            <div class="h5 title">
                                Best Western Hotel Mediterraneo 4*
                            </div>
                            <button class="btn btn-outline-primary btn-outline-primary-this mb-4">Catania</button>
                            <div class="accordion__gallery__description__body">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Laborum ratione autem ex exercitationem possimus tempora recusandae.
                                </p>
                                <p>
                                    Quidem necessitatibus atulos soluta dolores serolod tenetur, aperiam itaque mustron nasvol nostrum...
                                    <a href=""><span class="more"> Scopri di più</span></a>
                                </p>
                            </div>
                        </div>
                    </div>


*/