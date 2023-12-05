import { useState } from "react";
import "./Ride.css";

export default function Ride() {

    const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="ride">
      <div className="find">
        <h1>FIND YOUR RIDE</h1>
        <p>
          The convenience of a golf and leisure car with unrivaled attention to
          luxury, quality, and aesthetics.
        </p>
      </div>
      <div className="container1">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Golf Car
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Street Legal
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Courtesy
          </button>
          <button
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            Supersport
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <div className="content1">
            <div className="content-img">
                <img src="https://www.garia.com/assets/Uploads/_resampled/ScaleWidthWyI2NDAiXQ/models-golf.png" alt="" />
            </div>
            <div className="content-info">
            <h2>GOLF CAR</h2>
            
            <p>
                A unique combination of performance, versatility, and elegance. The Garia Golf Car is the ideal luxury vehicle for playing golf.
            </p>
            <button type="button" className="btn4 btn-primary">Discover More</button>
            </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <div className="content1">
            <div className="content-img">
                <img src="https://www.garia.com/assets/Uploads/_resampled/ScaleWidthWyI2NDAiXQ/models-street-legal.png" alt="" />
            </div>
            <div className="content-info">
            <h2>STREET LEGAL</h2>
            
            <p>
            The Garia Monaco (EU) or Garia Via (U.S.) is the ideal luxury vehicle for golf, leisure, and street use. Take the Garia straight from the golf course to your favorite shop or cafe.
            </p>
            <button type="button" className="btn4 btn-primary">Discover More</button>
            </div>
            </div>
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <div className="content1">
            <div className="content-img">
                <img src="https://www.garia.com/assets/Uploads/_resampled/ScaleWidthWyI2NDAiXQ/models-courtesy.png" alt="" />
            </div>
            <div className="content-info">
            <h2>COURTESY</h2>
            
            <p>
            The Garia Courtesy is a multi-functional vehicle, the ideal vehicle to transport you and your guests around private areas in style.
            </p>
            <button type="button" className="btn4 btn-primary">Discover More</button>
            </div>
            </div>
          </div>

          <div
            className={
              toggleState === 4 ? "content  active-content" : "content"
            }
          >
            <div className="content1">
            <div className="content-img">
                <img src="https://www.garia.com/assets/Uploads/_resampled/ScaleWidthWyI2NDAiXQ/models-supersport.png" alt="" />
            </div>
            <div className="content-info">
            <h2>SUPERSPORT</h2>
            
            <p>
            A masterpiece inspired by Mercedes-Benz Style, the Garia SuperSport is a reinvention of the golf car. Absolutely unique, the vehicle was specifically developed for sporting golfers and car passionates, featuring a bold, intelligent design.
            </p>
            <button type="button" className="btn4 btn-primary">Discover More</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
