import React from 'react';
import FeaturedPost from './components/FeaturedPost';
import ListOfPosts from './components/ListOfPosts';
import NavBar from './components/NavBar';
import posts from './resources/posts';

const App = () => {
  
  return (
    <>
        <NavBar/>
        <FeaturedPost title={"ITJ wants to commemorate the World Engineering Day 2022"} updatedAt={"March 7, 2022"} 
              imgSrc={"https://www.w3schools.com/tags/img_girl.jpg"} alt={"Girl in a jacket"}
              body={`Engineers have had a massive influence on economic prosperity and quality of life by inventing and
                developing new technologies, from pioneers of productivity improvements to the determination and
                logistics for implementing them. Engineering is a remarkable and extraordinary profession that
                encompasses a wide range of disciplines, from the oldest, military and civil engineering feats, to
                […]`}/>
      <hr class="blog-hr"/>
      <ListOfPosts posts={posts.getAllPosts()}/>
    </>
  );
}

export default App;
