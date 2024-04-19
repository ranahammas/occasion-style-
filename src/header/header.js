import React, { useState, useEffect } from 'react';
import './header.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { LuLogOut } from "react-icons/lu";
import { IoMdArrowDropdown } from 'react-icons/io';
import { BsCart } from 'react-icons/bs';
// import { useNavigate } from 'react-router-dom';
import { IoNavigateSharp, IoSearchOutline } from 'react-icons/io5';
import { IoPersonSharp } from 'react-icons/io5';
import logo from '../assets/logo.png';
import Modal from '../Modal/modal';
import axios from 'axios';

function Header() {
  const [userName, setUserName] = useState('');
  const location = useLocation();
  const navigate=useNavigate()
 
 const submitandnavigate=()=>{
    navigate("/login-page")
  }
  const About=()=>{
    navigate("/About")
  }
  
  const card=()=>{
    navigate("/card")
  }
  
const submitearn=()=>{
  navigate("/earn-with-us")
}
  useEffect(() => {
    // Load user name from localStorage when component mounts
    const storedUserName = localStorage.getItem('location.state');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, [location.state]);

  const clearUserData = () => {
    const keyToRemove = userName; // Change the key name if needed
    localStorage.removeItem(keyToRemove);
    console.log('data removed', keyToRemove);
  };

  const handleLogout = () => {
   
    clearUserData();
    window.location.href = '/';
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__header"></div>
        <ul className="navbar__menu">
          <img src={logo} className="logoimg" alt="Logo" />
          <li className="navbar__item">
            <a href="http://localhost:3000/">Home</a>
          </li>
          <li className="navbar__item navbar__dropdown">
            <a href="#">
              Mens Collection<IoMdArrowDropdown />
            </a>
            <div className="navbar__dropdown-content">
              <p>Sherwani</p>
              <p>Three piece</p>
              <p>Waist cot</p>
            </div>
          </li>
          <li className="navbar__item navbar__dropdown">
            <a href="#">
              Women's Collection<IoMdArrowDropdown />
            </a>
            <div className="navbar__dropdown-content">
              <p>Engagement</p>
              <p>Barat</p>
              <p>Mehndi</p>
              <p>Nikkah</p>
              <p>walima</p>
              <p>Lehnga Choli</p>
              <p>Shirt with sharara Garara</p>
              <p>Shirt with Lehnga</p>
              <p>Saris</p>
              <p>Gowns</p>
            </div>
          </li>
          <li className="navbar__item" onClick={About}>  
            <a >About Us</a>
          </li>
          <li className="navbar__item">
            <a >Track Order</a>
          </li>
          <li className="navbar__item">
            <button className="newbutton" onClick={submitearn}>Earn With Us</button>
          </li>

          <div className="newnavbar">
            <li className="navitem1">
              <a >
                <IoSearchOutline />
              </a>
            </li>
            <li className="navitem2">
              <a >
                <BsCart  onClick={card}/>
              </a>
            </li>
            <li className="navitem3">
              {location.state ? (
                <div>{location.state}       
                <a href="/#logout"><LuLogOut style={{marginLeft:'17'}}
                />
                
                </a>

               </div>
              ) : (
           <div onClick={submitandnavigate}> 
              <IoPersonSharp /> 
           </div>
            
                
              )}
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
