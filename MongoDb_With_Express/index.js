const express =require("express");
const app=express();

const mongoose=require("mongoose");
const path=require("path");
const Chat=require("./models/chat.js");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

main().then((res)=>{
    console.log("connection is successful");
})
.catch(err => console.log(err));



async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
let user ="alok"

let chat1=new Chat({
    from:"Adam",
    to:"John",
    msg:"Hyy, how are you",
    created_at:new Date()
});

chat1.save().then((res)=>{
    console.log(res);
})
.catch((res)=>{
    console.log(res);
});

app.get("/",(req ,res) =>{
    res.send("Server is working");
})

app.listen(8080,()=>{
    console.log("server is listening on port 8080");
});