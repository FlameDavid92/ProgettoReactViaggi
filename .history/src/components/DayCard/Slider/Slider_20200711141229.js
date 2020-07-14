import React from 'react'
import './slider.css'

export default function Slider({images}){
   
    return(
        

        <div className='row'>
            <div className='col-5'>
                <img className='sliderImgLg' src={images[0].image}></img>
            </div>
            <div className='col-5'>
            <img className='sliderImgLg' src={images[1].image}></img>
            </div>
            <div className='col-2'>
                <div className= 'row'>
                    <div className='col-12'>
                    <img className='sliderImgLg' src={images[2].image}></img>
                    </div>
                    <div  className='col-12'>
                        <div style = {{backgroundImage : `url('${images[3].image}')`}} className='hoverImg sliderImgLg'>
                            +{images.length-3}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}