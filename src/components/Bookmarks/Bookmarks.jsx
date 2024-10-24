import PropTypes from 'prop-types';
import Bookmark from './bookmark';
const Bookmarks = ({ bookmarks, readingTime }) => {

    return (
        <div className="md:w-1/3 flex flex-col gap-6 mt-6 lg:mt-0">
            <div className="bg-[#6047ec]/10 rounded-lg border border-[#6047ec] px-[50px] py-[21px]">
                <h3 className="text-[#6047ec] text-[20px] font-bold">Spent time on read : {readingTime}</h3>
            </div>
            <div className="bg-[#111111]/5 rounded-lg p-8 flex flex-col gap-4">
                <h2 className="text-[#111111] text-2xl font-bold">Bookmarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark} readingTime={readingTime}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}


export default Bookmarks;