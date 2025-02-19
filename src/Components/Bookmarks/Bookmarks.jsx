import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks}) => {
    return (
        <div className="border-2 border-green-600 w-[29%]">
            <div>
                {/* spent time code here */}
            </div>
            <div>
                <h3>Bookmarked Blogs : {bookmarks.length}</h3>
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};

export default Bookmarks;