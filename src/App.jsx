import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks';

function App() {
  
  const [bookmarks, setBookmarks] = useState([]);
  const handleBookmarks = (title) => {
    console.log("title is on bookmark: ", title);
      const newBookmarks = [...bookmarks, title];
      setBookmarks(newBookmarks);
  }
  return (
    <>
      <div className='md:w-5/6 mx-auto'>
          <Header></Header>
          <hr />
          <main className='flex justify-between'>
              {/* left side: blogs */}
              <Blogs handleBookmarks={handleBookmarks}></Blogs>
              {/* right side: bookmarks */}
              <Bookmarks bookmarks={bookmarks}></Bookmarks>
          </main>
      </div>
    </>
  )
}

export default App
