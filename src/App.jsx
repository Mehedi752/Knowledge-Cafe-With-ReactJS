import { useState } from "react"
import Blogs from "./components/Blogs/blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header"

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);

  }
  const handleMarkAsRead = (id, time) => {
    const timeNumber = parseFloat(time);
    setReadingTime(readingTime + timeNumber);
    console.log(id);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id != id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <div className="container px-5 lg:px-[200px] mx-auto">
      <Header></Header>
      <div className="md:flex gap-6">
        <Blogs handleAddBookmark={handleAddBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>

    </div>
  )
}

export default App;
