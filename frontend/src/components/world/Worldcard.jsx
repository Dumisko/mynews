import React from 'react'
import { getimageUrl } from '../../utils'

// import styles from "./Worldcard.module.css"


function Worldcard({worlds: {headline,writer, date,image, content},}) {
  return (
    <div>

 <h2>{headline} </h2>
       <h4>name of the writer: {writer}</h4>
       <h4>{date} </h4>
       <img src={getimageUrl(image)} alt={`image loading failed`} />
       <p>
        {content}
       </p>
      
    </div>
  )
}

export default Worldcard

