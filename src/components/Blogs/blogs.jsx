import { useState } from "react";
import Blog from "./Blog";
import { useEffect } from "react";
import PropTypes from 'prop-types';

const Blogs = ({ handleAddBookmark, handleMarkAsRead }) => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const url = "blogs.json";
            const res = await fetch(url);
            const data = await res.json();
            setBlogs(data);
        }
        fetchData();
    }, [])

    return (
        <div className="md:w-2/3 flex flex-col gap-10">
            {
                blogs.map(blog =>
                    <Blog
                        key={blog.id}
                        blog={blog}
                        handleAddBookmark={handleAddBookmark}
                        handleMarkAsRead={handleMarkAsRead}>
                    </Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddBookmark: PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired
}

export default Blogs;