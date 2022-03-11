import React from 'react'
import Blog from './Blog';

const ListOfBlogs = (props) => { 

  return (
    props.blogs.map(blog => (
      <Blog
        key={blog.title}
        blog={blog}
      />
    ))
  )
}

export default ListOfBlogs