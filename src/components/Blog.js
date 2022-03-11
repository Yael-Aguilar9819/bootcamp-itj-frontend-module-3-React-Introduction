import React from 'react'

const Blog = (props) => { 

  return (
    <div class="blog-post">
      <div class="blog-post-image">
            <img src={props.imgSrc} alt={props.alt} width="250" height="250"/>
        </div>
        <div class="blog-post-details">
            <p>{props.updatedAt}</p>
            <h1>
                {props.title}
            </h1>
            <p>
              {props.body}
            </p>
            <a href="post.html" target="_blank">READ MORE</a>
        </div>
    </div>
  )
}

export default Blog