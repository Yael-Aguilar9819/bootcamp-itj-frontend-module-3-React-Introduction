import React from 'react'
import "../styles/blog.css";

const Post = ({post}) => { 

  return (
    <div class="blog-post">
      <div class="blog-post-image">
            <img src={post.imgSrc} alt={post.alt} width="250" height="250"/>
        </div>
        <div class="blog-post-details">
            <p>{post.updatedAt}</p>
            <h1>
                {post.title}
            </h1>
            <p>
              {post.body}
            </p>
            <a href="post.html" target="_blank">READ MORE</a>
        </div>
    </div>
  )
}

export default Post