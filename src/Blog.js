import React from 'react'

import {Helmet} from "react-helmet";
const Blog = () => {
  return (
    <>
    <div className='blog'>
    <Helmet>
            <title>Blog</title>
            <meta name="description" content="Lorem ipsum dolor sit amet" />
        </Helmet>
    <h1>Blog</h1>
    </div>
    </>
  )
}
export default Blog;