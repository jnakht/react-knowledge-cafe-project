
import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    console.log('bookmark set hoise', bookmark)
    return (
        <div className="bg-white p-5 w-[80%] mx-auto rounded-xl">
            <p className="text-[#111] text-lg font-semibold">{bookmark}</p>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.string,
}
export default Bookmark;