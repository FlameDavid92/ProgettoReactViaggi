import React from 'react'
import './slider.css'

export default function Slider({images}){
   
    return(
        

        <div className='row '>
            <div className='col-4 mx-2'>
                <img alt="immagine" className='medium-img ' src={images[0].image}></img>
            </div>
            <div className='col-4 mx-2'>
            <img alt="immagine" className='medium-img ' src={images[1].image}></img>
            </div>
            <div className='col-2'>
                <div className= 'row h-100 align-items-self'>
                    <div className='col-12 text-center'>
                    <img alt="immagine" className='sliderImgLg mt-0 ' src={images[2].image}></img>
                    </div>
                    <div  className='col-12 text-center  '>
                        <div style = {{backgroundImage : `url('${images[1].image}')`}} className=' sliderImgLg text-center  cover '>
                            <div className='hoverImg d-flex flex-column '>
                            <span className='my-auto length '>+{images.length-3}</span>
                            
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}