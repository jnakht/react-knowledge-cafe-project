import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks}) => {
    return (
        <div className="border-2 border-green-600 w-[29%]">
            <div className="h-[80px]">
                {/* spent time code here */}
                Spent time on read : 177 min
            </div>
            <div className=" bg-[#1111110D]">
                <h3 className="text-[#111] text-2xl font-bold">Bookmarked Blogs : {bookmarks.length}</h3>
            <div className="flex flex-col gap-4">
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
            }
            </div>
            </div>
        </div>
    );
};

export default Bookmarks;