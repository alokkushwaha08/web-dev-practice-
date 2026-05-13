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
        min:[1,"price is too low for sell"]
    },
    discount:{
        type:Number,
        default:0,
    },
    category:{
        type:String,
        enum:["fiction","non-fiction"],
    }

});

const Book=mongoose.model("Book",bookSchema);

//validation in updation
Book.findByIdAndUpdate("6a01105bbe49fdc73e41d5a0",
    {price:-100},
    {runValidators:true},
)
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})




// let book1 =new Book({
//     title:"marvel comics",
//     price:400,
//     category:"fiction",
// });

// book1.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });