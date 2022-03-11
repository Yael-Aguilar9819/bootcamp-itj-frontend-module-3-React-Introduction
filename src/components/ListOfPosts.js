import React from 'react'
import Post from './Post';

const ListOfPosts = (props) => { 
  return (
    props.posts.map(post => (
      <Post
        key={post.title}
        post={post}
      />
    ))
  )
}

export default ListOfPosts