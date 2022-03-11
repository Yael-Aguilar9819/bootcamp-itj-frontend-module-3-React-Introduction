import React from 'react'

const FeaturedPost = ({title, alt, imgSrc, body, updatedAt}) => { 

  return (
    <div class="blog-post-feature">
      <div class="blog-post-feature-image">
            <img src={imgSrc} alt={alt}/>
        </div>
        <div class="blog-post-details">
            <p>{updatedAt}</p>
            <h1>
                {title}
            </h1>
            <p>
              {body}
            </p>
            <a href="post.html" target="_blank">READ MORE</a>
        </div>
    </div>
  )
}

export default FeaturedPost