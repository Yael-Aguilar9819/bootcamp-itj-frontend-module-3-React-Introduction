import React from 'react'

const FeaturedPost = (props) => { 

  return (
    <div class="blog-post-feature">
      <div class="blog-post-feature-image">
            <img src={props.imgSrc} alt={props.alt}/>
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

export default FeaturedPost