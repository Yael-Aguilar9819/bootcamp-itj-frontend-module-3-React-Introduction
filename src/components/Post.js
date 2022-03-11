import React from 'react'

const Post = (props) => { 

  return (
    <div class="blog-post">
      <div class="blog-post-image">
            <img src={props.post.imgSrc} alt={props.post.alt} width="250" height="250"/>
        </div>
        <div class="blog-post-details">
            <p>{props.post.updatedAt}</p>
            <h1>
                {props.post.title}
            </h1>
            <p>
              {props.post.body}
            </p>
            <a href="post.html" target="_blank">READ MORE</a>
        </div>
    </div>
  )
}

export default Post