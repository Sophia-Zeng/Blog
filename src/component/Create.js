import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('');
    const navigate = useNavigate();
    const [image, setImage] = useState('');
    const [replace, setReplace] = useState ('https://images.unsplash.com/photo-1514454529242-9e4677563e7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
   
    const handleSubmit = (e) => {
        e.preventDefault();
        let blog={title,body,author,image};

        // if the user hasn't pasted image addressS
        if (blog.image === ""){
           blog.image = 'https://images.unsplash.com/photo-1514454529242-9e4677563e7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
        }

        console.log(JSON.stringify(blog));

        fetch('http://localhost:8000/blogs/',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        })
        .then(() => {
            navigate('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <img src={replace} alt="#" />
            <form onSubmit={handleSubmit}>
                <label>Replace Image<span>(paste image address below)</span></label>
                <input type="text" value={image} onChange={(e) => {setImage(e.target.value); setReplace(e.target.value)}}/>
                <label>Blog title:</label>
                <input type="text"  value={title} onChange={(e) => setTitle(e.target.value)} required />
                <label>Blog body:</label>
                <textarea rows="24" value={body} onChange={(e) => setBody(e.target.value)} required ></textarea>
                <label>Blog author:</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;


