import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='md:w-5/6 mx-auto'>
          <Header></Header>
          <hr />
          <main>
              {/* left side: blogs */}
              <Blogs></Blogs>
              {/* right side: bookmarks */}
          </main>
      </div>
    </>
  )
}

export default App
