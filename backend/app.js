const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 4120;
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("myDB.sqlite3");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());



app.get("/blog",(req,res)=>{
    db.all("SELECT * FROM posts2",(err,row)=>{
        res.json(row);
    });
});

app.post("/createpost",async (req,res)=>{
    try{
        const author = req.body.author;
        const post = req.body.post;
        const date = new Date().toDateString();
        db.run("INSERT INTO posts2(post, author, created_at) VALUES(?, ?, ?);",[post, author, date]);
    }
    catch(error){
        console.log(error);
    }
});

app.put("/updatepost/:id", async (req,res)=>{
    const id  = req.params.id;
    const post = req.body.updatePost;
    const author = req.body.updateAuthor;
    console.log(req.body);
    db.run("UPDATE posts2 SET post = ?, author = ? WHERE post_id = ?",[post, author, id ]);

});

app.delete("/deletepost/:id",async (req,res)=>{
    try{
        /*console.log(req.params);*/
        const { id } = req.params; 
        db.run("DELETE FROM posts2 WHERE post_id = ?",id);
    }
    catch(error){
        console.log(error);
    }
});

app.listen(port,()=>{
    console.log(`Server listening on PORT: ${port}`);
});