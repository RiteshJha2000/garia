import React from 'react'
import "./CarsAction.css"

export default function CarsAction() {
  return (
    <div className='carsaction'>
        <div className="action-top">
            <h1>CARS IN ACTION</h1>
            <p>Inspired by Danish design and a passion for automobiles. A Garia unifies the convenience of a golf and leisure car with unrivaled attention to luxury, quality, and aesthetics. Get an authentic glimpse of who we are and what customers are doing with their Garias. Enjoy our cars in action.</p>
        </div>
        <div className="action-down">
            <div className="action-left">
                <img src="https://www.garia.com/assets/Page-Images/_resampled/ScaleWidthWyIxMDI0Il0/IMG-1829-zz.jpg" alt="" />
                <h2>THE GARIA MANSORY PRISM IS A ONE-OF-A-KIND GARIA SPECIAL EDITION</h2>
                <p>The Garia Prism boasts acceleration wizardry of 0 40 km/h (25mph) in less than two seconds, thanks to Samsung Lithium Batteries and an upgraded Curtis Controller made in collaboration with the German Bugatti supplier, Kussmaul.</p>
            </div>
            <div className="action-right">
                <div className="right1">
                    <div>
                    <img src="https://www.garia.com/assets/Page-Images/_resampled/CroppedFocusedImageWzYwMCw1MjMsIngiLDE4NF0/ScaleWidthWyIzMjAiXQ/IMG-1431-aa-aly.jpg" alt="" className='img1' />
                    </div>
                    <div className='right1-info'>
                    <h3>New OFF-X Lifted</h3>
                    <p>New Garia OFF-X Lifted. Same luxury - tougher look.</p>
                    </div>
                </div>
                <div className="right1">
                    <div>
                    <img src="https://www.garia.com/assets/Page-Images/_resampled/CroppedFocusedImageWzYwMCw1MjMsIngiLDE2NF0/ScaleWidthWyIzMjAiXQ/lithium-battery-for-golf-buggies-.png" alt="" className='img2'/>
                    </div>
                    <div className='right1-info'>
                    <h3>What is the best battery choice for a street-legal golf car?</h3>
                    <p>When it comes to electric golf carts, it’s important to understand the main differences between lead-acid and lithium batteries before updating or purchasing a new golf car. </p>
                    </div>
                </div>
                <div className="right1">
                    <div>
                    <img src="https://www.garia.com/assets/Page-Images/_resampled/CroppedFocusedImageWzYwMCw1MjMsIngiLDkyXQ/ScaleWidthWyIzMjAiXQ/cars-in-action-lago-article-image.jpg" alt="" className='img3'/>
                    </div>
                    <div className='right1-info'>
                    <h3>Garia golf car at Quinta do lago</h3>
                    <p>Quinta do Lago: with three breathtaking golf courses and so much more, including activities to entertain the entire family.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
