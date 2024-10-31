import React from 'react'
import { useState, useEffect } from 'react';
import SportsCard from './SportsCard.jsx'
import axios from 'axios'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Sports() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };



  const [sportsnews, setsportsnews] = useState([]);
  useEffect(()=>{
const getsportsnews = async ()=>{
  try {
  const response = await axios.get("http://localhost:5001/news");

  const m = response.data;
  console.log(m.filter(article => article.contentType === "sports"));
  setsportsnews(m.filter(article => article.contentType === "sports"));
  } catch (error) {
    console.log("error is : ",error);
    
  }
}

getsportsnews();
  },[])
  return (
    <section id='sports'>
    <h1>sports section </h1>



      <Slider {...settings}>
      {
        sportsnews.map((sport,id)=>{
          return (<SportsCard key={id} sport={sport} />);
        })

      }
      </Slider>
      
    </section>
  )
}

export default Sports
