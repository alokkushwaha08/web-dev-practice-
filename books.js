const mongoose=require("mongoose");


main().then((res) =>{
    console.log("connection successfully");
})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

//schema validations
const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
    },

});

const Book=mongoose.model("Book",bookSchema);

let book1 =new Book({
    title:"12th Rd sharma",
    author:"xyz",
    price:1200,
});

book1.save()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});