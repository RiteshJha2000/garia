import React from 'react'
import "./Intro.css"

export default function Intro() {
  return (
    <div className='intro'>
        <h1>GARIA LUXURY CARS</h1>
        <p>Inspired by Danish design and a passion for automobiles.</p>
        <p className='p1'>A Garia unifies the convenience of a golf and leisure car with unrivaled attention to luxury, quality, and aesthetics.</p>
        <p>They say golf cart, we say golf car.</p>
        <div className="btn">
            <button type="button" className="btn1 btn-primary">Create Your Garia</button>
            <button type="button" className="btn2 btn-secondary">Discover more</button>
        </div>
    </div>
  )
}
