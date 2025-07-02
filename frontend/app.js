import Navbar from "./components/Navbar";
import "./app.css";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Blogpost from "./components/Blogpost";
import { useState } from "react";
const App = ()=>{
    const [route, setRoute] = useState("/");
    const [lastPost, setLastPost] = useState({});
    return(
        <>
            <Navbar setRoute={ setRoute }/>
            { route == "/" ? <Home lastPost={lastPost} setLastPost= {setLastPost}/>: null }
            { route == "/blog" ? <Blog />: null }
            { route == "/createpost" ? <Blogpost /> : null}
        </>
    );
}

export default App;