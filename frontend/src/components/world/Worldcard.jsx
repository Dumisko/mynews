import React, {useState} from 'react'
import { getimageUrl } from '../../utils'
import styles from "./Worldcard.module.css"




function Worldcard({ world: { headline, writer, date, image, content }, onReadMore }) {

  const [showFullContent, setShowFullContent] = useState(false);



  function getFirstThreeLines(content) {
    // Split content by sentence-ending punctuation (., !, ?) to simulate line breaks
    const lines = content.match(/[^.!?]+[.!?]/g);

    // Get the first 3 lines and join them into a single string
    return lines ? lines.slice(0, 3).join(' ') : content;
}

const handleToggleContent = () => {
  if (!showFullContent) {
    navigate(`/post/${headline}`);
  } else {
    setShowFullContent(false);
  }
};

// new added
const handleReadMore = () => {
  onReadMore(headline);
};

  return (
    <div className={styles.container}>
      {/* <img className= {styles.image} src={getimageUrl(image)} alt={`image loading failed`} />
       <h2 className={styles.headline} >{headline} </h2>
       <h4 className= {styles.writer}  >name of the writer: {writer}</h4>
       <h4  className= {styles.date}>{date} </h4>
       <p className= {styles.content}>{showFullContent ? content : getFirstThreeLines(content)}</p>

       <button className= {styles.button} onClick={handleToggleContent}>
                {showFullContent ? "Show Less" : "Read More"}
            </button> */}


<img className={styles.image} src={getimageUrl(image)} alt="Image loading failed" />
      <h2 className={styles.headline}>{headline}</h2>
      <h4 className={styles.writer}>By: {writer}</h4>
      <h4 className={styles.date}>{date}</h4>
      <p className={styles.content}>{content.slice(0, 100)}...</p>
      <button className={styles.button} onClick={handleReadMore}>Read More</button>
    </div>
  )
}

export default Worldcard

