// PostDetail.jsx
import React from 'react';
import { getimageUrl } from '../utils.js'; // Adjust this import path if needed
import styles from './PostDetail.module.css';

function PostDetail({ post, onBack }) {
  return (
    <div className={styles.container}>
      <button onClick={onBack} className={styles.backButton}>Back</button>
      <h1>{post.headline}</h1>
      <h4>By: {post.writer}</h4>
      <h4>Date: {post.date}</h4>
      <img className={styles.image} src={getimageUrl(post.image)} alt="Image loading failed" />
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;


