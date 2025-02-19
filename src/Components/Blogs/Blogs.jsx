import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleBookmarks}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } ,[])
    return (
        <div className="border-2 border-red-600 w-[69%] pr-6">
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleBookmarks={handleBookmarks}
                    ></Blog>)
            }
        </div>
    );
};

export default Blogs;