import React, { useEffect } from 'react'
import './blog.css'
import Post from './posts'
import img from "../images/max_vygoda-up.jpg"
import BackBlog from "./b-header"
const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <BackBlog title='Welcome To Our News' cover={img} />
        <div className="home">
          <Post />
          {/* <Sidebar /> */}
        </div>

      </div>



    </>
  )
}

export default Blog

