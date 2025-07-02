import { useState } from "react";
const SinglePost = ({ post, handleDelete })=>{
    const [modify, setModify] = useState(false);
    const [updateAuthor, setUpdateAuthor] = useState("");
    const [updatePost, setUpdatePost] = useState(""); 
    
    async function handleSave(e){
        e.preventDefault();
        const id = post.post_id;
        const data = {
            updateAuthor,
            updatePost
        }
        const resaponse = await fetch(`http://localhost:4120/updatepost/${id}`,{
            method:"PUT",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        });
    }
    return(
        <div>
            <h2>Author:{post.author} </h2>
            <p>Post: {post.post}</p>
            <p>date: {post.created_at}</p>

            <button onClick={(e)=>handleDelete(e,post.post_id)} className="delete-btn">DELETE</button>
            <button onClick={()=>setModify(true)}>Modify</button>
            {
                modify?<div>
                    <label htmlFor="author">Author:</label>
                    <input type="text" id="author"  onChange={(e)=>setUpdateAuthor(e.target.value)}/>
                    <label htmlFor="post">Post: </label>
                    <textarea name="post" id="post"  onChange={(e)=>setUpdatePost(e.target.value)}></textarea>
                    <button onClick={(e)=>handleSave(e)}>Save</button>
                </div>:null
            }
        </div>
    );
}

export default SinglePost;