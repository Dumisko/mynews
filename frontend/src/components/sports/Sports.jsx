import React from 'react'
import { useState, useEffect } from 'react';
import SportsCard from './SportsCard.jsx'
import axios from 'axios'


function Sports() {
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
      <div >
      {
        sportsnews.map((sport,id)=>{
          return (<SportsCard key={id} sport={sport} />);
        })

      }
      </div>
      
    </section>
  )
}

export default Sports
