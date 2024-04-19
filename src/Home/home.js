import React ,{useRef}from 'react';
import Header from '../header/header'
import'./home.css'
import CardList from '../cards/card'
import ScrollAnimation from 'react-animate-on-scroll';
import Earn from '../Earn/earn';
import Gen from '../generaten/gen'
import Call from '../callback/callback';
import Shipping from '../shipping/shipping'
import Footer from '../footer/footer';
import Last from '../last/last'
import { useNavigate } from "react-router-dom";

function Home(){

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

 
    return(
        <div>
       <header>
        <Header/>
    </header>
    <div className="container">
      <div className="block1">
        <p className='para1'>Wedding Dresses</p>
        <p className='para2'> for Rent</p>
        <p className='para3'>Elevate your special day with our exquisitie wedding dresses rentals.Offering timeless elegance and the unforgettable style for bride.</p>
        <div> <button className="homebutton" onClick={() => scrollToSection(section1Ref)}>Browse Catalog</button></div>
        <p className='last'>Free shipping for orders over 10,000 </p>
      </div>
      <div className="block2">
      </div>
    </div>
    <div className='next' ref={section1Ref}>
    <ScrollAnimation animateIn="bounceInRight">
    <CardList/>
</ScrollAnimation>
    </div>
    <div>
      <Earn/>
    </div>
    <div>
    <ScrollAnimation animateIn="bounceInRight">
    <Gen/>
      </ScrollAnimation>
    </div>
{<div>
  <Shipping/>
</div> }
    <div>
      <Call/>
    </div>
    <div>
      <Footer/>
    </div>
    <div>
      <Last/>
    </div>
    </div>
    
    
    
   
    )
}
export default Home;