import React from 'react';
import './earn.css'
import earn2 from '../assets/earn2.png'

function Earn(){
    return(
        <div className="parallel-blocks">
      <div className="block">
        <img src={earn2} className='imgs' alt="Block 2 Image" />
      </div>
      <div className="block-with-image">
        <h2> Monetise your Wardrobe</h2>
        <p>Why let you closet stay idle?Monetise and rent your dresses to us to earn some cash on the side</p>
        <button className="mybtn" >Earn With Us</button>
      </div>
    </div>
    )
}
export default Earn;