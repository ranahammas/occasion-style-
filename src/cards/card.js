// In your React component file

import React, { useEffect, useState } from 'react';
import Loader from '../assets/loader.json';
import Lottie from 'react-lottie';
import './card.css';
import loaderAnimation from '../assets/loader.json'; 
const Card = ({ img, title, buttonText, buttonText2, onButtonClick }) => {
  const [loading, setLoading] = useState(true);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
  };

  // showing the loding time for the 3000 
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);

  })

  return (
    <div className="card">
      {loading ? <Lottie
        options={defaultOptions}
        height={40}
        width={40}
        style={{
          marginTop:140
        }}
      /> : <div><img src={img} alt="Card" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className='para'> Rs10,000/day or Rs. 85000 </p>
          {/* <button className="card-button" onClick={onButtonClick}>{buttonText}</button>
          <button className="card-button2" onClick={onButtonClick}>{buttonText2}</button> */}
        </div></div>}

    </div>
  )
};


const CardList = () => {
  const [showContent, setShowContent] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [color, setColor] = React.useState("#ffffff");
  let [loading, setLoading] = React.useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear the timeout when component unmounts to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        if (isInViewport(card)) {
          card.classList.add('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        if (isInViewport(card)) {
          card.classList.add('show');
        }
      });
      setShowContent(true);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const handleButtonClick = () => {
    alert('Button clicked');
    // Add your button click logic here
  };


  return (

    <div className='card-container'>
      <div className='head'><h2>Our Products</h2></div>
      <p className='p'>Contemporary Pakistani Wedding dresses meticulously handicrafted with tradational embellesmensts and embriodery techniques inspired by the subcontinent's heritage.Each carefully crafted dress is designed to compliment brides look on her wedding day </p>

      <Card
        img="https://image.wedmegood.com/resized-nw/700X/wp-content/uploads/2020/08/277473872_3298797890356346_6341377977049684842_n.jpg"
        title='lehnga(white)'
        buttonText="Rent It"
        buttonText2='Buy It'
        onButtonClick={handleButtonClick}
      />
      <Card
        img="https://assets.ajio.com/medias/sys_master/root/20230725/xnSA/64bfb03da9b42d15c96d15ac/-1117Wx1400H-464414061-red-MODEL.jpg"
        title="Lehnga(Red)"
        buttonText="Rent It"
        buttonText2='Buy It'
        onButtonClick={handleButtonClick}
      />
      <Card
        img="https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/500x750/a12781a7f2ccb3d663f7fd01e1bd2e4e/e/m/embroidered-gold-georgette-fancy-lehenga-llcv114923-1.jpg"
        title="Lehga(Golden)"
        buttonText="Rent It"
        buttonText2='Buy It'
        onButtonClick={handleButtonClick}
      />
      <Card
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLvyVVX3nNKQlRdQfNA2FT5GK96CmV5VPQScaEcfTfyg&s"
        title="Lehga(Cream)"
        buttonText="Rent It"
        buttonText2='Buy It'
        onButtonClick={handleButtonClick}
      />
      <Card
        img="https://image.wedmegood.com/resized-nw/700X/wp-content/uploads/2020/08/277473872_3298797890356346_6341377977049684842_n.jpg"
        title='lehnga(white)'
        buttonText="Rent It"
        buttonText2='Buy It'
        onButtonClick={handleButtonClick}
      />
      <Card
        img="https://assets.ajio.com/medias/sys_master/root/20230725/xnSA/64bfb03da9b42d15c96d15ac/-1117Wx1400H-464414061-red-MODEL.jpg"
        title="Lehnga(Red)"
        buttonText="Rent It"
        buttonText2='Buy It'
        onButtonClick={handleButtonClick}
      />
      <Card
        img="https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/500x750/a12781a7f2ccb3d663f7fd01e1bd2e4e/e/m/embroidered-gold-georgette-fancy-lehenga-llcv114923-1.jpg"
        title="Lehga(Golden)"
        buttonText="Rent It"
        buttonText2='Buy It'
        onButtonClick={handleButtonClick}
      />
      <Card
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLvyVVX3nNKQlRdQfNA2FT5GK96CmV5VPQScaEcfTfyg&s"
        title="Lehga(Cream)"
        buttonText="Rent It"
        buttonText2='Buy It'
        onButtonClick={handleButtonClick}
      />
      <div className='lastbutton-container'>
        <div> <button className='lastbutton' >View All Products</button></div>

      </div>
    </div>
  );
};

export default CardList;
