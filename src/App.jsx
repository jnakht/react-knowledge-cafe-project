import { useState } from 'react'
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

  const [spentTime, setSpentTime] = useState(0);
  const handleMarkAsRead = (reading_time) => {
    setSpentTime(spentTime + reading_time);
  }
  return (
    <>
      <div className='md:w-5/6 mx-auto'>
          <Header></Header>
          <hr />
          <main className='flex justify-between'>
              {/* left side: blogs */}
              <Blogs handleBookmarks={handleBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
              {/* right side: bookmarks */}
              <Bookmarks bookmarks={bookmarks} spentTime={spentTime}></Bookmarks>
          </main>
      </div>
    </>
  )
}

export default App
