import React, { use } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({blogsPromise,handleBookMarked,handleMarkAsRead}) => {
    const blogs = use(blogsPromise);
    console.log(blogs) 
    return (
        <div>
           <h1 className='text-2xl text-emerald-500 font-semibold' >Available Blogs: {blogs.length}</h1>
           <div className="grid md:grid-cols-2 gap-3">
           {
            blogs.map(blog=><Blog blog={blog}
            key={blog.id}
            handleBookMarked={handleBookMarked}
            handleMarkAsRead={handleMarkAsRead}
            ></Blog>)
           } 
           </div>
        </div>
    );
};

export default Blogs;