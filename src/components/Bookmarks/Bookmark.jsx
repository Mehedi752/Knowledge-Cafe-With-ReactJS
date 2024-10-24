import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    return (
        <div className="bg-white rounded-lg">
            <h3 className="text-[#111111] text-lg font-semibold p-5">{bookmark.title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
};

export default Bookmark;