import React, { useState } from 'react'
import Dataslider from './Dataslider'
import Datacard from './Datacard'
import BtnSlider from './BtnSlider'
import "./Details.css"

export default function Details() {

    // const [slideIndex, setSlideIndex] = useState(1)

    // const nextSlide = () => {
    //     if(slideIndex !== Dataslider.length){
    //         setSlideIndex(slideIndex + 1)
    //     } 
    //     else if (slideIndex === Dataslider.length){
    //         setSlideIndex(1)
    //     }
    // }

    // const prevSlide = () => {
    //     if(slideIndex !== 1){
    //         setSlideIndex(slideIndex - 1)
    //     }
    //     else if (slideIndex === 1){
    //         setSlideIndex(Dataslider.length)
    //     }
    // }

    // const moveDot = index => {
    //     setSlideIndex(index)
    // }

    // let box = document.querySelector('.product-container');

    // const btnpressprev = () => {
    //     let width = box.clientWidth;
    //     box.scrollLeft = box.scrollLeft - width;
    //     console.log(width)
    // }

    // const btnpressnext = () => {
    //     let width = box.clientWidth;
    //     box.scrollLeft = box.scrollLeft + width;
    //     console.log(width)
    // }

  return (
    <div className='details'>
        <div className="details-info">
            <h2>IT'S IN THE DETAILS</h2>
        </div>
        {/* <div className="slider">
            {Dataslider.map((ele,index)=>{
                return <div key={ele.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                        <Datacard title={ele.title} desc={ele.desc} img={ele.img}/>
                    </div>
            })}

            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 5}).map((ele,index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div> */}
        
    </div>
  )
}
