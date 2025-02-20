import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks}) => {
    return (
        <div className="border-2 border-green-600 w-[29%]">
            <div className="h-[80px] bg-[#6047EC1A] border border-solid border-[#6047EC] flex justify-center items-center rounded-[8px] mb-6">
                {/* spent time code here */}
                <h4 className=" text-[#6047EC] text-2xl font-bold">Spent time on read : 177 min</h4>
            </div>
            <div className=" bg-[#1111110D] pt-8 pb-8">
                <h3 className="text-[#111] text-2xl font-bold text-center ">Bookmarked Blogs : {bookmarks.length}</h3>
            <div className="flex flex-col gap-4 mt-4">
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
            }
            </div>
            </div>
        </div>
    );
};

export default Bookmarks;