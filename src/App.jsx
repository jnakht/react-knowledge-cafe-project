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
  const handleMarkAsRead = (title, reading_time) => {
    setSpentTime(spentTime + reading_time);

    // if marked as read, remove from bookmark(remove using title)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark !== title);
    setBookmarks(remainingBookmarks);
  }
  return (
    <>
      <div className='md:w-5/6 mx-auto'>
          <Header></Header>
          <hr />
          <main className='flex justify-between mt-8'>
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
