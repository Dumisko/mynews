import React from 'react'
import sports from "../../data/sports.json"
import SportsCard from './SportsCard.jsx'

function Sports() {
  return (
    <section id='sports'>
    <h1>sports section </h1>
      <div >
      {
        sports.map((sport,id)=>{
          return (<SportsCard key={id} sport={sport} />);
        })

      }
      </div>
      
    </section>
  )
}

export default Sports
