import { useEffect, useState } from "react";
const Home = ({ lastPost, setLastPost }) =>{
    
    useEffect(()=>{
        async function fetchBlog(){
            const response = await fetch("http://localhost:4120/blog");
            const data = await response.json();
            console.log(data[data.length-1]);
            setLastPost(data[data.length-1]);
        }
        fetchBlog();
    },[]);
    
    return(
        <main>
            <h1>Home Page</h1>
            <h2>My last Post</h2>
            <section>
                <h3> { lastPost.author }</h3>
                <p>{ lastPost.post }</p>
                <p> { lastPost.created_at } </p>
            </section>
            
        </main>
        
    );
}

export default Home;