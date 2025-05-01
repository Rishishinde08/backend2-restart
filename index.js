
const express = require("express");

const app = express();


// console.dir(app);

let port = 3000;

app.listen(port, () => {
    console.log(`server is start and port is ${port}`);
});


app.get("/", (req,res) => {
    res.send(`app is listening on port ${port}`);
});


app.get("/about", (req, res) =>{
    res.send(`abot page is loading`);
    console.log("about is opining");
});

// app.get("/about", (req,res) => {
//     res.send(`this is a about`);
// });
// app.get("/contact", (req,res) => {
//     res.send(`this is a contact`);
// });




app.get("/:username/:id" , ( req , res ) =>{

    let { username, id} = req.params;
    let htmlstr = `<h1> your id is @${username}  </h1>`

    res.send(htmlstr);
});


// const followers = 