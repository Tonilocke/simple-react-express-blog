import { useEffect, useState } from "react";

const Blogpost = () =>{
    const [author, setAuthor] = useState("");
    const [post, setPost] = useState("");
    
    async function handleSubmit(e){
        e.preventDefault();
        const data = {
            author,
            post
        }
        const response = await fetch("http://localhost:4120/createpost",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        });
        setAuthor(" ");
        setPost(" ");
    }

    function handleAuthor(e){
        e.preventDefault();
        const author =  e.target.value;
        setAuthor(author);
        e.target.value = "";
    }
    function handlePost(e){
        e.preventDefault();
        const post =  e.target.value;
        setPost(post);
        e.target.value= "";
    }
    return(
        <div>
            <h2>Create a blog post</h2>
            <input type="text" placeholder="author"  aria-placeholder="author" onChange={(e)=>handleAuthor(e)} id="author" value={ author }/>
            <textarea name="post" id="post" placeholder="post" aria-placeholder="post" onChange={(e)=>handlePost(e)} value={ post }></textarea>
            <button onClick={(e)=>handleSubmit(e)} type="submit">Submit</button>
        </div>
    );
}

export default Blogpost;