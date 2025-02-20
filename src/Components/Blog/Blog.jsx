import PropTypes from 'prop-types';

const Blog = ({blog, handleBookmarks, handleMarkAsRead}) => {
    const {cover, title, author_img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div className="mb-[40px]">
            <img className="w-full rounded-xl" src={cover} alt={`image of ${title}`}  />
            <div className="flex justify-between mt-8">
                <div className="flex  gap-6">
                    <img className="w-[60px]" src={author_img} alt="" />
                    <div className="flex flex-col justify-between">
                        <b className="text-[#111] text-2xl font-bold">{author}</b>
                        <p className="text-[#11111199] text-base font-semibold">{posted_date}</p>
                    </div>
                </div>
                <div className=" flex flex-row justify-between items-center gap-1">
                        <p className="text-[#11111199] text-xl font-medium">{reading_time} min read</p>
                        <button className='cursor-pointer' onClick={() => handleBookmarks(title)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M17.593 3.322C18.693 3.45 19.5 4.399 19.5 5.507V21L12 17.25L4.5 21V5.507C4.5 4.399 5.306 3.45 6.407 3.322C10.1232 2.89063 13.8768 2.89063 17.593 3.322Z" stroke="#111111" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
                    
                </div>
            </div>

            <h1 className="mt-4 text-[#111] text-[40px] font-bold w-[80%]">{title}</h1>
            <div className="flex gap-4 mt-4 mb-7">
                {
                    hashtags.map((hashtag, idx) => <p key={idx} className="text-[#11111199] text-xl font-medium">#{hashtag}</p>)
                }
            </div>
            <a className="text-[#6047EC] text-xl font-semibold underline cursor-pointer" onClick={() => handleMarkAsRead(reading_time)}>Mark as read</a>
            <hr className="mt-8 bg-[#11111199]" />
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object,
    handleBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func,
}
export default Blog;