//we are creating component  (product component)


//for stle
import "./product.css";



//    yaha "props" likh do ya destructuring "{title,description}" kr do
// props.descriptionprops ka access->props.title,
// function Product({title,price=1,features,features2}) {  
//     return (
//         <div className="Product">
//             <h3> {title} </h3>      
//             <h5>price : {price}</h5>
//             <p>{features}</p>
//             <p>{features2}</p>
//         </div>
//     );
// }



// for rendering array 


// function Product({title,price=1,features}) { 

//     // using map concept for dotted like points
//     const list=features.map((feature) => <li>{feature}</li>); 
//     return (
//         <div className="Product">
//             <h3> {title} </h3>      
//             <h5>price : {price}</h5>
//             <p>{list}</p>

//         </div>
//     );
// }








//conditional---->
// jis product ka price gretaer than 30000  uspe discount 5%



// function Product({title,price=1}) { 


//     if(price>3000){   
//      return (
//          <div className="Product">
//          <h3> {title} </h3>      
//          <h5>price : {price}</h5>
//          <p>Discount of 5%.</p> 
//      </div>
//      )

//     } else {  //otherwise return this
//     return (
//      <div className="Product">
//      <h3> {title} </h3>      
//      <h5>price : {price}</h5>
//     <p>No dicount because price is not more than 3000</p>

//          </div>
//     )
//     }

// }




//   for readable code




function Product({ title, price = 1 }) {

    let isDiscount=price>3000?"Discount of 5%" : "No Discount,(price is less than 3000)"
          //styles in jsx
    //  let styles={backgroundColor:"Aqua"}
                   // ,but wee want add style based on some condition
     let styles={backgroundColor:price>3000? "Aqua":""}

        return (
            <div className="Product" style={styles}>
                <h3> {title} </h3>
                <h5>price : {price}</h5>
                <p>{isDiscount}</p>
            </div>
        )
}







export default Product;





