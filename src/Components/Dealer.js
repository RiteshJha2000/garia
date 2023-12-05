import React from 'react'
import "./Dealer.css"

export default function Dealer() {
  return (
    <div className='dealer'>
        <h2>FIND DEALER</h2>
        <div class="dropdown drop">
            <button class="btn btn-secondary dropdown-toggle drop1" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:"#f7f3f3",color:"gray",border:"2px solid white"}}>
                Select Region
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Africa</a></li>
                <li><a class="dropdown-item" href="#">Asia Pacific</a></li>
                <li><a class="dropdown-item" href="#">Middle East</a></li>
                <li><a class="dropdown-item" href="#">Europe</a></li>
                <li><a class="dropdown-item" href="#">The Americas</a></li>
            </ul>
        </div>
    </div>
  )
}
