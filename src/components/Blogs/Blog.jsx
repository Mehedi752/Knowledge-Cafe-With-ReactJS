import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddBookmark, handleMarkAsRead }) => {
    const {id, cover_picture, title, author, author_image, posted_date, reading_time, hashtags } = blog;

    return (
        <div className="">

            <img src={cover_picture} alt="" className="mb-8 rounded-lg" />
            <div className="flex items-center justify-between mb-5">
                <div className="flex gap-10 items-center">
                    <img src={author_image} alt="" className="" />
                    <div className="">
                        <h4 className="text-[#111111] text-2xl font-bold">{author}</h4>
                        <p className="text-[#111111]/60 text-base font-semibold">{posted_date}</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <p className="text-[#111111]/60 text-xl font-medium">{reading_time} min read</p>
                    <button onClick={() => handleAddBookmark(blog)} className=""><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h3 className="mb-5 text-[#111111] text-[40px] font-bold lg:pr-[80px]">{title}</h3>
            <div className="flex gap-3 text-[#111111]/60 text-xl font-medium mb-5">
                {
                    hashtags.map((hashtag, id) =>
                        <p key={id} className="">{hashtag}</p>
                    )
                }
            </div>

            <h4 onClick={() => handleMarkAsRead(id,reading_time)} className="text-[#6047ec] text-xl font-semibold underline">Mark as read</h4>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;