import React, { useEffect, useState } from 'react'
import Worldcard from './Worldcard'
import axios from "axios"

function World() {

  const [worldnews, setworldnews] = useState([]);
  useEffect(()=>{
const getworldnews = async ()=>{
  try {
  const response = await axios.get("http://localhost:5001/news");
  
  const m = response.data;
  console.log(m.filter(article => article.contentType === "world"));

  setworldnews(m.filter(article => article.contentType === "world"));
  } catch (error) {
    console.log("error is : ",error);
    
  }
}

getworldnews();
  },[])

  return (
    <section id='world'>
      <h1> world affair section</h1>
        
        <div>
          {
            worldnews.map((worlds, id)=>{
                return (<Worldcard key={id} worlds={worlds} />);
            })

          }
        </div>

    </section>
  )
}

export default World
