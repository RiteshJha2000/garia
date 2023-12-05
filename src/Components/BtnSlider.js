import React from "react";
import "./Details.css";
import { BiChevronRight } from 'react-icons/bi';
import { BiChevronLeft } from 'react-icons/bi';


export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <>   
     <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {/* <img src={direction === "next" ?  : } /> */}
      {/* <BiChevronRight/> */}
      <BiChevronLeft/>
    </button>
    <button
    onClick={moveSlide}
    className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
  >
    {/* <img src={direction === "next" ?  : } /> */}
    <BiChevronRight/>
  </button>
  </>

  );
}