import React from 'react'
import Post from './Post';

const ListOfPosts = ({posts}) => { 
  return (
    posts.map(post => (
      <Post
        key={post.title}
        post={post}
      />
    ))
  )
}

export default ListOfPosts