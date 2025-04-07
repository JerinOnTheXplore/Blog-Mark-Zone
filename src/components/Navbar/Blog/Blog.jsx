import React from 'react';
import { FaBookmark } from "react-icons/fa6";
const Blog = ({blog,handleBookMarked,handleMarkAsRead}) => {
    // console.log(blog)
    return (
        <div className=''>
          <div className="card bg-base-100 w-96 shadow-sm ">
  <figure>
    <img
      src={blog.cover}
      alt="Shoes" />
  </figure>
  <div className="card-body">
  <h2 className="card-title text-xl">{blog.title}</h2>
  <h1 className='text-lg text-cyan-950 font-medium'>Athor: {blog.author}</h1>
    <div className='flex justify-between'>
    <img className='w-12 rounded-lg' src={blog.
author_img
} alt="" />
    <button onClick={()=>handleBookMarked(blog)} className='text-2xl'><FaBookmark /></button>
    </div>
    <p className='text-base text-slate-600 font-medium'>Posted Date:{blog.posted_date}</p>
    <div className=''>
    {
        blog.hashtags.map(hash=><p className='text-slate-600 font-medium'key={hash}><a className='text-blue-500' href="">#{hash}</a></p>)
    }
    </div>
    <div className="card-actions justify-end">
      <button onClick={()=>handleMarkAsRead(blog.reading_time,blog.id
     )} className="btn btn-primary">Mark-As-Read</button>
    </div>
  </div>
</div>  
        </div>
    );
};

export default Blog;