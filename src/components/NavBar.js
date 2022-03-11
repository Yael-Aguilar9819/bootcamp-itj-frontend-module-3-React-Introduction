import React from 'react'
import "../styles/blog.css";

const NavBar = () => { 

  return (
    <div class="blog-post-navbar">
        <div class="blog-post-brand">
            <a href="https://itjuana.com/">
              <img
                    src="https://itjuana.com/wp-content/themes/itjuana/assets/images/svg-grid/itijuana-logo-color.svg"
                    alt="" width="100" height="50"/></a>
        </div>
        <ul>
            <li><a href="#news">Create new post</a></li>
        </ul>
    </div>
  )
}

export default NavBar