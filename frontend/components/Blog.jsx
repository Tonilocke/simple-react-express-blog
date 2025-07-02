import { useEffect, useState } from "react";
import SinglePost from "./SinglePost";
const Blog = () =>{
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        async function fetchBlog(){
            const res = await fetch("http://localhost:4120/blog");
            const data = await res.json();
            setPosts(data);
        }
        fetchBlog();
    },[]);
    function handleDelete(e, id){
        e.preventDefault();
        const newPosts = posts.filter(post =>post.post_id !== id);
        setPosts(newPosts); 
        const response = fetch(`http://localhost:4120/deletepost/${id}`,{
            method: "DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        });
    }
   
    
    return(
        posts.length == 0? (<h2>Nothig to see for now</h2>):
        posts.map((post)=>(
            <SinglePost post={post} key={post.post_id} handleDelete={ handleDelete } />
        ))
    );
}

export default Blog;