import React,{ useState } from 'react'
import { getimageUrl } from '../../utils'


function SportsCard({sport: {headline, writer, date, image, content},}) {

  const [showFullContent, setShowFullContent] = useState(false);



  function getFirstThreeLines(content) {
    // Split content by sentence-ending punctuation (., !, ?) to simulate line breaks
    const lines = content.match(/[^.!?]+[.!?]/g);

    // Get the first 3 lines and join them into a single string
    return lines ? lines.slice(0, 3).join(' ') : content;
}

const handleToggleContent = () => {
  setShowFullContent(!showFullContent);
};
 

  return (
    <div>
       <h2>{headline} </h2>
       <h4>name of the writer: {writer}</h4>
       <h4>{date} </h4>
       <img src={getimageUrl(image)} alt={`image loading failed`} />
       <p>{showFullContent ? content : getFirstThreeLines(content)}</p>

       <button onClick={handleToggleContent}>
                {showFullContent ? "Show Less" : "Read More"}
            </button>

    </div>
    
  )
}

export default SportsCard
