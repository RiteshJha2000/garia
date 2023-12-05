import React from 'react'
import "./Details.css"

export default function Datacard(props) {

  let {title,desc,img}=props;

  return (
    <div className='datacard'>
        <div className="card">
            <img src={img} class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p class="card-text">{desc}</p>
            </div>
        </div>
    </div>
  )
}
