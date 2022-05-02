import { Link } from "react-router-dom";

const BlogList = ({blogs}) => {
    const sortedBlogs = blogs.sort((a,b) => {return b.id - a.id});

    
    return ( 
        <div>
            {sortedBlogs.map(blog => (
                <div key={blog.id}  >
                    <Link to={`/blogs/${blog.id}`}>
                        <div className="blog-preview">
                            <img src={blog.image} alt="#" />
                            <div className="article">
                                <h2>{ blog.title }</h2>
                                <p>Written by {blog.author}</p>
                                <p className="text">{ blog.body }</p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;