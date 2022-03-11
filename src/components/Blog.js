import React from 'react'

const Blog = (props) => { 

  return (
    <div class="blog-post">
      <div class="blog-post-image">
            <img src={props.blog.imgSrc} alt={props.blog.alt} width="250" height="250"/>
        </div>
        <div class="blog-post-details">
            <p>{props.blog.updatedAt}</p>
            <h1>
                {props.blog.title}
            </h1>
            <p>
              {props.blog.body}
            </p>
            <a href="post.html" target="_blank">READ MORE</a>
        </div>
    </div>
  )
}

export default Blog