import "./Product.css";

function Product({title,price="300",features}){
    let isDiscount=(price>30000);
    let styles={backgroundColor :isDiscount?"pink":""};
    // console.log(props.title);
    // console.log(features);
    // let isDiscount=(price>30000)?"discount of 5%":"";


    return (
    <div className="product" style={styles}>
    <h2>{title}</h2>
    <h5>Price: {price}</h5>
    <p>{features}</p>
    <p>{isDiscount && "discount of 6%"}</p>
    </div>
    );
}
export default Product;