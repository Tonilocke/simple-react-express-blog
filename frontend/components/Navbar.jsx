const Navbar = ({ setRoute })=>{
    function setRoutes(e, newRoute){
        e.preventDefault();
        setRoute(newRoute);
    }
    return(
        <nav>
            <a href="/" onClick={(e)=>setRoutes(e, "/")}>Home</a>
            <a href="/blog" onClick={(e)=>setRoutes(e, "/blog")}>Blog</a>
            <a href="/createpost" onClick={(e)=>setRoutes(e, "/createpost")}>Blogpost</a>
        </nav>
    );
}

export default Navbar;