const mongoose=require("mongoose");

// let url="https://localhost:8080/users";

// mongoose.connect('mongodb://127.0.0.1:27017/test');


main().then((res) =>{
    console.log("connection successfully");
})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
})

const user=mongoose.model("User",userSchema);





//delete one
// user.deleteOne({name:"Alok"})
// .then((res)=>{
//     console.log(res);
// })
// .catch((res) =>{
//     console.log(res);
// })
// user.findOne({name:"Alok"}).then((res)=>{
//     console.log(res);
// })


// user.find({}).then((res)=>{
//     console.log(res);
// })


//update and find one
// user.findOneAndUpdate({name:"Alok"},{age:19},{new:true})
// .then((res)=>{
//     console.log(res);
// })
// .catch((res) =>{
//     console.log(res);
// })
// user.findOne({name:"Alok"}).then((res)=>{
//     console.log(res);
// })


//update
// user.updateOne({name:"Alok"},{age:25})
// .then((res)=>{
//     console.log(res);
// })
// .catch((res) =>{
//     console.log(res);
// })
// user.findOne({name:"Alok"}).then((res)=>{
//     console.log(res);
// })




// user.findById("69ff277f98b81c34ba556ba9")
// .then((res) =>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

// user.findOne({age:{$gte:23}}).then((res)=>{
//     console.log(res);
// })
// .catch((err) =>{
//     console.log(err);
// })

// user.insertMany([
//     {name:"patlu",email:"patlu@gmail.com",age:22},
//     {name:"keshav",email:"keshav@gmail.com",age:22},
//     {name:"uttam",email:"uttam@gmail.com",age:24},
// ]).then((res) =>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });





// const user=mongoose.model("User",userSchema);

// // const employee=mongoose.model("Employee",userSchema);

// //Inserting  One
// const user2=new user({
//     name:"Rahul",
//     email:"rahul@gmail.com",
//     age:24,
// });

// user2.save().then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })
