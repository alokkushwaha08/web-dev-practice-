const mongoose=require("mongoose");

main().then((res)=>{
    console.log("connection is successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

const chatSchema=new mongoose.Schema({
    from:{
        type:String,
        require:true,
    },
    to:{
        type:String,
        require:true,
    },
    msg:{
        type:String,
    },
    created_at:{
        type:Date,
        require:true,
    }
});

const Chat=mongoose.model("Chat",chatSchema);

let allChats=[
  {
    from: "Aman",
    to: "Rahul",
    msg: "Hey Rahul, are you coming to the gym today?",
    created_at: new Date()
  },
  {
    from: "Rahul",
    to: "Aman",
    msg: "Yes bro, I'll be there by 6 PM.",
    created_at: new Date()
  },
  {
    from: "Sneha",
    to: "Priya",
    msg: "Did you complete the MongoDB assignment?",
    created_at: new Date()
  },
  {
    from: "Priya",
    to: "Sneha",
    msg: "Almost done, just practicing insertMany now.",
    created_at: new Date()
  },
  {
    from: "Karan",
    to: "Vikas",
    msg: "Let's revise Express routes together tonight.",
    created_at: new Date()
  },
  {
    from: "Vikas",
    to: "Karan",
    msg: "Sure, send me the Google Meet link.",
    created_at: new Date()
  }
]

Chat.insertMany(allChats);