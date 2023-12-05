import React from 'react'
import "./Story.css"

export default function Story() {
  return (
    <div className='story'>
        <div className="top-story">
            <div className="top-img">
                <img src="https://www.garia.com/assets/Uploads/_resampled/CroppedFocusedImageWzQ5MCwzNDMsIngiLDEyXQ/our-story-image-1.jpg" alt="" />
            </div>
            <div className="top-info">
                <div className="h"><h1>OUR STORY</h1></div>
                <div className="desc">
                    <p>Garia is a privately held company that was founded in 2005. We are headquartered in Denmark, with a subsidiary in the U.S.</p>
                    <p>The Garia golf Car is the world's first and only true luxury golf and leisure car.</p>
                </div>
                <div>
                    <button type="button" className="btn3 ">Learn More</button>
                </div>
            </div>
        </div>
        <div className="bottom-story">
            <div className="vision">
                <img src="https://www.garia.com/assets/Uploads/_resampled/CroppedFocusedImageWzcwMCwzNjAsInkiLDUzXQ/our-story-image-2.jpg" alt="" />
                <div className="bot-txt">
                    <h1>THE VISION</h1>
                    <p>Create the ultimate golf and leisure vehicles.</p>
                    <h1>THE MISSION</h1>
                    <p>Improve your day. We deliver a Golf cart, that feels like a car, matches your lifestyle, and adds joy and contentment to your daily drive.</p>
                </div>
            </div>
            <div className="bot-img">
                <img src="https://www.garia.com/assets/Uploads/_resampled/CroppedFocusedImageWzgwNCw1NjcsIngiLDIzXQ/our-story-image-3.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}
