import React from 'react';
import Blog from './components/Blog';
import FeaturedBlog from './components/FeaturedBlog';
import NavBar from './components/NavBar';

function App() {
  
  return (
    <>
        <NavBar/>
        <FeaturedBlog title={"ITJ wants to commemorate the World Engineering Day 2022"} updatedAt={"March 7, 2022"} 
              imgSrc={"https://www.w3schools.com/tags/img_girl.jpg"} alt={"Girl in a jacket"}
              body={`Engineers have had a massive influence on economic prosperity and quality of life by inventing and
                developing new technologies, from pioneers of productivity improvements to the determination and
                logistics for implementing them. Engineering is a remarkable and extraordinary profession that
                encompasses a wide range of disciplines, from the oldest, military and civil engineering feats, to
                […]`}/>
      <hr class="blog-hr"/>
        <Blog title={"ITJ wants to commemorate the World Engineering Day 2022"} updatedAt={"March 7, 2022"} 
              imgSrc={"https://itjuana.com/wp-content/uploads/2022/03/ITJ-wants-to-commemorate-the-World-Engineering-Day.png"} alt={"Engineering Day"}
              body={`Engineers have had a massive influence on economic prosperity and quality of life by inventing and
                developing new technologies, from pioneers of productivity improvements to the determination and
                logistics for implementing them. Engineering is a remarkable and extraordinary profession that
                encompasses a wide range of disciplines, from the oldest, military and civil engineering feats, to
                […]`}/>
        <Blog title={"The future of software engineering"} updatedAt={"February 3, 2022"} 
              imgSrc={"https://itjuana.com/wp-content/uploads/2022/02/Steps-toward-hyper-automation.jpg"} alt={"Automation"}
              body={`According to the US Bureau of Labor Statistics, job possibilities in software development will expand
              by 22% from 2020 to 2030, well above the national average growth rate of 8% for all professions. These
              figures indicate that software engineering has a promising future, especially as new software 
              development trends drive the field forward. But what […]`}/>       
    </>
  );
}

export default App;
