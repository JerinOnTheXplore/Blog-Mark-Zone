
import { Suspense, useState } from 'react';
import './App.css'
import Blogs from './components/Navbar/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

const fetchBlogs =async ()=>{
   const res = await fetch("blogs.json");
   return res.json();
}

function App() {
  const blogsPromise = fetchBlogs();
  const [bookMarked,setBookMarked]=useState([]);
  const[readingTime,setReadingTime]=useState(0);


  const handleBookMarked=(blog)=>{
    // console.log('clicked bookmark')
    const newBookMarked=[...bookMarked,blog];
    setBookMarked(newBookMarked);
  }
  const handleMarkAsRead=(time,id)=>{
    console.log(time)
    const newMarkAsRead= readingTime +time;
    setReadingTime(newMarkAsRead);
    handleRemoveFromBookMark(id);
  }
  const handleRemoveFromBookMark=(id)=>{
    const remainingBookMark=bookMarked.filter(mark=>mark.id!=id);
    setBookMarked(remainingBookMark)
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex md:flex md:justify-around p-3 gap-24 md:gap-4 bg-cyan-50">
        <div className="left-container md:w-[70%]  p-2 rounded-xl">
          
          <Suspense>
          <Blogs blogsPromise={blogsPromise}
          handleBookMarked={handleBookMarked}
          handleMarkAsRead={handleMarkAsRead}
          ></Blogs>
          </Suspense>
        </div>
        <div className="right-container md:w-[30%] text-xl text-slate-600 font-medium  p-2 rounded-2xl">
          <h1>Reading Time:{readingTime}</h1>
          
          <h1>Bookmarked Count:{bookMarked.length}</h1>
          {
            bookMarked.map(marked=><p className='text-base bg-amber-100 p-2 rounded mt-2'>{marked.title}</p>)
          }
        </div>
      </div>
    </>
  )
}

export default App
