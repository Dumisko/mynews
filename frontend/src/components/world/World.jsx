import React, { useEffect, useState } from 'react'
import Worldcard from './Worldcard'
import axios from "axios"
import PostDetail from '../PostDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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


  const [selectedPost, setSelectedPost] = useState(null);

  const handleReadMore = (headline) => {
    const post = worldnews.find((p) => p.headline === headline);
    setSelectedPost(post);
  };

  const handleBack = () => {
    setSelectedPost(null);
  };

  return (
    <section id='world'>
      
     <h1>world section</h1>


        <div>

{selectedPost ? (
        <PostDetail post={selectedPost} onBack={handleBack} />
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {worldnews.map((post, index) => (
            <Worldcard key={index} world={post} onReadMore={handleReadMore} />
          ))}
        </div>
      )}
        </div>


    </section>
  )
}

export default World
