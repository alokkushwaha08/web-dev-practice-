import "./App.css";
import {Title} from "./Title.jsx";
import Product from "./assets/product.jsx";
import MsgBox from "./MsgBox.jsx"



function Description(){
  return <h1>Hello ,I am Description</h1>;
}


function App(){
  let options=["hi-teh","durable","fast"];
  // return <Title/>;
  return (
  // <div>
  //   <Title/>
  //   <Description />
  //    <Title/>
  //    <Description />
  // </div>
 
  

 
  <div>
    <MsgBox username="alok" textColor="pink"/>
    <MsgBox username="alok" textColor="Yellow"/>
  {/* <Product title="iphone" price={30000} />
  <Product title="laptop" price={40000} />
  <Product title="shoe" /> */}
</div>
  )

  
}

export default App;