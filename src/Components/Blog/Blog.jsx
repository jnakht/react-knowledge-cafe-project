

const Blog = ({blog}) => {
    const {cover, title, author_img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div>
            <img src={cover} alt={`image of ${title}`}  />
            <div>
                <div>
                    <img src={author_img} alt="" />
                    <div>
                        <b>{author}</b>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>{reading_time} min read</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M17.593 3.322C18.693 3.45 19.5 4.399 19.5 5.507V21L12 17.25L4.5 21V5.507C4.5 4.399 5.306 3.45 6.407 3.322C10.1232 2.89063 13.8768 2.89063 17.593 3.322Z" stroke="#111111" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    </div>
                </div>
            </div>

            <h1>How to get your first job as a self-taught programmer</h1>
            <div>
                {
                    hashtags.map(hashtag => {
                       <p>#{hashtag}</p>

                    })
                }
            </div>
            <a>Mark as read</a>
        </div>
    );
};

export default Blog;